"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createPost_service_1 = __importDefault(require("./services/create-post/createPost.service"));
const getUserPosts_service_1 = __importDefault(require("./services/get-user-posts/getUserPosts.service"));
const returnJson_dto_1 = __importDefault(require("../../shared/dtos/returnJson.dto"));
const getPosts_service_1 = __importDefault(require("./services/get-posts/getPosts.service"));
const createService = new createPost_service_1.default();
const getUserPosts = new getUserPosts_service_1.default();
const getPosts = new getPosts_service_1.default();
class PostsController {
    async create(req, res, _next) {
        try {
            const result = await createService.use(req.body.title, req.body.content, (await req.files), req.user.id);
            const returnV = new returnJson_dto_1.default(200, "Creating new Post successfully", result);
            return res.json(returnV);
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
    async getUserPosts(req, res, _next) {
        try {
            const page = req.query.page ? Number(req.query.page) - 1 : 0;
            const result = await getUserPosts.use(req.params.user_id, page);
            const returnV = new returnJson_dto_1.default(200, "Getting Posts of user successfully", result);
            return res.json(returnV);
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
    async getPosts(req, res, _next) {
        try {
            let page = req.query.page && Number(req.query.page) > 0
                ? Number(req.query.page) - 1
                : 0;
            const result = await getPosts.use(page);
            const returnV = new returnJson_dto_1.default(200, "Getting Posts successfully", result);
            return res.json(returnV);
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
}
exports.default = PostsController;
//# sourceMappingURL=posts.controller.js.map