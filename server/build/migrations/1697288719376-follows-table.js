"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FollowsTable1697288719376 = void 0;
const typeorm_1 = require("typeorm");
class FollowsTable1697288719376 {
    constructor() {
        this.name = "FollowsTable1697288719376";
    }
    async up(queryRunner) {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
        await queryRunner.createTable(new typeorm_1.Table({
            name: "follows",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid",
                    default: "uuid_generate_v4()",
                },
                {
                    name: "from",
                    type: "uuid",
                    isNullable: false,
                },
                {
                    name: "to",
                    type: "uuid",
                    isNullable: false,
                },
                {
                    name: "status",
                    type: "varchar",
                    isNullable: false,
                    default: "'open'",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()",
                },
            ],
        }));
        await queryRunner.createForeignKey("follows", new typeorm_1.TableForeignKey({
            columnNames: ["from"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE",
        }));
        await queryRunner.createForeignKey("follows", new typeorm_1.TableForeignKey({
            columnNames: ["to"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE",
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("follows");
    }
}
exports.FollowsTable1697288719376 = FollowsTable1697288719376;
//# sourceMappingURL=1697288719376-follows-table.js.map