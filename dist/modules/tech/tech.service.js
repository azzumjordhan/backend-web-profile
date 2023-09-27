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
exports.TechService = void 0;
const common_1 = require("@nestjs/common");
const repository_service_1 = require("../../models/repository/repository.service");
const nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
let TechService = exports.TechService = class TechService {
    constructor(repoService) {
        this.repoService = repoService;
    }
    async create(payload) {
        const newTech = await this.repoService.techRepo.create({
            name_tech: payload.name_tech,
            type: payload.type,
            picture: payload.picture,
            priority: payload.priority,
        });
        const saveTech = await this.repoService.techRepo.save(newTech);
        return saveTech;
    }
    async findAll(options, filter, order_by) {
        const { type, sort } = filter;
        switch (order_by) {
            case 'priority':
                order_by = 'tech.priority';
                break;
            default:
                order_by = { 'tech.created_at': 'ASC' };
                break;
        }
        let queryTech = await this.repoService.techRepo
            .createQueryBuilder('tech')
            .orderBy(order_by, sort.toUpperCase() === 'ASC' ? 'ASC' : 'DESC');
        if (type && type != '') {
            queryTech = queryTech.andWhere('tech.type LIKE :filterType', {
                filterType: `%${type}%`,
            });
        }
        return (0, nestjs_typeorm_paginate_1.paginate)(queryTech, options);
    }
    async findOne(id) {
        const techData = await this.repoService.techRepo.findOne({
            where: { id },
        });
        if (!techData) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error_code: 'DATA_NOT_FOUND',
                message: 'Data Not Found on System',
            }, common_1.HttpStatus.NOT_FOUND);
        }
        return techData;
    }
    async update(id, payload) {
        const tech = await this.repoService.techRepo.findOne({
            where: { id },
        });
        if (!tech) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error_code: 'DATA_NOT_FOUND',
                message: 'Data Not Found on System',
            }, common_1.HttpStatus.NOT_FOUND);
        }
        await this.repoService.techRepo.update(id, payload);
        return await this.repoService.techRepo.findOne({
            where: { id },
        });
    }
    async remove(id) {
        const tech = await this.repoService.techRepo.findOne({
            where: { id },
        });
        if (!tech) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.NOT_FOUND,
                error_code: 'DATA_NOT_FOUND',
                message: 'Data Not Found on System',
            }, common_1.HttpStatus.NOT_FOUND);
        }
        await this.repoService.techRepo.softDelete(id);
        return 'DELETED SUCCESSFULLY';
    }
};
exports.TechService = TechService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repository_service_1.RepoService])
], TechService);
//# sourceMappingURL=tech.service.js.map