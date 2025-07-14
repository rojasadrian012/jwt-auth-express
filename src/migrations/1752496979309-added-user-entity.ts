import { MigrationInterface, QueryRunner } from "typeorm";

export class addedUserEntity1752496979309 implements MigrationInterface {
    name = 'addedUserEntity1752496979309'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "options" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "label" character varying NOT NULL, "labelEn" character varying NOT NULL, "questionId" uuid, CONSTRAINT "PK_d232045bdb5c14d932fba18d957" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "questions" ADD "questionEn" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "questions" ADD "value" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "options" ADD CONSTRAINT "FK_46b668c49a6c4154d4643d875a5" FOREIGN KEY ("questionId") REFERENCES "questions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "options" DROP CONSTRAINT "FK_46b668c49a6c4154d4643d875a5"`);
        await queryRunner.query(`ALTER TABLE "questions" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "questions" DROP COLUMN "questionEn"`);
        await queryRunner.query(`DROP TABLE "options"`);
    }

}
