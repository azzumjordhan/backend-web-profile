"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionSource = void 0;
const dotenv = require("dotenv");
const typeorm_1 = require("typeorm");
dotenv.config();
const dir = process.env.NODE_ENV == 'migration' ? 'src' : 'dist';
exports.connectionSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    migrationsTableName: 'migrations',
    logging: false,
    synchronize: false,
    name: 'default',
    entities: [`${dir}/**/*.entity.{js,ts}`],
    migrations: [`${dir}/models/migrations/*.{js,ts}`],
});
//# sourceMappingURL=ormdatasource.js.map