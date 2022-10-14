import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateWhitelist1644340565600 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Whitelists',
        columns: [
          {
            name: 'ID',
            type: 'bigint',
            isPrimary: true,
            generationStrategy: 'increment',
            isGenerated: true
          },
          {
            name: 'Name',
            type: 'varchar'
          },
          {
            name: 'StartDate',
            type: 'timestamp'
          },
          {
            name: 'EndDate',
            type: 'timestamp'
          },
          {
            name: 'TotalPool',
            type: 'int'
          },
          {
            name: 'IsActive',
            type: 'boolean',
            default: true
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
    await queryRunner.dropTable('Whitelists');
  }

}
