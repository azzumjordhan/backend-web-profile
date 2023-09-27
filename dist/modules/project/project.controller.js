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
exports.ProjectController = void 0;
const common_1 = require("@nestjs/common");
const project_service_1 = require("./project.service");
const update_project_dto_1 = require("./dto/update-project.dto");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
let ProjectController = exports.ProjectController = class ProjectController {
    constructor(projectService) {
        this.projectService = projectService;
    }
    async create(photo, body, res) {
        let photos = null;
        try {
            photos = await this.projectService.uploadImageToCloudinary(photo);
        }
        catch (error) { }
        if (photos) {
            body['photo'] = photos.secure_url;
        }
        const project = await this.projectService.create(body);
        return res.status(common_1.HttpStatus.CREATED).send({
            message: 'SUCCESS',
            data: project,
        });
    }
    async findAll(keyword, page = 1, limit = 10, res) {
        const result = await this.projectService.findAll({
            page,
            limit,
        }, {
            keyword,
        });
        return res.status(common_1.HttpStatus.OK).send({
            message: 'SUCCESS',
            data: result,
        });
    }
    async findOne(id, res) {
        const result = await this.projectService.findOne(id);
        return res.status(common_1.HttpStatus.OK).send({
            message: 'SUCCESS',
            data: result,
        });
    }
    async update(id, body, res) {
        const update = await this.projectService.update(id, body);
        return res.status(common_1.HttpStatus.OK).send({
            message: 'SUCCESS',
            data: update,
        });
    }
    async remove(id) {
        const result = await this.projectService.remove(id);
        return result;
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                title: { type: 'string' },
                subtitle: { type: 'string' },
                description: { type: 'string' },
                keyword: { type: 'string' },
                photo: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('photo')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "create", null);
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
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_project_dto_1.UpdateProjectDto, Object]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "remove", null);
exports.ProjectController = ProjectController = __decorate([
    (0, common_1.Controller)('project'),
    (0, swagger_1.ApiTags)('Project'),
    __metadata("design:paramtypes", [project_service_1.ProjectService])
], ProjectController);
//# sourceMappingURL=project.controller.js.map