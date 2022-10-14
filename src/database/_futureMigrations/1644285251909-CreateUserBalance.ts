import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateUserBalance1644285251909 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'UserBalance',
				columns: [
					{
						name: 'ID',
						type: 'int',
						isPrimary: true,
						generationStrategy: 'increment',
						isGenerated: true
					},
					{
						name: 'UserID',
						type: 'uuid'
					},
					{
						name: 'CRYSHA_NoWithdrawAllowedBalance',
						type: 'decimal',
						precision: 36,
						scale: 18
					},
					{
						name: 'CRYSHA_Balance',
						type: 'decimal',
						precision: 36,
						scale: 18
					},
					{
						name: 'BUSD_Balance',
						type: 'decimal',
						precision: 18,
						scale: 10
					}
				],
			}),
		);

		await queryRunner.createForeignKey('UserBalance', new TableForeignKey({
			columnNames: ['UserID'],
			referencedColumnNames: ['ID'],
			referencedTableName: "Users"
		}));
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		const table = await queryRunner.getTable('UserBalance');
		const fks = table.foreignKeys;
		await queryRunner.dropForeignKeys('UserBalance', fks);
		await queryRunner.dropTable('UserBalance');
	}
}
