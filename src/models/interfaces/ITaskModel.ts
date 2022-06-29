export enum StatusTask {
  PENDENTE = 'PENDENTE',
  ANDAMENTO = 'ANDAMENTO',
  PRONTO = 'PRONTO',
}

export type TaskDTO = {
  id?: string;
  description: string;
  status?: StatusTask;
  createAt?: Date;
  user?: {
    name: string;
    email: string;
  };
};

export default interface ITaskModel {
  getAll(userId: string): Promise<TaskDTO[]>;
  getById(id: string, userId: string): Promise<TaskDTO>;
  getAllDone(userId: string): Promise<TaskDTO[]>;
  create(task: TaskDTO, userId: string): Promise<TaskDTO>;
  updateDescriptionById(id: string, description: string): Promise<TaskDTO>;
  updateStatusById(id: string, status: StatusTask): Promise<TaskDTO>;
  deleteById(id: string): Promise<void>;
  deleteAllDone(userId: string): Promise<void>;
}
