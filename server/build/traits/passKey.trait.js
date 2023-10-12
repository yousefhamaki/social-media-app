"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generatePasskey(length) {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let passkey = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        passkey += charset.charAt(randomIndex);
    }
    return passkey;
}
exports.default = generatePasskey;
//# sourceMappingURL=passKey.trait.js.map