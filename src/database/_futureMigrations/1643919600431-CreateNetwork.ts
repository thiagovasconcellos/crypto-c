import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateNetwork1643919600431 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'Networks',
				columns: [
					{
						name: 'ChainID',
						type: 'int',
						isPrimary: true,
						generationStrategy: 'increment',
						isGenerated: true
					},
					{
						name: 'NetworkName',
						type: 'varchar'
					},
					{
						name: 'NewRPCURL',
						type: 'varchar',
						isUnique: true
					},
					{
						name: 'Symbol',
						type: 'varchar'
					},
					{
						name: 'BlockExplorerURL',
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
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('Networks');
	}
}
