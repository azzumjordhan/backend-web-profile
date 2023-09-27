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
exports.ProjectService = void 0;
const common_1 = require("@nestjs/common");
const repository_service_1 = require("../../models/repository/repository.service");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const media_service_1 = require("../media/media.service");
let ProjectService = exports.ProjectService = class ProjectService {
    constructor(repoService, mediaService) {
        this.repoService = repoService;
        this.mediaService = mediaService;
    }
    async uploadImageToCloudinary(file) {
        return await this.mediaService.uploadImage(file).catch(() => {
            throw new common_1.BadRequestException('Invalid file type.');
        });
    }
    async create(payload) {
        const addProject = await this.repoService.projectRepo.create({
            title: payload.title,
            subtitle: payload.subtitle,
            description: payload.description,
            keyword: payload.keyword,
            image: payload.photo,
        });
        const saveProject = await this.repoService.projectRepo.save(addProject);
        return saveProject;
    }
    async findAll(options, filter) {
        const { keyword } = filter;
        let queryProject = await this.repoService.projectRepo.createQueryBuilder('project');
        if (keyword && keyword != '') {
            queryProject = queryProject.andWhere('project.title LIKE :filter', {
                filter: `%${keyword}%`,
            });
        }
        return (0, nestjs_typeorm_paginate_1.paginate)(queryProject, options);
    }
    async findOne(id) {
        const getProject = await this.repoService.projectRepo.findOne({
            where: { id },
        });
        if (!getProject) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error_code: 'DATA_NOT_FOUND',
                message: 'Data Not Found on System',
            }, common_1.HttpStatus.NOT_FOUND);
        }
        return getProject;
    }
    async update(id, payload) {
        const updateProject = await this.repoService.projectRepo.findOne({
            where: { id },
        });
        if (!updateProject) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error_code: 'DATA_NOT_FOUND',
                message: 'Data Not Found on System',
            }, common_1.HttpStatus.NOT_FOUND);
        }
        await this.repoService.projectRepo.update(id, payload);
        return await this.repoService.projectRepo.findOne({ where: { id } });
    }
    async remove(id) {
        const deleteProject = await this.repoService.projectRepo.findOne({
            where: { id },
        });
        if (!deleteProject) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error_code: 'DATA_NOT_FOUND',
                message: 'Data Not Found on System',
            }, common_1.HttpStatus.NOT_FOUND);
        }
        await this.repoService.projectRepo.softDelete(id);
        return {
            message: 'DELETE SUCCESSFULLY',
        };
    }
};
exports.ProjectService = ProjectService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repository_service_1.RepoService,
        media_service_1.MediaService])
], ProjectService);
//# sourceMappingURL=project.service.js.map