import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./local/data/test.db",
});
