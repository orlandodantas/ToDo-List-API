import { Router } from 'express';
import UserFactory from '../factories';

const route = Router();

const userController = UserFactory.create();

route.post('/', userController.create);

export default route;
