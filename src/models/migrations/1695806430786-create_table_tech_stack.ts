import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableTechStack1695806430786 implements MigrationInterface {
  name = 'CreateTableTechStack1695806430786';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`tech_stack\` (\`id\` varchar(36) NOT NULL, \`name_tech\` varchar(255) NOT NULL, \`type\` varchar(255) NOT NULL, \`picture\` varchar(255) NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`tech_stack\``);
  }
}
