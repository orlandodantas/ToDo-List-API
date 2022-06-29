import { TaskController } from '../controllers';
import connection, { TaskModel } from '../models';
import TaskService from '../services/TaskService';

export default class TaskFactory {
  public static create() {
    const taskModel = new TaskModel(connection);
    const taskService = new TaskService(taskModel);
    const taskController = new TaskController(taskService);

    return taskController;
  }
}
