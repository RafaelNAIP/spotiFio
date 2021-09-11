import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class createMusics1631393449290 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'musics',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'gender',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'artistId',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })

        )

        await queryRunner.createForeignKey('musics', new TableForeignKey({
            name: 'ArtistMusic',
            columnNames: ['artistId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'artists',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('musics','ArtistMusic')

        await queryRunner.dropTable('musics')
    }

}
