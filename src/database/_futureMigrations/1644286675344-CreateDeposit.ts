import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateDeposit1644286675344 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'Deposits',
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
						name: 'BUSD_Paid',
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

		await queryRunner.createForeignKey('Deposits', new TableForeignKey({
			columnNames: ['UserWalletID'],
			referencedColumnNames: ['ID'],
			referencedTableName: "UserWallets"
		}));

		await queryRunner.createForeignKey('Deposits', new TableForeignKey({
			columnNames: ['SystemWalletID'],
			referencedColumnNames: ['ID'],
			referencedTableName: "SystemWallets"
		}));
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		const table = await queryRunner.getTable('Deposits');
		const fks = table.foreignKeys;
		await queryRunner.dropForeignKeys('Deposits', fks);
		await queryRunner.dropTable('Deposits');
	}
}
