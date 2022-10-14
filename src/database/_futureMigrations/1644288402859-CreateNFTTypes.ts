import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateNFTTypes1644288402859 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'NFT_Types',
        columns: [
          {
            name: 'ID',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'Name',
            type: 'varchar'
          },
          {
            name: 'VoteValue',
            type: 'bigint'
          },
          {
            name: 'AdvanceHours',
            type: 'bigint'
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
    await queryRunner.dropTable('NFT_Types');
  }

}
