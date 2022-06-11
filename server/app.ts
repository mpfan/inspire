import express, { Express } from "express";

import { initDb } from "./model";

import { sequelize } from "./services/DBService";

import { publicAPIRouter } from "./route/PublicApiRoute";
import { defaultRouter } from "./route/DefaultRoute";

const app: Express = express();
const port: string | undefined = process.env.PORT;

(async () => {
  await initDb(sequelize);

  app.use(publicAPIRouter);
  app.use(defaultRouter);

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
})();
