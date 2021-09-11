import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterEmailFieldToUnique1631297638995 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', 'email')
        await queryRunner.addColumn('users', new TableColumn({
            name: 'email',
            type: 'varchar',
            isUnique: true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', 'email')

        await queryRunner.addColumn('users', new TableColumn({
                name: 'email',
                type: 'varchar',
                isNullable: false,
        }))
    }

}
