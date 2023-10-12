"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PostDTO {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.content = data.content;
        this.status = data.status;
        this.images = JSON.parse(data.images);
    }
}
exports.default = PostDTO;
//# sourceMappingURL=post.dto.js.map