import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateUserNFT1644288570147 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'UserNFTs',
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
            name: 'NFT_TypeID',
            type: 'uuid'
          },
          {
            name: 'CRYSHA_ValueBase',
            type: 'decimal',
            precision: 36,
            scale: 18
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

    await queryRunner.createForeignKey('UserNFTs', new TableForeignKey({
      columnNames: ['UserID'],
      referencedColumnNames: ['ID'],
      referencedTableName: "Users"
    }));

    await queryRunner.createForeignKey('UserNFTs', new TableForeignKey({
      columnNames: ['NFT_TypeID'],
      referencedColumnNames: ['ID'],
      referencedTableName: "NFT_Types"
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('UserNFTs');
    const fks = table.foreignKeys;
    await queryRunner.dropForeignKeys('UserNFTs', fks);
    await queryRunner.dropTable('UserNFTs');
  }

}
