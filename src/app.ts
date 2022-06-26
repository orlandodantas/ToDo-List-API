import express from 'express';
import handleError from './middleware';
import userRouter from './routers';

const app = express();

app.use(express.json());

app.use('/users', userRouter);

app.use(handleError);
export default app;
