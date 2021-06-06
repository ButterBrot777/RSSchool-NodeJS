import express from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from "yamljs";
import { router as userRouter } from './resources/users/user.router';
import { router as boardRouter } from './resources/boards/board.router';
import { router as taskRouter } from './resources/tasks/task.router';

import {
  logInfo,
  logError,
  logProcessErrors } from './common/errors/logger';

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use(logInfo);

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req:express.Request, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);
app.use('/boards', boardRouter, taskRouter);

app.use(logError);

process.on('uncaughtException', logProcessErrors);
// throw Error('Oops!');
process.on('unhandledRejection', logProcessErrors);
// Promise.reject(Error('Oops!'));

export { app }
