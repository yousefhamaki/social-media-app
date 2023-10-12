"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_service_1 = __importDefault(require("../shared/services/config.service"));
const config = new config_service_1.default();
function isPasswordStrong(password) {
    const uppercaseRegex = /[A-Z]/g;
    const lowercaseRegex = /[a-z]/g;
    const digitRegex = /\d/g;
    const specialCharacterRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/g;
    const hasMinLength = password.length >= config.minPasswordLength;
    const hasUppercaseLetters = (password.match(uppercaseRegex) || []).length >= config.minUppercase;
    const hasLowercaseLetters = (password.match(lowercaseRegex) || []).length >= config.minLowercase;
    const hasDigits = (password.match(digitRegex) || []).length >= config.minDigits;
    const hasSpecialCharacters = (password.match(specialCharacterRegex) || []).length >=
        config.minSpecialCharacters;
    return (hasMinLength &&
        hasUppercaseLetters &&
        hasLowercaseLetters &&
        hasDigits &&
        hasSpecialCharacters);
}
exports.default = isPasswordStrong;
//# sourceMappingURL=password.trait.js.map