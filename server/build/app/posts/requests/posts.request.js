"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PostsRequest {
    constructor() {
        this.create = {
            title: "required|string",
            content: "required|string",
        };
    }
}
exports.default = PostsRequest;
//# sourceMappingURL=posts.request.js.map