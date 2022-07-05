import { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { UnauthorizedError } from 'restify-errors';
import JWTAuthenticate from '../utils';

const authMiddleware = (req: Request, _res: Response, next: NextFunction): void => {
  const { authorization } = req.headers;

  if (!authorization) throw new UnauthorizedError('Authorization is necessary');

  const payload = JWTAuthenticate.decrypt(authorization);

  req.userLogin = {
    id: payload.id,
    email: payload.email,
  };

  next();
};

export default authMiddleware;
