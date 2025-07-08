import { MigrationInterface, QueryRunner } from "typeorm";

export class addedUserEntity1751982696764 implements MigrationInterface {
    name = 'addedUserEntity1751982696764'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "questions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "question" character varying NOT NULL, CONSTRAINT "UQ_7ef689c4d85706f2ca92366dc0b" UNIQUE ("question"), CONSTRAINT "PK_08a6d4b0f49ff300bf3a0ca60ac" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "questions"`);
    }

}
