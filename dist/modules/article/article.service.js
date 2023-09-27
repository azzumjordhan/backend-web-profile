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
exports.ArticleService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
const repository_service_1 = require("../../models/repository/repository.service");
let ArticleService = exports.ArticleService = class ArticleService {
    constructor(repoService) {
        this.repoService = repoService;
    }
    async create(payload) {
        const addArticle = await this.repoService.articleRepo.create({
            title: payload.title,
            description: payload.description,
            keyword: payload.keyword,
            image: payload.image,
        });
        const saveArticle = await this.repoService.articleRepo.save(addArticle);
        return saveArticle;
    }
    async findAll(options, filter) {
        const { keyword } = filter;
        let queryArticle = await this.repoService.articleRepo.createQueryBuilder('article');
        if (keyword && keyword != '') {
            queryArticle = queryArticle.andWhere('article.title LIKE :filter', {
                filter: `%${keyword}%`,
            });
        }
        return (0, nestjs_typeorm_paginate_1.paginate)(queryArticle, options);
    }
    async findOne(id) {
        const getArticleById = await this.repoService.articleRepo.findOne({
            where: { id },
        });
        if (!getArticleById) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error_code: 'DATA_NOT_FOUND',
                mesaage: 'Data Not Found on System',
            }, common_1.HttpStatus.NOT_FOUND);
        }
        return getArticleById;
    }
    async update(id, payload) {
        const getArticleById = await this.repoService.articleRepo.findOne({
            where: { id },
        });
        if (!getArticleById) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error_code: 'DATA_NOT_FOUND',
                mesaage: 'Data Not Found on System',
            }, common_1.HttpStatus.NOT_FOUND);
        }
        await this.repoService.articleRepo.update(id, payload);
        return await this.repoService.articleRepo.findOne({ where: { id } });
    }
    async remove(id) {
        const getArticleById = await this.repoService.articleRepo.findOne({
            where: { id },
        });
        if (!getArticleById) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error_code: 'DATA_NOT_FOUND',
                mesaage: 'Data Not Found on System',
            }, common_1.HttpStatus.NOT_FOUND);
        }
        await this.repoService.articleRepo.softDelete(id);
        return {
            message: 'DELETED SUCCESSFULLY',
        };
    }
};
exports.ArticleService = ArticleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repository_service_1.RepoService])
], ArticleService);
//# sourceMappingURL=article.service.js.map