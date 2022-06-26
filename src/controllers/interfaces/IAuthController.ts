import { Request, Response } from 'express';

export default interface IAuthController {
  authenticate(req: Request, res: Response): Promise<Response>;
}
