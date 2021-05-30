const { PORT } = require('./common/config');
import * as app from './app';

app.app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);
