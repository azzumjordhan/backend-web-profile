"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const tech_module_1 = require("./modules/tech/tech.module");
const article_module_1 = require("./modules/article/article.module");
const project_module_1 = require("./modules/project/project.module");
const typeorm_1 = require("@nestjs/typeorm");
const ormconfig_1 = require("./ormconfig");
const repository_module_1 = require("./models/repository/repository.module");
const media_module_1 = require("./modules/media/media.module");
const dashboard_module_1 = require("./modules/dashboard/dashboard.module");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(ormconfig_1.default),
            project_module_1.ProjectModule,
            article_module_1.ArticleModule,
            tech_module_1.TechModule,
            repository_module_1.RepoModule,
            media_module_1.MediaModule,
            dashboard_module_1.DashboardModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map