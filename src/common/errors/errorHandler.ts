import {
  StatusCodes,
  getStatusCode
} from 'http-status-codes';
import express from 'express';

const { logger } = require('./logger');

export const errorHandler = async (err:any, _req:express.Request, res:express.Response, next:express.NextFunction) => {
  if (err) {
    const status = err.status ? err.status : StatusCodes.INTERNAL_SERVER_ERROR;
    logger.error(JSON.stringify({ status, message: status }));
    await res.status(status).json({ message: getStatusCode(status) });
  }
  next();
};

export const catchErrors = (fn: any) => async (req: express.Request, res:express.Response, next:express.NextFunction) => {
  try {
    return await fn(req, res, next);
  } catch (e) {
    return next(e);
  }
};
