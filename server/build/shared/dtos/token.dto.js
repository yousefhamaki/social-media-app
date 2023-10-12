"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TokenDTO {
    constructor(data, user_ip, permissions = {}) {
        this.user_id = data.id;
        this.token = data.token;
        this.user_ip = user_ip;
        this.permissions = JSON.stringify(permissions);
    }
}
exports.default = TokenDTO;
//# sourceMappingURL=token.dto.js.map