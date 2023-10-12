"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FollowsTable1695653792525 = void 0;
const typeorm_1 = require("typeorm");
class FollowsTable1695653792525 {
    async up(queryRunner) {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'follows',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'following_user_id',
                    type: 'uuid',
                },
                {
                    name: 'followed_user_id',
                    type: 'uuid',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
            ],
        }), true);
        await queryRunner.createForeignKey('follows', new typeorm_1.TableForeignKey({
            columnNames: ['following_user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'CASCADE',
        }));
        await queryRunner.createForeignKey('follows', new typeorm_1.TableForeignKey({
            columnNames: ['followed_user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('follows');
    }
}
exports.FollowsTable1695653792525 = FollowsTable1695653792525;
//# sourceMappingURL=1695653792525-follows_table.js.map