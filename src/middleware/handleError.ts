/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { StatusCodes } from 'http-status-codes';
import customError from './interfaces';

const handleError = (
  err: customError,
  _req: Request,
  res: Response,
  _next: NextFunction,
): Response => {
  if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: 'Invalid token or Expired Token',
    });
  }

  if (err.statusCode)
    return res.status(err.statusCode).json({ message: err.message });

  console.error(err);
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ message: 'Internal server error' });
};

export default handleError;
