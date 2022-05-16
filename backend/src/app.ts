import express from 'express';
import cors from 'cors'

import logger from 'helpers/logger'

logger('just a testing :)')

const app = express();
app.use(cors())

app.get('/', (req, res) => res.json({
  message: 'Hello world!',
}));


app.listen(8000, () => console.log('Server is now running at port %d', 8000));

export default app;
