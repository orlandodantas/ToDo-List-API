import { Router } from 'express';
import { AuthFactory } from '../factories';

const route = Router();
const authController = AuthFactory.create();

route.post('/', authController.authenticate);

export default route;
