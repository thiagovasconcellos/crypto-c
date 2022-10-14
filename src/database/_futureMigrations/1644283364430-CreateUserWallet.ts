import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateUserWallet1644283364430 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'UserWallets',
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

		await queryRunner.createForeignKey('UserWallets', new TableForeignKey({
			columnNames: ['UserID'],
			referencedColumnNames: ['ID'],
			referencedTableName: "Users"
		}));

		await queryRunner.createForeignKey('UserWallets', new TableForeignKey({
			columnNames: ['NetworkChainID'],
			referencedColumnNames: ['ChainID'],
			referencedTableName: "Networks"
		}));
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		const table = await queryRunner.getTable('UserWallets');
		const fks = table.foreignKeys;
		await queryRunner.dropForeignKeys('UserWallets', fks);
		await queryRunner.dropTable('UserWallets');
	}
}
