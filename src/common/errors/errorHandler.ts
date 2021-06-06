import {
  StatusCodes,
  getStatusCode
} from 'http-status-codes';
import express from 'express';
import { IError, logger } from './logger';

export const errorHandler = async (err:IError, _req:express.Request, res:express.Response, next:express.NextFunction) => {
  if (err) {
    const status = err.status ? err.status : StatusCodes.INTERNAL_SERVER_ERROR.toString();
    logger.error(JSON.stringify({ status, message: status }));
    await res.status(Number(status)).json({ message: getStatusCode(status) });
  }
  next();
};

export const catchErrors = (fn) => async (req: express.Request, res:express.Response, next:express.NextFunction) => {
  try {
    return await fn(req, res, next);
  } catch (e) {
    return next(e);
  }
};
