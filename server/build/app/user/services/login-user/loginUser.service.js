"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Token_trait_1 = __importDefault(require("../../../../traits/Token.trait"));
const hashPassword_trait_1 = __importDefault(require("../../../../traits/hashPassword.trait"));
const user_dto_1 = __importDefault(require("../../dtos/user.dto"));
const usersCheck_service_1 = __importDefault(require("../../../../shared/services/check-user/usersCheck.service"));
const token_dto_1 = __importDefault(require("../../../../shared/dtos/token.dto"));
class LoginUser {
    constructor() {
        this.check = new usersCheck_service_1.default();
        this.hash = new hashPassword_trait_1.default();
        this.token = new Token_trait_1.default();
    }
    async use(email, password, ip) {
        try {
            const user = await this.check.findByEmail(email);
            const token = await this.token.generate({ ...(await new user_dto_1.default(user)) });
            if (token === undefined) {
                throw new Error(`Can't make login in this time, Please try again later.`);
            }
            if (user !== null &&
                (await this.hash.chech(password, user.password)) &&
                token !== undefined) {
                const userDto = new user_dto_1.default(user, token);
                const tokenDto = await new token_dto_1.default(userDto, ip);
                await this.check.addToken(tokenDto);
                return userDto;
            }
            return null;
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
}
exports.default = LoginUser;
//# sourceMappingURL=loginUser.service.js.map