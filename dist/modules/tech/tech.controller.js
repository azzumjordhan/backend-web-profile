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
    create(createTechDto) {
        return this.techService.create(createTechDto);
    }
    findAll() {
        return this.techService.findAll();
    }
    findOne(id) {
        return this.techService.findOne(+id);
    }
    update(id, updateTechDto) {
        return this.techService.update(+id, updateTechDto);
    }
    remove(id) {
        return this.techService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tech_dto_1.CreateTechDto]),
    __metadata("design:returntype", void 0)
], TechController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TechController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TechController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tech_dto_1.UpdateTechDto]),
    __metadata("design:returntype", void 0)
], TechController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TechController.prototype, "remove", null);
exports.TechController = TechController = __decorate([
    (0, common_1.Controller)('tech'),
    (0, swagger_1.ApiTags)('Tech Stack'),
    __metadata("design:paramtypes", [tech_service_1.TechService])
], TechController);
//# sourceMappingURL=tech.controller.js.map