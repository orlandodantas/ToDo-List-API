import { Router } from 'express';
import { TaskFactory } from '../factories';

const route = Router();

const taskController = TaskFactory.create();
route
  .get('/', taskController.getAll)
  .get('/:id', taskController.getById)
  .post('/', taskController.create)
  .put('/:id/description', taskController.updateDescriptionById)
  .put('/:id/status', taskController.updateStatusById)
  .delete('/:id', taskController.deleteById)
  .delete('/done', taskController.deleteAllDone);

export default route;
