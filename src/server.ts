import { createConnection } from 'typeorm';

import 'reflect-metadata';

import { config } from './common/ormconfig';

import { app } from './app';

import { PORT } from './common/config';

createConnection(config).then(async () => {
  app.listen(PORT, () =>
    console.log(`App is running on http://localhost:${PORT}`)
  );
}).then(() => {
  console.log('Connection created')
})["catch"](error => {console.log("TypeORM connection error: ", error)});
