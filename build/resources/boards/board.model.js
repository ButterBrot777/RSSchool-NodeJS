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
exports.Board = void 0;
var typeorm_1 = require("typeorm");
var column_model_1 = require("../columns/column.model");
var uuidv4 = require('uuid').v4;
/**
 * Creates board
 * @type {Board}
 * @param {Object} object containing board
 * @param {String} board id (auto-generated by uuid by default)
 * @param {String} board title
 * @param {Array<Column>} board columns
 */
var Board = /** @class */ (function (_super) {
    __extends(Board, _super);
    function Board(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.id, id = _c === void 0 ? uuidv4() : _c, _d = _b.title, title = _d === void 0 ? 'ButterBoard' : _d, _e = _b.columns, columns = _e === void 0 ? [new column_model_1.Column()] : _e;
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.title = title;
        _this.columns = columns;
        return _this;
    }
    __decorate([
        typeorm_1.PrimaryColumn('varchar', { length: 100 }),
        __metadata("design:type", String)
    ], Board.prototype, "id");
    __decorate([
        typeorm_1.Column('varchar', { length: 100 }),
        __metadata("design:type", String)
    ], Board.prototype, "title");
    __decorate([
        typeorm_1.Column('varchar', { length: 100 }),
        __metadata("design:type", Array)
    ], Board.prototype, "columns");
    Board = __decorate([
        typeorm_1.Entity({ name: 'Board' }),
        __metadata("design:paramtypes", [Object])
    ], Board);
    return Board;
}(typeorm_1.BaseEntity));
exports.Board = Board;
//# sourceMappingURL=board.model.js.map