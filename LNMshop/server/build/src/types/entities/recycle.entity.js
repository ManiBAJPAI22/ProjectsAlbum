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
exports.Recycle = void 0;
const typeorm_1 = require("typeorm");
const _1 = require(".");
const enums_1 = require("../enums");
let Recycle = class Recycle extends _1.BaseResource {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, typeorm_1.PrimaryColumn)({ type: 'uuid', nullable: false }),
    __metadata("design:type", String)
], Recycle.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Recycle.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.User, (user) => user.recycles, {
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", _1.User)
], Recycle.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Recycle.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        nullable: false,
        enum: enums_1.RecycleCategory,
    }),
    __metadata("design:type", String)
], Recycle.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Recycle.prototype, "remarks", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", Object)
], Recycle.prototype, "img_url", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'boolean',
        nullable: true,
        default: true,
    }),
    __metadata("design:type", Boolean)
], Recycle.prototype, "is_pickedup", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", String)
], Recycle.prototype, "recycle_pickup_time", void 0);
Recycle = __decorate([
    (0, typeorm_1.Entity)('recycle')
], Recycle);
exports.Recycle = Recycle;
