import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import IUserService from '../services/interfaces';
import IUserController from './interfaces';

export default class UserController implements IUserController {
  private _userService: IUserService;

  constructor(userService: IUserService) {
    this._userService = userService;
    this.create = this.create.bind(this);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    const jwtToken = await this._userService.create({ name, email, password });

    return res.status(StatusCodes.CREATED).json({ token: jwtToken });
  }
}
