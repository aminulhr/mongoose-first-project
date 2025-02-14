import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
const app: Application = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  const a = 19;
  const b = 19;
  const df = 'dfdsa';
  const d = 'fkdfksd';

  res.send('Hello World!');
});

export default app;
