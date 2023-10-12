"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createUser_service_1 = __importDefault(require("./services/create-user/createUser.service"));
const returnJson_dto_1 = __importDefault(require("../../shared/dtos/returnJson.dto"));
const loginUser_service_1 = __importDefault(require("./services/login-user/loginUser.service"));
const changePassword_service_1 = __importDefault(require("./services/change-password/changePassword.service"));
const updateUser_service_1 = __importDefault(require("./services/update-user/updateUser.service"));
const user_dto_1 = __importDefault(require("./dtos/user.dto"));
const createUserService = new createUser_service_1.default();
const loginUserService = new loginUser_service_1.default();
const changePasswordService = new changePassword_service_1.default();
const updateUserService = new updateUser_service_1.default();
class UserController {
    constructor() {
        try {
        }
        catch (error) {
            console.error("Error initializing UserService or LoginUser:", error);
        }
    }
    async createUser(req, res, next) {
        try {
            const result = await createUserService.use(req.body, req.ip);
            const returnDto = new returnJson_dto_1.default(200, "Created new user successfully", result);
            return res.json(returnDto);
        }
        catch (err) {
            next(err);
        }
    }
    async AuthUser(req, res, next) {
        try {
            const result = await loginUserService.use(req.body.email, req.body.password, req.ip);
            if (result === null) {
                return res
                    .status(401)
                    .json(new returnJson_dto_1.default(401, "E-mail or password is not correct", result));
            }
            else {
            }
            return res.json(new returnJson_dto_1.default(200, "Make auth for user successfully", result));
        }
        catch (err) {
            next(err);
        }
    }
    async changePassword(req, res, next) {
        try {
            const result = await changePasswordService.use(req.body.email, req.body.oldpassword, req.body.newpassword);
            if (result === false) {
                return res
                    .status(401)
                    .json(new returnJson_dto_1.default(401, "Your old password isnot correct.", null));
            }
            else {
                return res.json(new returnJson_dto_1.default(200, "Your password changed successfully", null));
            }
        }
        catch (err) {
            next(err);
        }
    }
    async updateUser(req, res, next) {
        try {
            req.body.id = req.user.id;
            const result = await updateUserService.use(req.body);
            const userDto = await new user_dto_1.default(result);
            const returnDto = new returnJson_dto_1.default(200, "Updated user info successfully", userDto);
            return res.json(returnDto);
        }
        catch (err) {
            next(err);
        }
    }
}
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map