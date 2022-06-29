import { PrismaClient } from '@prisma/client';
import { ITaskModel, StatusTask, TaskDTO } from './interfaces';

export default class TaskModel implements ITaskModel {
  private _connection: PrismaClient;

  constructor(connection: PrismaClient) {
    this._connection = connection;
  }

  public async getAll(userId: string): Promise<TaskDTO[]> {
    const tasksData = await this._connection.task.findMany({
      where: { userId },
    });

    return tasksData as TaskDTO[];
  }

  public async getById(id: string, userId: string): Promise<TaskDTO> {
    const taskData = await this._connection.task.findFirst({
      where: { id, userId },
    });

    return taskData as TaskDTO;
  }

  public async getAllDone(userId: string): Promise<TaskDTO[]> {
    const tasksData = await this._connection.task.findMany({
      where: { status: 'PRONTO', userId },
    });

    return tasksData as TaskDTO[];
  }

  public async create(description: string, userId: string): Promise<TaskDTO> {
    const taskData = await this._connection.task.create({
      data: {
        description,
        userId,
      },
    });

    return taskData as TaskDTO;
  }

  public async updateDescriptionById(id: string, description: string): Promise<TaskDTO> {
    const taskData = await this._connection.task.update({
      data: { description },
      where: { id },
    });

    return taskData as TaskDTO;
  }

  public async updateStatusById(id: string, status: StatusTask): Promise<TaskDTO> {
    const taskData = await this._connection.task.update({
      data: { status },
      where: { id },
    });

    return taskData as TaskDTO;
  }

  public async deleteById(id: string): Promise<void> {
    await this._connection.task.delete({
      where: { id },
    });
  }

  public async deleteAllDone(userId: string): Promise<void> {
    await this._connection.task.deleteMany({
      where: { status: 'PRONTO', userId },
    });
  }
}
