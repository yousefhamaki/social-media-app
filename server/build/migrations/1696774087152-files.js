"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Files1696774087152 = void 0;
const typeorm_1 = require("typeorm");
class Files1696774087152 {
    constructor() {
        this.name = "Files1696774087152";
    }
    async up(queryRunner) {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
        await queryRunner.createTable(new typeorm_1.Table({
            name: "files",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    default: "uuid_generate_v4()",
                },
                {
                    name: "user_id",
                    type: "uuid",
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "mimetype",
                    type: "varchar",
                },
                {
                    name: "buffer",
                    type: "text",
                },
                {
                    name: "size",
                    type: "int",
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
        }), true);
        await queryRunner.createForeignKey("files", new typeorm_1.TableForeignKey({
            columnNames: ["user_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE",
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("files");
    }
}
exports.Files1696774087152 = Files1696774087152;
//# sourceMappingURL=1696774087152-files.js.map