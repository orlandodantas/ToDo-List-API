import { Router } from 'express';
import { TaskFactory } from '../factories';
import authMiddleware from '../middleware/authMiddleware';

const route = Router();

const taskController = TaskFactory.create();
route
  .get('/', authMiddleware, taskController.getAll)
  .get('/:id', authMiddleware, taskController.getById)
  .post('/', authMiddleware, taskController.create)
  .put('/:id/description', authMiddleware, taskController.updateDescriptionById)
  .put('/:id/status', authMiddleware, taskController.updateStatusById)
  .delete('/done', authMiddleware, taskController.deleteAllDone)
  .delete('/:id', authMiddleware, taskController.deleteById);

export default route;
