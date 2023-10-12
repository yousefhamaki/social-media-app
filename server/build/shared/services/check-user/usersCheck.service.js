"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const dbFiles_db_1 = __importDefault(require("../../../database/dbFiles.db"));
const user_entity_1 = __importDefault(require("../../../app/user/entities/user.entity"));
const token_entity_1 = __importDefault(require("../../enitities/token.entity"));
class userCheck extends dbFiles_db_1.default {
    constructor() {
        super();
        this.run();
    }
    async check(user) {
        const checkEmail = await this.findByEmail(user.email);
        const checkUsername = await this.findByUserName(user.username);
        if (checkEmail === null && checkUsername === null) {
            return true;
        }
        else {
            return false;
        }
    }
    async findByEmail(email) {
        return await this.userReposetory
            .createQueryBuilder("users")
            .where("users.email = :email", { email: email })
            .getOne();
    }
    async findByUserName(username) {
        return await this.userReposetory
            .createQueryBuilder("users")
            .select("users.id")
            .where("users.username = :username", { username: username })
            .getOne();
    }
    async addToken(data) {
        return await this.tokenReposetory.save(data);
    }
    async checkToken(token, ip) {
        return await this.tokenReposetory
            .createQueryBuilder("tokens")
            .where("tokens.token = :token", { token: token })
            .andWhere("tokens.user_ip = :ip", { ip: ip })
            .getOne();
    }
    async run() {
        this.initializeDatabase();
        this.userReposetory = await (0, typeorm_1.getRepository)(user_entity_1.default);
        this.tokenReposetory = await (0, typeorm_1.getRepository)(token_entity_1.default);
    }
}
exports.default = userCheck;
//# sourceMappingURL=usersCheck.service.js.map