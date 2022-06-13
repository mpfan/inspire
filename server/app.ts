import express, { Express } from "express";
import cors from "cors";

import { initDb } from "./model";

import { sequelize } from "./services/DBService";
import { logger } from "./services/LoggingService";

import { publicAPIRouter } from "./route/PublicApiRoute";
import { defaultRouter } from "./route/DefaultRoute";

const app: Express = express();
const port: number = 4000;

(async () => {
  logger.info("Initializing database...");
  await initDb(sequelize);
  logger.info("Database initialized successfully...");

  app.use(cors());

  logger.info("Initializing routes...");
  app.use(publicAPIRouter);
  app.use(defaultRouter);
  logger.info("Routes initialized successfully...");

  app.listen(port, () => {
    logger.info(`Server is running at http://localhost:${port}`);
  });
})();
