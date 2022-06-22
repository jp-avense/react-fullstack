import express from 'express';
import logger from 'helpers/logger';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import connection from './db/config';
import todoRoutes from './routes/todos';

logger('just a testing :))))');
const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

app.use('/todos', todoRoutes);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);

connection
  .sync()
  .then(() => {
    console.log('Database synced successfully.');
  })
  .catch(err => {
    console.log('Error', err);
  });

app.get('/', (req, res) =>
  res.json({
    message: 'Hello world!',
  })
);

app.listen(8080, () => console.log('Server is now running at port %d', 8080));

export default app;
