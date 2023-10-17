"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const posts_entity_1 = __importDefault(require("../../entities/posts.entity"));
const dbFiles_db_1 = __importDefault(require("../../../../database/dbFiles.db"));
const config_service_1 = __importDefault(require("../../../../shared/services/config.service"));
class GetPostsService extends dbFiles_db_1.default {
    constructor() {
        super();
        this.config = new config_service_1.default();
        this.run();
    }
    async use(page) {
        try {
            const skip = page * this.config.Perpage;
            const result = await this.getPagination(skip, this.config.Perpage);
            console.log(result);
            console.log(skip);
            return { ...result, page: page + 1 };
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
    async getPagination(skip, pageSize) {
        try {
            const [posts, totalCount] = await this.postsReposetory
                .createQueryBuilder("posts")
                .orderBy("posts.created_at", "DESC")
                .skip(skip)
                .take(pageSize)
                .getManyAndCount();
            console.log(posts);
            return { posts: posts, totalCount: totalCount };
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
    run() {
        this.initializeDatabase();
        this.postsReposetory = (0, typeorm_1.getRepository)(posts_entity_1.default);
    }
}
exports.default = GetPostsService;
//# sourceMappingURL=getPosts.service.js.map