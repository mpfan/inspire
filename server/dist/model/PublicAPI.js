"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePublicAPI = exports.PublicAPI = void 0;
const sequelize_1 = require("sequelize");
class PublicAPI extends sequelize_1.Model {
}
exports.PublicAPI = PublicAPI;
const CreatePublicAPI = (sequelize) => {
    PublicAPI.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
        },
        url: {
            type: sequelize_1.DataTypes.STRING,
        },
        description: {
            type: sequelize_1.DataTypes.STRING,
        },
    }, {
        tableName: "PublicAPI",
        sequelize: sequelize,
        timestamps: false
    });
};
exports.CreatePublicAPI = CreatePublicAPI;
