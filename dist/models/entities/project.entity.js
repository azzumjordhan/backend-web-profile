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
exports.Project = void 0;
const typeorm_1 = require("typeorm");
let Project = exports.Project = class Project extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Project.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: false,
    }),
    __metadata("design:type", String)
], Project.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: false,
    }),
    __metadata("design:type", String)
], Project.prototype, "subtitle", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        nullable: false,
    }),
    __metadata("design:type", String)
], Project.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: false,
    }),
    __metadata("design:type", String)
], Project.prototype, "keyword", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", String)
], Project.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'datetime',
        nullable: false,
    }),
    __metadata("design:type", Date)
], Project.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'datetime',
        nullable: false,
    }),
    __metadata("design:type", Date)
], Project.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        type: 'datetime',
        nullable: false,
    }),
    __metadata("design:type", Date)
], Project.prototype, "deleted_at", void 0);
exports.Project = Project = __decorate([
    (0, typeorm_1.Entity)({ name: 'project' })
], Project);
//# sourceMappingURL=project.entity.js.map