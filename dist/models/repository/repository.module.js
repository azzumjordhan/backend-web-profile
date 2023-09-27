"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const project_entity_1 = require("../entities/project.entity");
const article_entity_1 = require("../entities/article.entity");
const repository_service_1 = require("./repository.service");
const tech_entity_1 = require("../entities/tech.entity");
let RepoModule = exports.RepoModule = class RepoModule {
};
exports.RepoModule = RepoModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([project_entity_1.Project, article_entity_1.Article, tech_entity_1.Tech])],
        providers: [repository_service_1.RepoService],
        exports: [repository_service_1.RepoService],
    })
], RepoModule);
//# sourceMappingURL=repository.module.js.map