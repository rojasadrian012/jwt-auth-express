import { MigrationInterface, QueryRunner } from "typeorm";

export class addedUserEntity1752756988261 implements MigrationInterface {
    name = 'addedUserEntity1752756988261'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_question_responses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "scoreObtained" integer NOT NULL DEFAULT '0', "user_id" uuid, "question_id" uuid, CONSTRAINT "PK_f8c0abd9a7840ee79fed1fab4d6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user_question_responses" ADD CONSTRAINT "FK_458963770dfd3dc2b274946cbbe" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_question_responses" ADD CONSTRAINT "FK_c211c9fc80db46232c6e316bb8e" FOREIGN KEY ("question_id") REFERENCES "questions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_question_responses" DROP CONSTRAINT "FK_c211c9fc80db46232c6e316bb8e"`);
        await queryRunner.query(`ALTER TABLE "user_question_responses" DROP CONSTRAINT "FK_458963770dfd3dc2b274946cbbe"`);
        await queryRunner.query(`DROP TABLE "user_question_responses"`);
    }

}
