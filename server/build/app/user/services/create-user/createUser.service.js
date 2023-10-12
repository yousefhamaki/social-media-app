"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const user_entity_1 = __importDefault(require("../../entities/user.entity"));
const dbFiles_db_1 = __importDefault(require("../../../../database/dbFiles.db"));
const passKey_trait_1 = __importDefault(require("../../../../traits/passKey.trait"));
const usersCheck_service_1 = __importDefault(require("../../../../shared/services/check-user/usersCheck.service"));
const hashPassword_trait_1 = __importDefault(require("../../../../traits/hashPassword.trait"));
const Token_trait_1 = __importDefault(require("../../../../traits/Token.trait"));
const user_dto_1 = __importDefault(require("../../dtos/user.dto"));
const token_dto_1 = __importDefault(require("../../../../shared/dtos/token.dto"));
class UserService extends dbFiles_db_1.default {
    constructor() {
        super();
        this.passKey = passKey_trait_1.default;
        this.run();
        this.check = new usersCheck_service_1.default();
        this.passwordHash = new hashPassword_trait_1.default();
        this.token = new Token_trait_1.default();
    }
    async use(user, ip) {
        try {
            await this.createCheck(user);
            const userInfo = await this.createUser(user);
            const token = await this.token.generate({
                ...(await new user_dto_1.default(userInfo)),
            });
            const userDto = new user_dto_1.default(userInfo, token);
            const tokenDto = await new token_dto_1.default(userDto, ip);
            await this.check.addToken(tokenDto);
            return userDto;
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
    async createUser(user) {
        try {
            const passKey = this.passKey(15);
            user.passkey = passKey;
            user.password = await this.passwordHash.hashPassword(user.password);
            return await this.userReposetory.save(user);
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
    async createCheck(user) {
        const checkEmail = await this.check.findByEmail(user.email);
        const checkUsername = await this.check.findByUserName(user.username);
        if (checkEmail !== null) {
            throw new Error("Email is already exist. Please use another Email.");
        }
        if (checkUsername !== null) {
            throw new Error("Username is already exist. Please use another Username.");
        }
        return true;
    }
    async run() {
        this.initializeDatabase();
        this.userReposetory = await (0, typeorm_1.getRepository)(user_entity_1.default);
    }
}
exports.default = UserService;
//# sourceMappingURL=createUser.service.js.map