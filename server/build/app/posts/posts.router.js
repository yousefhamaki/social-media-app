"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const posts_controller_1 = __importDefault(require("./posts.controller"));
const Authorization_middleware_1 = __importDefault(require("../../middleware/Authorization.middleware"));
const postsRouter = (0, express_1.Router)();
const postsController = new posts_controller_1.default();
const authorization = new Authorization_middleware_1.default();
const upload = (0, multer_1.default)({ storage: multer_1.default.memoryStorage() });
postsRouter.get("/posts/:user_id", authorization.ValidToken, postsController.getUserPosts);
postsRouter.post("/posts/create", authorization.ValidToken, upload.array("files"), postsController.create);
exports.default = postsRouter;
//# sourceMappingURL=posts.router.js.map