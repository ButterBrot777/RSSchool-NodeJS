import { createLogger, format, transports } from 'winston';
import express from 'express';
const path = require('path');

export const logger = createLogger({
  level: 'silly',
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(__dirname, '../../../logs/error.log'),
      level: 'error',
      format: format.combine(format.timestamp(), format.json())
    }),
    new transports.File({
      filename: path.join(__dirname, '../../../logs/info.log'),
      level: 'info',
      format: format.combine(format.timestamp(), format.json())
    })
  ]
});

export const logInfo = (req: express.Request, _res:express.Response, next:express.NextFunction) => {
  logger.info(
    `Url: ${req.url}, Params: ${JSON.stringify(
      req.params
    )}, Body: ${JSON.stringify(req.body)}`
  );
  next();
};

export const logError = (err:any, _req:express.Request, _res:express.Response, next:express.NextFunction) => {
  logger.error(
    `ERROR: ${err.code || 500} ${err.message || 'Internal Server Error'}, 
    Details: ${err.stack}`
  );
  next(err);
};

export const logProcessErrors = (message: string, err: any) => {
  logger.error(`Error: ${err.code || 500} ${message}`);
};
