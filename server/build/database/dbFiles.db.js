"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const ormconfig_1 = __importDefault(require("../ormconfig"));
class dbFiles {
    async closeDatabaseConnection() {
        this.connection = (0, typeorm_1.getConnection)();
        await this.connection.close();
    }
    async initializeDatabase() {
        try {
            this.connection = await (0, typeorm_1.createConnection)(ormconfig_1.default);
        }
        catch (error) {
            console.error("Database connection error:", error);
        }
    }
}
exports.default = dbFiles;
//# sourceMappingURL=dbFiles.db.js.map