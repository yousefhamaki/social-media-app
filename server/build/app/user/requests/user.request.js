"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class userRequest {
    constructor() {
        this.login = {
            email: "required",
            password: "required",
        };
        this.changePass = {
            email: "required|email|string",
            oldpassword: "required",
            newpassword: "required",
        };
        this.verify = {
            email: "required|string",
            code: "required|string",
        };
        this.add = {
            email: "required|email",
            password: "required|password",
            username: "required|min:4",
            role: "required",
        };
    }
}
exports.default = userRequest;
//# sourceMappingURL=user.request.js.map