import { ConnectionOptions } from "typeorm";
import { User } from '../resources/users/user.model';
import { Board } from '../resources/boards/board.model';
import { Task } from '../resources/tasks/task.model';
import { POSTGRES_PORT, POSTGRES_PASSWORD, POSTGRES_USER, POSTGRES_DB, POSTGRES_HOST } from './config';

export const config = {
  "type": 'postgres',
  "synchronize": true,
  "host": POSTGRES_HOST,
  "port": POSTGRES_PORT,
  "username": POSTGRES_USER,
  "password": POSTGRES_PASSWORD,
  "database": POSTGRES_DB,
  "autoReconnect": true,
  "reconnectTries": Number.MAX_VALUE,
  "entities": [User, Board, Task],
  "reconnectionInterval": 1000
} as ConnectionOptions;
