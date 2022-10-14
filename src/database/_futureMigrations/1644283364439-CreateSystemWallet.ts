import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateSystemWallet1644283364439 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'SystemWallets',
        columns: [
          {
            name: 'ID',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'NetworkChainID',
            type: 'int'
          },
          {
            name: 'WalletAddress',
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
          },
          {
            name: 'UpdatedAt',
            type: 'timestamp',
            default: 'now()',
          }
        ],
      }),
    );

    await queryRunner.createForeignKey('SystemWallets', new TableForeignKey({
      columnNames: ['NetworkChainID'],
      referencedColumnNames: ['ChainID'],
      referencedTableName: "Networks"
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('SystemWallets');
    const fks = table.foreignKeys;
    await queryRunner.dropForeignKeys('SystemWallets', fks);
    await queryRunner.dropTable('SystemWallets');
  }

}
