"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
const dir = process.env.NODE_ENV == 'migration' ? 'src' : 'dist';
exports.default = {
    type: process.env.DATABASE_CONNECTION,
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [`${dir}/**/*.entity.{js,ts}`],
    migrations: [`${dir}/models/migrations/*.{js,ts}`],
    seeds: [`${dir}/models/migrations/seeds/*.seed.{js,ts}`],
    factories: [`${dir}/models/migrations/seeds/factories/*.factory.{js,ts}`],
    cli: {
        migrationsDir: `${dir}/models/migrations`,
        entitiesDir: `${dir}/models/entities`,
        seedersDir: `${dir}/models/migrations/seeds`,
        factoriesDir: `${dir}/models/migrations/seeds/factories`,
    },
    synchronize: false,
};
//# sourceMappingURL=ormconfig.js.map