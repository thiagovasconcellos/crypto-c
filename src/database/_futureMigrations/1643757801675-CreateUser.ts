import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1643757801675 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'Users',
				columns: [
					{
						name: 'ID',
						type: 'uuid',
						isPrimary: true,
						generationStrategy: 'uuid',
						default: 'uuid_generate_v4()'
					},
					{
						name: 'cryptoCAddress',
						type: 'varchar',
						isUnique: true,
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
		await queryRunner.dropTable('Users');
	}
}
