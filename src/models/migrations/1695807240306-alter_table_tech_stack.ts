import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableTechStack1695807240306 implements MigrationInterface {
  name = 'AlterTableTechStack1695807240306';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`tech_stack\` ADD \`priority\` varchar(255) NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`tech_stack\` DROP COLUMN \`priority\``,
    );
  }
}
