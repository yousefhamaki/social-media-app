import { ConnectionOptions, DataSource, DataSourceOptions } from "typeorm";
import Config from "./shared/services/config.service";

const config = new Config();
const dbConfig = {
  type: "postgres",
  host: config.DB_host,
  port: config.DB_port,
  username: config.DB_username,
  password: config.DB_password,
  database: config.DB_database,
  synchronize: false,
  logging: true,
  entities:
    config.filesType === "js"
      ? ["build/**/*.entity{.ts,.js}"]
      : ["src/**/*.entity{.ts,.js}"],
  migrations:
    config.filesType === "js"
      ? ["build/migrations/*{.ts,.js}"]
      : ["src/migrations/*{.ts,.js}"],
  subscribers:
    config.filesType === "js"
      ? ["build/subscribers/**/*.ts"]
      : ["src/subscribers/**/*.ts"],
  cli:
    config.filesType === "ts"
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
} as ConnectionOptions;

export const connectionSource = new DataSource(dbConfig as DataSourceOptions);

export default dbConfig;
