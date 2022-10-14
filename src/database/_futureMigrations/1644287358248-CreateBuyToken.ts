import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateBuyToken1644287358248 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'BuyTokens',
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
						name: 'BUSD_Paid',
						type: 'decimal',
						precision: 18,
						scale: 10
					},
					{
						name: 'CRYSHA_Received',
						type: 'decimal',
						precision: 36,
						scale: 18
					},
					{
						name: 'CreatedAt',
						type: 'timestamp',
						default: 'now()',
					}
				],
			}),
		);

		await queryRunner.createForeignKey('BuyTokens', new TableForeignKey({
			columnNames: ['UserID'],
			referencedColumnNames: ['ID'],
			referencedTableName: "Users"
		}));
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		const table = await queryRunner.getTable('BuyTokens');
		const fks = table.foreignKeys;
		await queryRunner.dropForeignKeys('BuyTokens', fks);
		await queryRunner.dropTable('BuyTokens');
	}

}
