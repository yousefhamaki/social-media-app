"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("./user.controller"));
const paramsCheck_middleware_1 = __importDefault(require("../../middleware/paramsCheck.middleware"));
const user_request_1 = __importDefault(require("./requests/user.request"));
const Authorization_middleware_1 = __importDefault(require("../../middleware/Authorization.middleware"));
const userRoutes = (0, express_1.Router)();
const userController = new user_controller_1.default();
const queryCheck = new paramsCheck_middleware_1.default();
const request = new user_request_1.default();
const authorization = new Authorization_middleware_1.default();
userRoutes.post("/user/create", queryCheck.use(request.add), userController.createUser);
userRoutes.post("/user/login", queryCheck.use(request.login), userController.AuthUser);
userRoutes.post("/user/change/password", authorization.ValidToken, queryCheck.use(request.changePass), userController.changePassword);
userRoutes.post("/user/update", authorization.ValidToken, queryCheck.use(request.add), userController.updateUser);
exports.default = userRoutes;
//# sourceMappingURL=user.router.js.map