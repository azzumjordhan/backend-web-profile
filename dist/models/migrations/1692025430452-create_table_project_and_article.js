"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableProjectAndArticle1692025430452 = void 0;
class CreateTableProjectAndArticle1692025430452 {
    constructor() {
        this.name = 'CreateTableProjectAndArticle1692025430452';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`article\` (\`id\` varchar(36) NOT NULL, \`title\` varchar(255) NOT NULL, \`description\` text NOT NULL, \`keyword\` varchar(255) NOT NULL, \`image\` varchar(255) NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`project\` (\`id\` varchar(36) NOT NULL, \`title\` varchar(255) NOT NULL, \`subtitle\` varchar(255) NOT NULL, \`description\` text NOT NULL, \`keyword\` varchar(255) NOT NULL, \`image\` varchar(255) NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`project\``);
        await queryRunner.query(`DROP TABLE \`article\``);
    }
}
exports.CreateTableProjectAndArticle1692025430452 = CreateTableProjectAndArticle1692025430452;
//# sourceMappingURL=1692025430452-create_table_project_and_article.js.map