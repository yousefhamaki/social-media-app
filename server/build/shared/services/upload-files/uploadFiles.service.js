"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const file_dto_1 = __importDefault(require("../../dtos/file.dto"));
const dbFiles_db_1 = __importDefault(require("../../../database/dbFiles.db"));
const file_entity_1 = __importDefault(require("../../enitities/file.entity"));
class UploadFilesService extends dbFiles_db_1.default {
    constructor() {
        super();
        this.run();
    }
    async use(files, user_id) {
        try {
            const filterFiles = await this.fetchFiles(files);
            const uploaded = [];
            if (filterFiles.length === 0) {
                return filterFiles;
            }
            for (const file of filterFiles) {
                const upload = (await new file_dto_1.default(await this.uploadFiles(file, user_id)));
                uploaded[uploaded.length] = { ...upload };
            }
            return await uploaded;
        }
        catch (err) {
            throw new Error(`Can't upload file, Please try again`);
        }
    }
    async uploadFiles(data, user_id) {
        try {
            let file = new file_entity_1.default();
            file.mimetype = data.mimetype;
            file.user_id = user_id;
            file.buffer = data.buffer;
            file.size = data.size;
            file.name = data.name;
            return (await this.fileReposetory.save(file));
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
    acceptImagesOnly(dataType) {
        const type = dataType.split("/")[0];
        if (type === "image" || type === "video") {
            return true;
        }
        return false;
    }
    async fetchFiles(files) {
        const result = [];
        await files.forEach(async (file) => {
            if (this.acceptImagesOnly(file.mimetype)) {
                result.push(await new file_dto_1.default(file));
            }
        });
        return result;
    }
    async run() {
        this.initializeDatabase();
        this.fileReposetory = await (0, typeorm_1.getRepository)(file_entity_1.default);
    }
}
exports.default = UploadFilesService;
//# sourceMappingURL=uploadFiles.service.js.map