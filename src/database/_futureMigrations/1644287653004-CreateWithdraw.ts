import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateWithdraw1644287653004 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Withdraws',
        columns: [
          {
            name: 'ID',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'UserWalletID',
            type: 'uuid'
          },
          {
            name: 'SystemWalletID',
            type: 'uuid'
          },
          {
            name: 'BUSD_Received',
            type: 'decimal',
            precision: 18,
            scale: 10
          },
          {
            name: 'TransactionHash',
            type: 'varchar'
          },
          {
            name: 'CreatedAt',
            type: 'timestamp',
            default: 'now()',
          }
        ],
      }),
    );

    await queryRunner.createForeignKey('Withdraws', new TableForeignKey({
      columnNames: ['UserWalletID'],
      referencedColumnNames: ['ID'],
      referencedTableName: "UserWallets"
    }));

    await queryRunner.createForeignKey('Withdraws', new TableForeignKey({
      columnNames: ['SystemWalletID'],
      referencedColumnNames: ['ID'],
      referencedTableName: "SystemWallets"
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('Withdraws');
    const fks = table.foreignKeys;
    await queryRunner.dropForeignKeys('Withdraws', fks);
    await queryRunner.dropTable('Withdraws');
  }

}
