"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const typeorm_1 = require("typeorm");
const ormconfig_1 = __importDefault(require("../ormconfig"));
class dbFiles {
    async closeDatabaseConnection() {
        this.connection = (0, typeorm_1.getConnection)();
        await this.connection.close();
    }
    async initializeDatabase() {
        try {
            const connection = (await (0, typeorm_1.createConnection)(ormconfig_1.default));
            this.connection = connection;
            return connection;
        }
        catch (error) {
            console.error("Database connection error:", error);
        }
    }
}
const connection = async () => {
    return await new dbFiles().initializeDatabase();
};
exports.connection = connection;
exports.default = dbFiles;
//# sourceMappingURL=dbFiles.db.js.map