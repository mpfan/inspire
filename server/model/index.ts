// Models
import { Sequelize } from "sequelize/types";
import { CreatePublicAPI } from "./PublicAPI";

export const initDb = async (sequelize: Sequelize) => {
  CreatePublicAPI(sequelize);
  await sequelize.sync();
};
