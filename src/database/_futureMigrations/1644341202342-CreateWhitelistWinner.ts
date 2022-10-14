import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateWhitelistWinner1644341202342 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'WhitelistWinners',
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
          }
        ],
      }),
    );

    await queryRunner.createForeignKey('WhitelistWinners', new TableForeignKey({
      columnNames: ['UserID'],
      referencedColumnNames: ['ID'],
      referencedTableName: "Users"
    }));

    await queryRunner.createForeignKey('WhitelistWinners', new TableForeignKey({
      columnNames: ['WhitelistID'],
      referencedColumnNames: ['ID'],
      referencedTableName: "Whitelists"
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('WhitelistWinners');
    const fks = table.foreignKeys;
    await queryRunner.dropForeignKeys('WhitelistWinners', fks);
    await queryRunner.dropTable('WhitelistWinners');
  }

}
