"use strict";
exports.__esModule = true;
exports.Board = void 0;
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
var Board = /** @class */ (function () {
    function Board(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.id, id = _c === void 0 ? uuidv4() : _c, _d = _b.title, title = _d === void 0 ? 'ButterBoard' : _d, _e = _b.columns, columns = _e === void 0 ? [new column_model_1.Column()] : _e;
        this.id = id;
        this.title = title;
        this.columns = columns;
    }
    return Board;
}());
exports.Board = Board;
//# sourceMappingURL=board.model.js.map