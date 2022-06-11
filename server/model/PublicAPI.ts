import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { Sequelize } from "sequelize/types";

export class PublicAPI extends Model<
  InferAttributes<PublicAPI>,
  InferCreationAttributes<PublicAPI>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare url: string;
  declare description: string;
}

export const CreatePublicAPI: (sequelize: Sequelize) => void = (
  sequelize: Sequelize
) => {
  PublicAPI.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      url: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "PublicAPI",
      sequelize: sequelize,
      timestamps: false
    }
  );
};