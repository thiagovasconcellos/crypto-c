import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateWhitelistSubscriber1644460271265 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'WhitelistSubscribers',
        columns: [
          {
            name: 'ID',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment',
            isGenerated: true
          },
          {
            name: 'Email',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'IsActive',
            type: 'boolean',
            default: true
          },
          {
            name: 'Language',
            type: 'varchar(2)',
          },
          {
            name: 'CreatedAt',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'UpdatedAt',
            type: 'timestamp',
            default: 'now()',
          }
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('WhitelistSubscribers');
  }
}
