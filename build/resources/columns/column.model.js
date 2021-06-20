"use strict";
/**
 * Column model
 * @module column/model
 * @ignore
 */
exports.__esModule = true;
exports.Column = void 0;
var uuidv4 = require('uuid').v4;
/**
 * Column instance
 * @typedef {Object} Column
 * @property {String} id column id
 * @property {String} title column title
 * @property {String} order column order
 */
var Column = /** @class */ (function () {
    function Column(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.id, id = _c === void 0 ? uuidv4() : _c, _d = _b.title, title = _d === void 0 ? 'ColumnTitle' : _d, _e = _b.order, order = _e === void 0 ? 'Order' : _e;
        this.id = id;
        this.title = title;
        this.order = order;
    }
    return Column;
}());
exports.Column = Column;
//# sourceMappingURL=column.model.js.map