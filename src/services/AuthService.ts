import Joi from 'joi';
import { BadRequestError, NotFoundError } from 'restify-errors';
import JWTAuthenticate, { Crypt } from '../utils';
import IUserService, { IAuthService } from './interfaces';

export default class AuthService implements IAuthService {
  private _userService: IUserService;

  constructor(userService: IUserService) {
    this._userService = userService;
  }

  public async authenticate(email: string, password: string): Promise<string> {
    AuthService.validateData(email, password);

    const userFound = await this._userService.getByEmail(email);

    // if (!userFound) throw new NotFoundError('Email or password invalid!');

    const isPassword = await Crypt.decrypt(password, userFound.password);

    if (!isPassword) throw new NotFoundError('Email or password invalid!');

    return JWTAuthenticate.encrypt({ id: userFound.id, name: userFound.name, email });
  }

  private static validateData(email: string, password: string): void {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    });

    const { error } = schema.validate({ email, password });

    if (error) throw new BadRequestError(error.message);
  }
}
