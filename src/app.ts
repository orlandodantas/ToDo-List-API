import cors from 'cors';
import express from 'express';
import handleError from './middleware';
import userRouter, { authRouter, taskRouter } from './routers';

const app = express();

app.use(express.json());
app.use(cors);

app.use('/users', userRouter).use('/auth', authRouter).use('/tasks', taskRouter);

app.use(handleError);
export default app;
