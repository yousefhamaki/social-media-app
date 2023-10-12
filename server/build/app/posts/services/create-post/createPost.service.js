"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uploadFiles_service_1 = __importDefault(require("../../../../shared/services/upload-files/uploadFiles.service"));
class CreatePost {
    constructor() {
        this.uploadFileService = new uploadFiles_service_1.default();
    }
    async use(title, content, files) {
        try {
            const uploadFiles = await this.uploadFiles(files);
            let images = [];
            if (uploadFiles !== false) {
                images = uploadFiles;
            }
            return uploadFiles;
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
    async uploadFiles(files) {
        if (files.length === 0) {
            return false;
        }
        const uploadFiles = await this.uploadFileService.use(files);
        if (files.length > uploadFiles.length) {
            return false;
        }
        return uploadFiles;
    }
}
exports.default = CreatePost;
//# sourceMappingURL=createPost.service.js.map