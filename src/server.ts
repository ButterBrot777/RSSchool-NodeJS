import * as app from './app';

import { PORT } from './common/config';

app.app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);
