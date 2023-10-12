"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const file_dto_1 = __importDefault(require("../../dtos/file.dto"));
class UploadFilesService {
    constructor() { }
    async use(files) {
        try {
            const filterFiles = await this.fetchFiles(files);
            if (filterFiles.length === 0) {
                return filterFiles;
            }
            console.log(filterFiles);
            return filterFiles;
        }
        catch (err) {
            throw new Error(`Can't upload file, Please try again`);
        }
    }
    acceptImagesOnly(dataType) {
        const type = dataType.split("/")[0];
        if (type === "image") {
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
}
exports.default = UploadFilesService;
//# sourceMappingURL=uploadFiles.service.js.map