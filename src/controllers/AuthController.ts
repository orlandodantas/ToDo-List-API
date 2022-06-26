import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IAuthService } from '../services/interfaces';
import { IAuthController } from './interfaces';

export default class AuthController implements IAuthController {
  private _authService: IAuthService;

  constructor(authService: IAuthService) {
    this._authService = authService;
    this.authenticate = this.authenticate.bind(this);
  }

  public async authenticate(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const hash = await this._authService.authenticate(email, password);

    return res.status(StatusCodes.OK).json({ token: hash });
  }
}
