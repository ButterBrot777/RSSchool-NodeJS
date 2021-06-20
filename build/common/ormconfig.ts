import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { User } from '../resources/users/user.model';

const typeOrmConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'host.docker.internal',
  port: Number(process.env['POSTGRES_PORT']),
  username: process.env['POSTGRES_USER'],
  password: process.env['POSTGRES_PASSWORD'],
  database: process.env['POSTGRES_DB'],
  entities: [User],
  synchronize: true,
  logging: false,
};

export { typeOrmConfig };
