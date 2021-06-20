import { ConnectionOptions } from "typeorm";
import { User } from '../resources/users/user.model';
import { Board } from '../resources/boards/board.model';
import { Task } from '../resources/tasks/task.model';

export const config = {
  "type": 'postgres',
  "synchronize": true,
  "host": process.env['POSTGRES_HOST'],
  "port": 5432,
  "username": process.env['POSTGRES_USER'],
  "password": process.env['POSTGRES_USE'],
  "database": process.env['POSTGRES_DB'],
  "autoReconnect": true,
  "reconnectTries": Number.MAX_VALUE,
  "entities": [User, Board, Task],
  "reconnectionInterval": 1000
} as ConnectionOptions;
