import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { User } from '../resources/users/user.model';
import { Board } from '../resources/boards/board.model';
import { Task } from '../resources/tasks/task.model';

const typeOrmConfig: PostgresConnectionOptions = {
  "type": 'postgres',
  "host": 'host.docker.internal',
  "port": Number(process.env['POSTGRES_PORT']),
  "username": process.env['POSTGRES_USER'],
  "password": process.env['POSTGRES_PASSWORD'],
  "database": process.env['POSTGRES_DB'],
  // "autoReconnect": true,
  // "reconnectTries": Number.MAX_VALUE,
  // "reconnectionInterval": 1000,
  "entities": [User, Board, Task],
  "synchronize": true,
  "logging": false,
};

export { typeOrmConfig };
