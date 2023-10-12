"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const dbFiles_db_1 = __importDefault(require("../../../../database/dbFiles.db"));
const posts_entity_1 = __importDefault(require("../../entities/posts.entity"));
const config_service_1 = __importDefault(require("../../../../shared/services/config.service"));
class GetPostsService extends dbFiles_db_1.default {
    constructor() {
        super();
        this.config = new config_service_1.default();
        this.run();
    }
    async use(user_id, page) {
        try {
            const skip = page * this.config.Perpage;
            const getFromDB = await this.getPagination(user_id, skip, this.config.Perpage);
            console.log(getFromDB);
            console.log(getFromDB);
            return getFromDB;
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
    async getFromDb(user_id) {
        try {
            return await this.postsReposetory
                .createQueryBuilder("posts")
                .where("posts.user_id = :user_id", { user_id: user_id })
                .getMany();
        }
        catch (err) {
            throw new Error(`Can't get user posts`);
        }
    }
    async getPagination(user_id, skip, pageSize) {
        try {
            const [posts, totalCount] = await this.postsReposetory
                .createQueryBuilder("posts")
                .where("posts.user_id = :user_id", { user_id: user_id })
                .orderBy("posts.created_at", "DESC")
                .skip(skip)
                .take(pageSize)
                .getManyAndCount();
            return [posts, totalCount];
        }
        catch (err) { }
    }
    run() {
        this.initializeDatabase();
        this.postsReposetory = (0, typeorm_1.getRepository)(posts_entity_1.default);
    }
}
exports.default = GetPostsService;
//# sourceMappingURL=getPosts.service.js.map