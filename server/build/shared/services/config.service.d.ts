declare class Config {
    constructor();
    readonly filesType: "ts" | "js";
    readonly port: number;
    readonly TimeLimit: number;
    readonly Perpage: number;
    readonly RequestLimit: number;
    readonly MessageLimit: string;
    readonly ActiveHome: boolean;
    readonly DB_host: string;
    readonly DB_port: number;
    readonly DB_username: string;
    readonly DB_password: any;
    readonly DB_database: any;
    readonly minPasswordLength: any;
    readonly minUppercase: any;
    readonly minLowercase: any;
    readonly minDigits: any;
    readonly minSpecialCharacters: any;
    readonly secretKey: any;
    readonly PageCount: any;
}
export default Config;
//# sourceMappingURL=config.service.d.ts.map