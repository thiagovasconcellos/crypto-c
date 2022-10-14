import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateWhitelistStep1644326795705 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'WhitelistSteps',
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
            name: 'Point',
            type: 'int'
          }
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('WhitelistSteps');
  }
}
