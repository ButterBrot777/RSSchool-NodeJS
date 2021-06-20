import { createConnection, getConnection } from 'typeorm';

import 'reflect-metadata';

import { typeOrmConfig } from './common/ormconfig';

import { app } from './app';

import { PORT } from './common/config';

(async () => {
  let connection;
  try {
    connection = getConnection()
  } catch(err) {
    console.error(err);
  }
  try{
    if (connection) {
      if(connection.isConnected) await connection.connect()
    } else {
      await createConnection(typeOrmConfig);
    }
    console.log('Connected!');

  } catch (err) {
    console.error(err);
  }

  app.listen(PORT, () => console.log(`App is running on http://localhost:${PORT}`));
})();
