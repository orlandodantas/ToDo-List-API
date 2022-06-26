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

  /* public async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const userData = await this._userService.getById(id);

    return res.status(StatusCodes.OK).json(userData);
  } */

  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    const jwtToken = await this._userService.create({ name, email, password });

    return res.status(StatusCodes.CREATED).json({ token: jwtToken });
  }

  /* public async updateById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const userData = await this._userService.updateById(id, { name, email, password });

    return res.status(StatusCodes.OK).json(userData);
  } */

  /* public async deleteById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    await this._userService.deleteById(id);

    return res.status(StatusCodes.OK).end();
  } */
}
