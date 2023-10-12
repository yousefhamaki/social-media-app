"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const returnJson_dto_1 = __importDefault(require("../shared/dtos/returnJson.dto"));
const Token_trait_1 = __importDefault(require("../traits/Token.trait"));
const usersCheck_service_1 = __importDefault(require("../shared/services/check-user/usersCheck.service"));
const tokenService = new Token_trait_1.default();
const checkUserService = new usersCheck_service_1.default();
class AuthorizationMiddleware {
    async ValidToken(req, res, next) {
        try {
            const auth = req.headers.authorization;
            if (auth !== undefined) {
                const authData = auth.split(" ");
                const authType = authData[0].toLowerCase();
                const token = authData[1];
                if (token && authType === "bearer") {
                    const check = (await tokenService.verifyJWT(token));
                    if (check && check.email) {
                        const result = {
                            ...(await checkUserService.checkToken(token, req.ip)),
                        };
                        if (result &&
                            result.user_id &&
                            result.user_id === check.id) {
                            req.user = check;
                            return next();
                        }
                    }
                }
            }
            return res
                .status(401)
                .json(new returnJson_dto_1.default(401, "Error Auth: please try again.", null));
        }
        catch (err) {
            return res
                .status(401)
                .json(new returnJson_dto_1.default(401, "Error Auth: please try again.", null));
        }
    }
}
exports.default = AuthorizationMiddleware;
//# sourceMappingURL=Authorization.middleware.js.map