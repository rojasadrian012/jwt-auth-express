import { MigrationInterface, QueryRunner } from "typeorm";

export class addedUserEntity1751290665030 implements MigrationInterface {
    name = 'addedUserEntity1751290665030'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Verificar si el tipo ya existe antes de crearlo
        await queryRunner.query(`
          DO $$ BEGIN
            IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'users_role_enum') THEN
              CREATE TYPE "public"."users_role_enum" AS ENUM('user', 'admin');
            END IF;
          END$$;
        `);
        await queryRunner.query(`
          CREATE TABLE "users" (
            "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
            "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
            "updated_at" TIMESTAMP NOT NULL DEFAULT now(), 
            "name" character varying NOT NULL, 
            "email" character varying NOT NULL, 
            "password" character varying NOT NULL, 
            "role" "public"."users_role_enum" NOT NULL DEFAULT 'user', 
            "photo" character varying NOT NULL DEFAULT 'default.png', 
            "verified" boolean NOT NULL DEFAULT false, 
            CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), 
            CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
          )
        `);
        await queryRunner.query(`CREATE INDEX "email_index" ON "users" ("email")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."email_index"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
    }
}
