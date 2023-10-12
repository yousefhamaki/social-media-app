"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenTable1696449157619 = void 0;
const typeorm_1 = require("typeorm");
class TokenTable1696449157619 {
    constructor() {
        this.name = "TokenTable1696449157619";
    }
    async up(queryRunner) {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
        await queryRunner.createTable(new typeorm_1.Table({
            name: "tokens",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid",
                    default: "uuid_generate_v4()",
                },
                {
                    name: "user_id",
                    type: "uuid",
                    isNullable: false,
                },
                {
                    name: "token",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "user_ip",
                    type: "varchar",
                    isNullable: true,
                    default: "'active'",
                },
                {
                    name: "permissions",
                    type: "json",
                    isNullable: false,
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                },
            ],
        }));
        await queryRunner.createForeignKey("tokens", new typeorm_1.TableForeignKey({
            columnNames: ["user_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE",
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("tokens");
    }
}
exports.TokenTable1696449157619 = TokenTable1696449157619;
//# sourceMappingURL=1696449157619-token-table.js.map