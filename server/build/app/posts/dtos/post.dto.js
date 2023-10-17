"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PostDTO {
    constructor(data) {
        this.id = data.id;
        this.user_id = data.user_id;
        this.title = data.title;
        this.content = data.content;
        this.status = data.status;
        this.images = JSON.parse(data.images);
        this.created_at = data.created_at;
        this.updated_at = data.updated_at;
    }
}
exports.default = PostDTO;
//# sourceMappingURL=post.dto.js.map