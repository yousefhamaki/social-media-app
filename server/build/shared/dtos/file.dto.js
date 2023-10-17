"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passKey_trait_1 = __importDefault(require("../../traits/passKey.trait"));
class FileDTO {
    constructor(data) {
        if (data.name) {
            this.name = data.name;
        }
        else {
            this.name = (0, passKey_trait_1.default)(20);
        }
        this.mimetype = data.mimetype;
        this.buffer = data.buffer.toString("base64");
        this.size = data.size;
        this.user_id = data.user_id;
        this.id = data.id ? data.id : "";
    }
}
exports.default = FileDTO;
//# sourceMappingURL=file.dto.js.map