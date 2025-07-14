import { MigrationInterface, QueryRunner } from "typeorm";

export class addedUserEntity1752498384748 implements MigrationInterface {
    name = 'addedUserEntity1752498384748'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "questions" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "questions" ALTER COLUMN "questionEn" SET DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "questions" ALTER COLUMN "questionEn" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "questions" ADD "value" integer NOT NULL`);
    }

}
