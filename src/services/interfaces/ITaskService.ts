import { StatusTask, TaskDTO } from '../../models/interfaces';

export default interface ITaskService {
  getAll(userId: string): Promise<TaskDTO[]>;
  getById(id: string, userId: string): Promise<TaskDTO>;
  create(task: TaskDTO, userId: string): Promise<TaskDTO>;
  updateDescriptionById(id: string, description: string, userId: string): Promise<TaskDTO>;
  updateStatusById(id: string, status: StatusTask, userId: string): Promise<TaskDTO>;
  deleteById(id: string, userId: string): Promise<void>;
  deleteAllDone(userId: string): Promise<void>;
}
