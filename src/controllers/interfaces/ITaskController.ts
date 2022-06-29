import { Request, Response } from 'express';

export default interface ITaskController {
  getAll(req: Request, res: Response): Promise<Response>;
  getById(req: Request, res: Response): Promise<Response>;
  create(req: Request, res: Response): Promise<Response>;
  updateDescriptionById(req: Request, res: Response): Promise<Response>;
  updateStatusById(req: Request, res: Response): Promise<Response>;
  deleteById(req: Request, res: Response): Promise<Response>;
  deleteAllDone(req: Request, res: Response): Promise<Response>;
}
