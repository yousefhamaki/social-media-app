"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const password_trait_1 = __importDefault(require("./password.trait"));
class QueryCheck {
    check(query, params) {
        const result = [];
        for (const key in params) {
            const stand = params[key].split("|");
            if (stand.indexOf("required") > -1) {
                if (query[key] === undefined) {
                    result[result.length] = "oops! " + key + " is Required";
                }
            }
            if (query[key]) {
                if (stand.indexOf("number") > -1) {
                    if (isNaN(Number(query[key]))) {
                        result[result.length] = "oh! oh " + key + " must be number";
                    }
                }
                if (stand.indexOf("array") > -1) {
                    if (!Array.isArray(query[key])) {
                        result[result.length] = "oh! oh " + key + " must be array";
                    }
                }
                if (stand.indexOf("object") > -1) {
                    if (typeof query[key] !== "object" ||
                        Array.isArray(query[key]) ||
                        query[key] === null) {
                        result[result.length] = "oh! oh " + key + " must be object";
                    }
                }
                if (stand.indexOf("string") > -1) {
                    if (typeof query[key] !== "string") {
                        result[result.length] = "oh! oh " + key + " must be string";
                    }
                }
                if (stand.indexOf("uuid") > -1) {
                    if (!this.checkIfValidUUID(query[key])) {
                        result[result.length] = "oh! oh " + key + " must be a valid uuid";
                    }
                }
                if (stand.indexOf("password") > -1) {
                    if (!(0, password_trait_1.default)(query[key])) {
                        result[result.length] = `oh! oh ${key} is not strong enough. Please use a stronger ${key}`;
                    }
                }
            }
        }
        return result;
    }
    checkIfValidUUID(str) {
        const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
        return regexExp.test(str);
    }
}
exports.default = QueryCheck;
//# sourceMappingURL=checkQuery.trait.js.map