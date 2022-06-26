import { Request, Response } from 'express';

export default interface IUserController {
  // getById(req: Request, res: Response): Promise<Response>;
  create(req: Request, res: Response): Promise<Response>;
  // updateById(req: Request, res: Response): Promise<Response>;
  // deleteById(req: Request, res: Response): Promise<Response>;
}
