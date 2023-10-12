"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const ormconfig_1 = __importDefault(require("../ormconfig"));
async function connectToDatabase() {
    try {
        const connect = await (0, typeorm_1.createConnection)(ormconfig_1.default);
        console.log("Connected to the database");
        return connect;
    }
    catch (error) {
        console.error("Error connecting to the database:", error);
    }
}
exports.default = connectToDatabase;
//# sourceMappingURL=connection.db.js.map