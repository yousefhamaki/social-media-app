"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionSource = void 0;
const typeorm_1 = require("typeorm");
const config_service_1 = __importDefault(require("./shared/services/config.service"));
const config = new config_service_1.default();
const dbConfig = {
    type: "postgres",
    host: config.DB_host,
    port: config.DB_port,
    username: config.DB_username,
    password: config.DB_password,
    database: config.DB_database,
    synchronize: false,
    logging: true,
    entities: config.filesType === "js"
        ? ["build/**/*.entity{.ts,.js}"]
        : ["src/**/*.entity{.ts,.js}"],
    migrations: config.filesType === "js"
        ? ["build/migrations/*{.ts,.js}"]
        : ["src/migrations/*{.ts,.js}"],
    subscribers: config.filesType === "js"
        ? ["build/subscribers/**/*.ts"]
        : ["src/subscribers/**/*.ts"],
    cli: config.filesType === "ts"
        ? {
            entitiesDir: "src/**/*.entity{.ts,.js}",
            migrationsDir: "src/migrations",
            subscribersDir: "src/subscribers",
        }
        : {
            entitiesDir: "build/**/*.entity{.ts,.js}",
            migrationsDir: "build/migrations",
            subscribersDir: "build/subscribers",
        },
};
exports.connectionSource = new typeorm_1.DataSource(dbConfig);
exports.default = dbConfig;
//# sourceMappingURL=ormconfig.js.map