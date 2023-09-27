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
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const repository_service_1 = require("../../models/repository/repository.service");
let DashboardService = exports.DashboardService = class DashboardService {
    constructor(repoService) {
        this.repoService = repoService;
    }
    async techStack() {
        return null;
    }
    async article() {
        const articleData = await this.repoService.articleRepo
            .createQueryBuilder('article')
            .limit(3)
            .orderBy('article.created_at', 'DESC')
            .getMany();
        console.log(articleData);
        return articleData;
    }
    async project() {
        const projectData = await this.repoService.projectRepo
            .createQueryBuilder('project')
            .limit(3)
            .orderBy('project.created_at', 'DESC')
            .getMany();
        console.log(projectData);
        return projectData;
    }
};
exports.DashboardService = DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repository_service_1.RepoService])
], DashboardService);
//# sourceMappingURL=dashboard.service.js.map