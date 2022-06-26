import Joi from 'joi';
import { BadRequestError, ConflictError, NotFoundError } from 'restify-errors';
import { IUserModel, UserDTO } from '../models/interfaces';
import JWTAuthenticate, { Crypt } from '../utils';
import IUserService from './interfaces';

export default class UserService implements IUserService {
  private _userModel: IUserModel;

  constructor(userModel: IUserModel) {
    this._userModel = userModel;
  }

  public async getById(id: string): Promise<UserDTO> {
    const userData = await this._userModel.getById(id);

    if (!userData) throw new NotFoundError('User not found!');

    return userData;
  }

  public async getByEmail(email: string): Promise<UserDTO> {
    const userData = await this._userModel.getByEmail(email);

    if (!userData) throw new NotFoundError('User not found!');

    return userData;
  }

  /* public async create(user: UserDTO): Promise<UserDTO> {
    UserService.validateData(user);
    const { name, email, password } = user;
    const hash = await Crypt.encrypt(password);

    const userData = await this._userModel.create({name, email, password: hash});

    return userData;
  } */

  public async create(user: UserDTO): Promise<string> {
    UserService.validateData(user);
    const { name, email, password } = user;
    const hash = await Crypt.encrypt(password);

    const emailFound = await this._userModel.getByEmail(user.email);

    if (emailFound) throw new ConflictError('Email is exists');

    const { id, name: userName, email: userEmail } = await this._userModel.create({ name, email, password: hash });

    return JWTAuthenticate.encrypt({ id, name: userName, email: userEmail });
  }

  /* public async updateById(id: string, user: UserDTO): Promise<UserDTO> {
    UserService.validateData(user);

    const userFound = await this._userModel.getById(id);

    if (!userFound) throw new NotFoundError('User not found!');

    const userData = await this._userModel.updateById(id, user);

    return userData;
  } */

  /* public async deleteById(id: string): Promise<void> {
    const userFound = await this._userModel.getById(id);

    if (!userFound) throw new NotFoundError('User not found!');

    await this._userModel.deleteById(id);
  } */

  private static validateData(user: UserDTO): void {
    const schema = Joi.object({
      id: Joi.string().min(5),
      name: Joi.string().min(3).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    });

    const { error } = schema.validate(user);

    if (error) throw new BadRequestError(error.message);
  }
}
