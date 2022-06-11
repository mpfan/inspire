"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDb = void 0;
const sequelize_1 = require("sequelize");
// Models
const PublicAPI_1 = require("./PublicAPI");
const sequelize = new sequelize_1.Sequelize({
    dialect: "sqlite",
    storage: process.env.CONNECTION_STRING,
});
const initDb = () => __awaiter(void 0, void 0, void 0, function* () {
    (0, PublicAPI_1.CreatePublicAPI)(sequelize);
    yield sequelize.sync();
});
exports.initDb = initDb;
