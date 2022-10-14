import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateUserWhitelistStep1644340780082 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'UserWhitelistStep',
        columns: [
          {
            name: 'ID',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'UserID',
            type: 'uuid'
          },
          {
            name: 'WhitelistID',
            type: 'bigint'
          },
          {
            name: 'WhitelistStepID',
            type: 'bigint'
          },

          {
            name: 'Details',
            type: 'varchar'
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
          }
        ],
      }),
    );

    await queryRunner.createForeignKey('UserWhitelistStep', new TableForeignKey({
      columnNames: ['UserID'],
      referencedColumnNames: ['ID'],
      referencedTableName: "Users"
    }));

    await queryRunner.createForeignKey('UserWhitelistStep', new TableForeignKey({
      columnNames: ['WhitelistID'],
      referencedColumnNames: ['ID'],
      referencedTableName: "Whitelists"
    }));

    await queryRunner.createForeignKey('UserWhitelistStep', new TableForeignKey({
      columnNames: ['WhitelistStepID'],
      referencedColumnNames: ['ID'],
      referencedTableName: "WhitelistSteps"
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('UserWhitelistStep');
    const fks = table.foreignKeys;
    await queryRunner.dropForeignKeys('UserWhitelistStep', fks);
    await queryRunner.dropTable('UserWhitelistStep');
  }

}
