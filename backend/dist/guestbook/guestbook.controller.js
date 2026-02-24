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
exports.GuestbookController = void 0;
const common_1 = require("@nestjs/common");
const guestbook_service_1 = require("./guestbook.service");
const create_guestbook_dto_1 = require("./dto/create-guestbook.dto");
let GuestbookController = class GuestbookController {
    constructor(guestbookService) {
        this.guestbookService = guestbookService;
    }
    async findAll() {
        try {
            return await this.guestbookService.findAll();
        }
        catch (error) {
            throw new common_1.HttpException('Failed to fetch guestbook entries', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async create(createGuestbookDto) {
        try {
            if (!createGuestbookDto.name || !createGuestbookDto.message) {
                throw new common_1.HttpException('Name and message are required', common_1.HttpStatus.BAD_REQUEST);
            }
            if (createGuestbookDto.name.length > 100) {
                throw new common_1.HttpException('Name must be 100 characters or less', common_1.HttpStatus.BAD_REQUEST);
            }
            if (createGuestbookDto.message.length > 500) {
                throw new common_1.HttpException('Message must be 500 characters or less', common_1.HttpStatus.BAD_REQUEST);
            }
            return await this.guestbookService.create(createGuestbookDto);
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            throw new common_1.HttpException('Failed to create guestbook entry', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.GuestbookController = GuestbookController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GuestbookController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_guestbook_dto_1.CreateGuestbookDto]),
    __metadata("design:returntype", Promise)
], GuestbookController.prototype, "create", null);
exports.GuestbookController = GuestbookController = __decorate([
    (0, common_1.Controller)('api/guestbook'),
    __metadata("design:paramtypes", [guestbook_service_1.GuestbookService])
], GuestbookController);
//# sourceMappingURL=guestbook.controller.js.map