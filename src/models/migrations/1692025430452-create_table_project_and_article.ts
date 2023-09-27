import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableProjectAndArticle1692025430452
  implements MigrationInterface
{
  name = 'CreateTableProjectAndArticle1692025430452';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`article\` (\`id\` varchar(36) NOT NULL, \`title\` varchar(255) NOT NULL, \`description\` text NOT NULL, \`keyword\` varchar(255) NOT NULL, \`image\` varchar(255) NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`project\` (\`id\` varchar(36) NOT NULL, \`title\` varchar(255) NOT NULL, \`subtitle\` varchar(255) NOT NULL, \`description\` text NOT NULL, \`keyword\` varchar(255) NOT NULL, \`image\` varchar(255) NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`project\``);
    await queryRunner.query(`DROP TABLE \`article\``);
  }
}
