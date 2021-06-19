"use strict";
/**
 * Task model
 * @module task/model
 */
exports.__esModule = true;
exports.Task = void 0;
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
var Task = /** @class */ (function () {
    function Task(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.id, id = _c === void 0 ? uuidv4() : _c, _d = _b.title, title = _d === void 0 ? 'Task' : _d, _e = _b.order, order = _e === void 0 ? 'Order' : _e, _f = _b.description, description = _f === void 0 ? 'Description' : _f, _g = _b.userId, userId = _g === void 0 ? 'userId' : _g, _h = _b.boardId, boardId = _h === void 0 ? 'boardId' : _h, _j = _b.columnId, columnId = _j === void 0 ? 'columnId' : _j;
        this.id = id;
        this.title = title;
        this.order = order;
        this.description = description;
        this.userId = userId;
        this.boardId = boardId;
        this.columnId = columnId;
    }
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.model.js.map