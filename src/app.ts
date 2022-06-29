import express from 'express';
import handleError from './middleware';
import userRouter, { authRouter, taskRouter } from './routers';

const app = express();

app.use(express.json());

app
  .use('/users', userRouter)
  .use('/auth', authRouter)
  .use('/tasks', taskRouter);

app.use(handleError);
export default app;
