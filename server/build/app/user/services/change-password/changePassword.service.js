"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const hashPassword_trait_1 = __importDefault(require("../../../../traits/hashPassword.trait"));
const usersCheck_service_1 = __importDefault(require("../../../../shared/services/check-user/usersCheck.service"));
const user_entity_1 = __importDefault(require("../../entities/user.entity"));
const dbFiles_db_1 = __importDefault(require("../../../../database/dbFiles.db"));
class ChangePassword extends dbFiles_db_1.default {
    constructor() {
        super();
        this.run();
        this.check = new usersCheck_service_1.default();
        this.hash = new hashPassword_trait_1.default();
    }
    async use(email, oldPassword, newPassword) {
        try {
            const user = await this.check.findByEmail(email);
            if (!user) {
                throw new Error("Your E-mail isnot defined.");
            }
            if (await this.hash.chech(oldPassword, user.password)) {
                const result = await this.saveNewPassword(email, await this.hash.hashPassword(newPassword));
                return true;
            }
            return false;
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
    async saveNewPassword(email, newPassword) {
        try {
            const result = await this.userReposetory
                .createQueryBuilder("users")
                .update("users.password = :password", { password: newPassword })
                .where("users.email = :email", { email: email });
            return result;
        }
        catch (err) {
            throw new Error("Can't change your password please try againg");
        }
    }
    async run() {
        this.initializeDatabase();
        this.userReposetory = (0, typeorm_1.getRepository)(user_entity_1.default);
    }
}
exports.default = ChangePassword;
//# sourceMappingURL=changePassword.service.js.map