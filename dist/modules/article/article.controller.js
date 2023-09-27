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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleController = void 0;
const common_1 = require("@nestjs/common");
const article_service_1 = require("./article.service");
const create_article_dto_1 = require("./dto/create-article.dto");
const update_article_dto_1 = require("./dto/update-article.dto");
const swagger_1 = require("@nestjs/swagger");
let ArticleController = exports.ArticleController = class ArticleController {
    constructor(articleService) {
        this.articleService = articleService;
    }
    async create(body) {
        const create = await this.articleService.create(body);
        return create;
    }
    async findAll(keyword, page = 1, limit = 10) {
        const result = await this.articleService.findAll({
            page,
            limit,
        }, {
            keyword,
        });
        return {
            data: result,
            message: 'SUCCESS',
        };
    }
    async findOne(id) {
        const result = this.articleService.findOne(id);
        return result;
    }
    async update(id, body) {
        const update = await this.articleService.update(id, body);
        return update;
    }
    async remove(id) {
        const result = await this.articleService.remove(id);
        return result;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_article_dto_1.CreateArticleDto]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({
        name: 'keyword',
        required: false,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'page',
        required: false,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'limit',
        required: false,
    }),
    __param(0, (0, common_1.Query)('keyword')),
    __param(1, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_article_dto_1.UpdateArticleDto]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "remove", null);
exports.ArticleController = ArticleController = __decorate([
    (0, common_1.Controller)('article'),
    (0, swagger_1.ApiTags)('Article'),
    __metadata("design:paramtypes", [article_service_1.ArticleService])
], ArticleController);
//# sourceMappingURL=article.controller.js.map