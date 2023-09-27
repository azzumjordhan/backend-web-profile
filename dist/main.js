"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dotenv = require("dotenv");
dotenv.config();
async function bootstrap() {
    const logger = new common_1.Logger('NestApplication');
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({}));
    if (process.env.APP_MODE == 'DEV') {
        const swaggerConf = new swagger_1.DocumentBuilder()
            .addBearerAuth()
            .setTitle('Back End Web Profile')
            .setVersion('0.0.1')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, swaggerConf);
        swagger_1.SwaggerModule.setup('documentation', app, document);
    }
    app.enableCors({
        origin: [
            'http://localhost:3000',
            /localhost/,
        ],
        credentials: true,
    });
    await app.listen(process.env.APP_PORT || 3001);
    logger.log('Running at http://localhost:' + process.env.APP_PORT);
    logger.log('Swagger at http://localhost:' + process.env.APP_PORT + '/documentation');
}
bootstrap();
//# sourceMappingURL=main.js.map