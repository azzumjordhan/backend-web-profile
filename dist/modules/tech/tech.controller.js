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
exports.TechController = void 0;
const common_1 = require("@nestjs/common");
const tech_service_1 = require("./tech.service");
const create_tech_dto_1 = require("./dto/create-tech.dto");
const update_tech_dto_1 = require("./dto/update-tech.dto");
const swagger_1 = require("@nestjs/swagger");
let TechController = exports.TechController = class TechController {
    constructor(techService) {
        this.techService = techService;
    }
    async create(body, res) {
        const addTech = await this.techService.create(body);
        return res.status(common_1.HttpStatus.CREATED).send({
            message: 'SUCCESS',
            data: addTech,
        });
    }
    async findAll(type, sort, order_by, page = 1, limit = 10, res) {
        const result = await this.techService.findAll({
            page,
            limit,
        }, { type, sort }, order_by);
        return res.status(common_1.HttpStatus.OK).send({
            message: 'SUCCESS',
            data: result,
        });
    }
    async findOne(id, res) {
        const result = await this.techService.findOne(id);
        return res.status(common_1.HttpStatus.OK).send({
            message: 'SUCCESS',
            data: result,
        });
    }
    async update(id, updateTechDto) {
        return this.techService.update(id, updateTechDto);
    }
    async remove(id) {
        const deleteTech = await this.techService.remove(id);
        return deleteTech;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tech_dto_1.CreateTechDto, Object]),
    __metadata("design:returntype", Promise)
], TechController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({
        name: 'type',
        required: false,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'sort',
        required: false,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'order_by',
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
    __param(0, (0, common_1.Query)('type')),
    __param(1, (0, common_1.Query)('sort', new common_1.DefaultValuePipe('ASC'))),
    __param(2, (0, common_1.Query)('order_by', new common_1.DefaultValuePipe(''))),
    __param(3, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(4, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
    __param(5, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], TechController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TechController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tech_dto_1.UpdateTechDto]),
    __metadata("design:returntype", Promise)
], TechController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TechController.prototype, "remove", null);
exports.TechController = TechController = __decorate([
    (0, common_1.Controller)('tech'),
    (0, swagger_1.ApiTags)('Tech Stack'),
    __metadata("design:paramtypes", [tech_service_1.TechService])
], TechController);
//# sourceMappingURL=tech.controller.js.map