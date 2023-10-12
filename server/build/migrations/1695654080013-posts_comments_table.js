"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsCommentsTable1695654080013 = void 0;
const typeorm_1 = require("typeorm");
class PostsCommentsTable1695654080013 {
    async up(queryRunner) {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'posts_comments',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'user_id',
                    type: 'uuid',
                    isNullable: false,
                },
                {
                    name: 'post_id',
                    type: 'uuid',
                    isNullable: false,
                },
                {
                    name: 'comment',
                    type: 'varchar',
                    length: '255',
                    isNullable: false,
                },
                {
                    name: 'status',
                    type: 'varchar',
                    isNullable: true,
                    default: "'active'",
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
            ],
        }));
        await queryRunner.createForeignKey('posts_comments', new typeorm_1.TableForeignKey({
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
            onDelete: 'CASCADE',
        }));
        await queryRunner.createForeignKey('posts_comments', new typeorm_1.TableForeignKey({
            columnNames: ['post_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'posts',
            onDelete: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('posts_comments');
    }
}
exports.PostsCommentsTable1695654080013 = PostsCommentsTable1695654080013;
//# sourceMappingURL=1695654080013-posts_comments_table.js.map