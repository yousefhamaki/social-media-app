"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config();
class Config {
    constructor() {
        this.port = Number(process.env.PORT);
        this.TimeLimit = parseInt(process.env.TIMELIMIT, 10);
        this.RequestLimit = Number(process.env.REQUEST_LIMIT);
        this.MessageLimit = process.env.MESSAGE_LIMIT;
        this.ActiveHome = process.env.ACTIVE_HOME === "true" ? true : false;
        this.Perpage = Number(process.env.PERPAGE);
        this.DB_host = process.env.DB_HOST;
        this.DB_port = parseInt(process.env.DB_PORT, 10);
        this.DB_username = process.env.DB_USERNAME;
        this.DB_password = process.env.DB_PASSWORD;
        this.DB_database =
            process.env.NODE_ENV === "dev"
                ? process.env.DB_DATABASE_DEV
                : process.env.DB_DATABASE_TEST;
        this.minPasswordLength = parseInt(process.env.MIN_PASSWORD_LENGTH, 10);
        this.minUppercase = parseInt(process.env.MIN_UPPERCASE_LETTERS, 10);
        this.minLowercase = parseInt(process.env.MIN_LOWERCASE_LETTERS, 10);
        this.minDigits = parseInt(process.env.MIN_DIGITS, 10);
        this.minSpecialCharacters = parseInt(process.env.MIN_SPECIAL_CHARACTERS, 10);
        this.secretKey = process.env.SECRET_KEY;
        this.filesType = process.env.FILES_TYPE[0] === "t" ? "ts" : "js";
        this.PageCount = Number(process.env.PAGE_COUNT);
    }
}
exports.default = Config;
//# sourceMappingURL=config.service.js.map