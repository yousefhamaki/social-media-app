"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uploadFiles_service_1 = __importDefault(require("../../../../shared/services/upload-files/uploadFiles.service"));
const images_dto_1 = __importDefault(require("../../dtos/images.dto"));
const post_dto_1 = __importDefault(require("../../dtos/post.dto"));
const dbFiles_db_1 = __importDefault(require("../../../../database/dbFiles.db"));
const typeorm_1 = require("typeorm");
const posts_entity_1 = __importDefault(require("../../entities/posts.entity"));
class CreatePost extends dbFiles_db_1.default {
    constructor() {
        super();
        this.uploadFileService = new uploadFiles_service_1.default();
        this.run();
    }
    async use(title, content, files, user_id) {
        try {
            const uploadFiles = await this.uploadFiles(files, user_id);
            let images = [];
            if (uploadFiles !== false) {
                images = uploadFiles;
            }
            else {
                images = [];
            }
            const postData = await this.handlePostData(images, title, content, user_id);
            const uploadPost = await this.addPost(postData);
            return new post_dto_1.default(uploadPost);
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
    async addPost(postInfo) {
        try {
            const result = (await this.postsReposetory.save(postInfo));
            return result;
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
    async uploadFiles(files, user_id) {
        if (files.length === 0) {
            return false;
        }
        const uploadFiles = (await this.uploadFileService.use(files, user_id));
        if (uploadFiles.length === 0) {
            return false;
        }
        return uploadFiles;
    }
    async handlePostData(files, title, content, user_id) {
        let images = [];
        for (const file of files) {
            await images.push({ ...new images_dto_1.default(file) });
        }
        return {
            user_id: user_id,
            title: title,
            content: content,
            images: JSON.stringify(images),
            status: "active",
        };
    }
    run() {
        this.initializeDatabase();
        this.postsReposetory = (0, typeorm_1.getRepository)(posts_entity_1.default);
    }
}
exports.default = CreatePost;
//# sourceMappingURL=createPost.service.js.map