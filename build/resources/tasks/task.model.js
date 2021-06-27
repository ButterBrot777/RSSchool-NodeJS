"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.__esModule = true;
exports.Task = void 0;
/**
 * Task model
 * @module task/model
 */
var typeorm_1 = require("typeorm");
var uuidv4 = require('uuid').v4;
/**
 * Task instance
 * @typedef {Object} Task
 * @property {String} id id
 * @property {String} title title
 * @property {String} order order
 * @property {String} description description
 * @property {String} userId user id
 * @property {String} boardId board id
 * @property {String} columnId column id
 */
var Task = /** @class */ (function (_super) {
    __extends(Task, _super);
    function Task(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.id, id = _c === void 0 ? uuidv4() : _c, _d = _b.title, title = _d === void 0 ? 'Task' : _d, _e = _b.order, order = _e === void 0 ? 'Order' : _e, _f = _b.description, description = _f === void 0 ? 'Description' : _f, _g = _b.userId, userId = _g === void 0 ? 'userId' : _g, _h = _b.boardId, boardId = _h === void 0 ? 'boardId' : _h, _j = _b.columnId, columnId = _j === void 0 ? 'columnId' : _j;
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.title = title;
        _this.order = order;
        _this.description = description;
        _this.userId = userId;
        _this.boardId = boardId;
        _this.columnId = columnId;
        return _this;
    }
    __decorate([
        typeorm_1.PrimaryColumn('varchar', { length: 100 }),
        __metadata("design:type", String)
    ], Task.prototype, "id");
    __decorate([
        typeorm_1.Column('varchar', { length: 100 }),
        __metadata("design:type", String)
    ], Task.prototype, "title");
    __decorate([
        typeorm_1.Column('varchar', { length: 100 }),
        __metadata("design:type", String)
    ], Task.prototype, "order");
    __decorate([
        typeorm_1.Column('varchar', { length: 100 }),
        __metadata("design:type", String)
    ], Task.prototype, "description");
    __decorate([
        typeorm_1.Column({ type: 'varchar', nullable: true }),
        __metadata("design:type", Object)
    ], Task.prototype, "boardId");
    __decorate([
        typeorm_1.Column('varchar', { length: 100 }),
        __metadata("design:type", Object)
    ], Task.prototype, "columnId");
    __decorate([
        typeorm_1.Column({ type: 'varchar', nullable: true }),
        __metadata("design:type", Object)
    ], Task.prototype, "userId");
    Task = __decorate([
        typeorm_1.Entity({ name: 'Task' }),
        __metadata("design:paramtypes", [Object])
    ], Task);
    return Task;
}(typeorm_1.BaseEntity));
exports.Task = Task;
//# sourceMappingURL=task.model.js.map