import express, { Express, Request, Response } from 'express';
import { Sequelize } from 'sequelize';

const app: Express = express();
const port: string | undefined = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
}); 