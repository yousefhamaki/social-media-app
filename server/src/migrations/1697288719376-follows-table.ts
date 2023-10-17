import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class FollowsTable1697288719376 implements MigrationInterface {
  name = "FollowsTable1697288719376";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
    await queryRunner.createTable(
      new Table({
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
      })
    );
    await queryRunner.createForeignKey(
      "follows",
      new TableForeignKey({
        columnNames: ["from"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "CASCADE", // Set the appropriate delete action
      })
    );
    await queryRunner.createForeignKey(
      "follows",
      new TableForeignKey({
        columnNames: ["to"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "CASCADE", // Set the appropriate delete action
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("follows");
  }
}
