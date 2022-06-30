import Joi from 'joi';
import { BadRequestError, NotFoundError } from 'restify-errors';
import { ITaskModel, StatusTask, TaskDTO } from '../models/interfaces';
import { ITaskService } from './interfaces';

export default class TaskService implements ITaskService {
  private _taskModel: ITaskModel;

  constructor(taskModel: ITaskModel) {
    this._taskModel = taskModel;
  }

  public async getAll(userId: string): Promise<TaskDTO[]> {
    const { error } = Joi.object({
      userId: Joi.string().min(10).required(),
    }).validate({ userId });

    if (error) throw new BadRequestError(error.message);

    const tasksData = await this._taskModel.getAll(userId);

    if (!tasksData || tasksData.length === 0) throw new NotFoundError('No task found');

    return tasksData;
  }

  public async getById(id: string, userId: string): Promise<TaskDTO> {
    const { error } = Joi.object({
      id: Joi.string().min(10).required(),
      userId: Joi.string().min(10).required(),
    }).validate({ id, userId });

    if (error) throw new BadRequestError(error.message);

    const taskData = await this._taskModel.getById(id, userId);

    if (!taskData || Object.keys(taskData).length === 0) throw new NotFoundError('No task found');

    return taskData;
  }

  public async create(description: string, userId: string): Promise<TaskDTO> {
    const { error } = Joi.object({
      description: Joi.string().required(),
      userId: Joi.string().min(10).required(),
    }).validate({ description, userId });

    if (error) throw new BadRequestError(error.message);

    const taskData = await this._taskModel.create(description, userId);

    return taskData;
  }

  public async updateDescriptionById(
    id: string,
    description: string,
    userId: string,
  ): Promise<TaskDTO> {
    const { error } = Joi.object({
      id: Joi.string().min(10).required(),
      description: Joi.string().min(3).required(),
      userId: Joi.string().min(10).required(),
    }).validate({ id, description, userId });

    if (error) throw new BadRequestError(error.message);

    // Se não encontrar ele dará o erro dizendo no task found, se passar é porque encontrou;
    this.getById(id, userId);

    const taskData = await this._taskModel.updateDescriptionById(id, description);

    return taskData;
  }

  public async updateStatusById(id: string, status: StatusTask, userId: string): Promise<TaskDTO> {
    const { error } = Joi.object({
      id: Joi.string().min(10).required(),
      status: Joi.string()
        .valid(StatusTask.PENDENTE, StatusTask.ANDAMENTO, StatusTask.PRONTO)
        .required(),
      userId: Joi.string().min(10).required(),
    }).validate({ id, status, userId });

    if (error) throw new BadRequestError(error.message);

    this.getById(id, userId);

    const taskData = await this._taskModel.updateStatusById(id, status);

    return taskData;
  }

  public async deleteById(id: string, userId: string): Promise<void> {
    const { error } = Joi.object({
      id: Joi.string().min(10).required(),
      userId: Joi.string().min(10).required(),
    }).validate({ id, userId });

    if (error) throw new BadRequestError(error.message);

    this.getById(id, userId);

    await this._taskModel.deleteById(id);
  }

  public async deleteAllDone(userId: string): Promise<void> {
    const { error } = Joi.object({
      userId: Joi.string().min(10).required(),
    }).validate({ userId });

    if (error) throw new BadRequestError(error.message);

    const tasksDoneFound = await this._taskModel.getAllDone(userId);

    if (!tasksDoneFound || tasksDoneFound.length === 0) throw new NotFoundError('No task found');

    await this._taskModel.deleteAllDone(userId);
  }
}
