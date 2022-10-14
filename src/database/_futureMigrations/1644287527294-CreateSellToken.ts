import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateSellToken1644287527294 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'SellTokens',
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
            name: 'CRYSHA_Paid',
            type: 'decimal',
            precision: 36,
            scale: 18
          },
          {
            name: 'BUSD_Received',
            type: 'decimal',
            precision: 18,
            scale: 10
          },
          {
            name: 'CreatedAt',
            type: 'timestamp',
            default: 'now()',
          }
        ],
      }),
    );

    await queryRunner.createForeignKey('SellTokens', new TableForeignKey({
      columnNames: ['UserID'],
      referencedColumnNames: ['ID'],
      referencedTableName: "Users"
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('SellTokens');
    const fks = table.foreignKeys;
    await queryRunner.dropForeignKeys('SellTokens', fks);
    await queryRunner.dropTable('SellTokens');
  }

}
