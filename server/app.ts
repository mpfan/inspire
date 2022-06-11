import express, { Express } from "express";

import { initDb } from "./model";

import { sequelize } from "./services/DBService";

import { publicAPIRouter } from "./route/PublicApiRoute";

const app: Express = express();
const port: string | undefined = process.env.PORT;

(async () => {
  await initDb(sequelize);

  app.use(publicAPIRouter);

  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
})();
