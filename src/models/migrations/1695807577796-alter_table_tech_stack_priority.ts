import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableTechStackPriority1695807577796
  implements MigrationInterface
{
  name = 'AlterTableTechStackPriority1695807577796';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`tech_stack\` DROP COLUMN \`priority\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`tech_stack\` ADD \`priority\` int NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`tech_stack\` DROP COLUMN \`priority\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`tech_stack\` ADD \`priority\` varchar(255) NULL DEFAULT 'NULL'`,
    );
  }
}
