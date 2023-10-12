"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserDTO {
    constructor(user, token = null) {
        this.id = user.id;
        this.username = user.username;
        this.email = user.email;
        this.role = user.role;
        this.token = token;
    }
}
exports.default = UserDTO;
//# sourceMappingURL=user.dto.js.map