"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
class HashPassword {
    async hashPassword(password) {
        const saltRounds = 10;
        try {
            const hashedPassword = await bcrypt_1.default.hash(password, saltRounds);
            return hashedPassword;
        }
        catch (error) {
            throw error;
        }
    }
    async chech(enteredPassword, hashedPassword) {
        try {
            const match = await bcrypt_1.default.compare(enteredPassword, hashedPassword);
            return match;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = HashPassword;
//# sourceMappingURL=hashPassword.trait.js.map