import { MigrationInterface, QueryRunner } from "typeorm";

export class addedUserEntity1752756364917 implements MigrationInterface {
    name = 'addedUserEntity1752756364917'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "options" ADD "value" integer NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "options" DROP COLUMN "value"`);
    }

}
