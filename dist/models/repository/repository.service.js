"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepoService = void 0;
const common_1 = require("@nestjs/common");
const project_entity_1 = require("../entities/project.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const article_entity_1 = require("../entities/article.entity");
const tech_entity_1 = require("../entities/tech.entity");
let RepoService = exports.RepoService = class RepoService {
};
__decorate([
    (0, typeorm_2.InjectRepository)(project_entity_1.Project),
    __metadata("design:type", typeorm_1.Repository)
], RepoService.prototype, "projectRepo", void 0);
__decorate([
    (0, typeorm_2.InjectRepository)(article_entity_1.Article),
    __metadata("design:type", typeorm_1.Repository)
], RepoService.prototype, "articleRepo", void 0);
__decorate([
    (0, typeorm_2.InjectRepository)(tech_entity_1.Tech),
    __metadata("design:type", typeorm_1.Repository)
], RepoService.prototype, "techRepo", void 0);
exports.RepoService = RepoService = __decorate([
    (0, common_1.Injectable)()
], RepoService);
//# sourceMappingURL=repository.service.js.map