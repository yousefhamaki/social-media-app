"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const dbFiles_db_1 = __importDefault(require("../../../../database/dbFiles.db"));
const user_entity_1 = __importDefault(require("../../entities/user.entity"));
class UpdateUserService extends dbFiles_db_1.default {
    constructor() {
        super();
        this.run();
    }
    async use(user) {
        try {
            return await this.updateUser(user);
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
    async updateUser(user) {
        return await this.userReposetory.save(user);
    }
    async run() {
        this.initializeDatabase();
        this.userReposetory = await (0, typeorm_1.getRepository)(user_entity_1.default);
    }
}
exports.default = UpdateUserService;
//# sourceMappingURL=updateUser.service.js.map