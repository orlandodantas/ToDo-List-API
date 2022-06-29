import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ITaskService } from '../services/interfaces';
import { ITaskController } from './interfaces';

export default class TaskController implements ITaskController {
  private _taskService: ITaskService;

  constructor(taskService: ITaskService) {
    this._taskService = taskService;
  }

  public async getAll(req: Request, res: Response): Promise<Response> {
    const { id: userId } = req.userLogin;

    const taskData = await this._taskService.getAll(userId as string);

    return res.status(StatusCodes.OK).json(taskData);
  }

  public async getById(req: Request, res: Response): Promise<Response> {
    const { id: userId } = req.userLogin;
    const { id } = req.params;

    const taskData = await this._taskService.getById(id, userId as string);

    return res.status(StatusCodes.OK).json(taskData);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { id: userId } = req.userLogin;
    const { description } = req.body;

    const taskData = await this._taskService.create(description, userId as string);

    return res.status(StatusCodes.CREATED).json(taskData);
  }

  public async updateDescriptionById(req: Request, res: Response): Promise<Response> {
    const { id: userId } = req.userLogin;
    const { id } = req.params;
    const { description } = req.body;

    const taskData = await this._taskService.updateDescriptionById(id, description, userId as string);

    return res.status(StatusCodes.CREATED).json(taskData);
  }

  public async updateStatusById(req: Request, res: Response): Promise<Response> {
    const { id: userId } = req.userLogin;
    const { id } = req.params;
    const { status } = req.body;

    const taskData = await this._taskService.updateStatusById(id, status, userId as string);

    return res.status(StatusCodes.CREATED).json(taskData);
  }

  public async deleteById(req: Request, res: Response): Promise<Response> {
    const { id: userId } = req.userLogin;
    const { id } = req.params;

    await this._taskService.deleteById(id, userId as string);

    return res.status(StatusCodes.OK).end();
  }

  public async deleteAllDone(req: Request, res: Response): Promise<Response> {
    const { id: userId } = req.userLogin;

    await this._taskService.deleteAllDone(userId as string);

    return res.status(StatusCodes.OK).end();
  }
}
