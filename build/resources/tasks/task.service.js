"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.remove = exports.update = exports.create = exports.getByID = exports.getAll = void 0;
/**
 * Task service
 * @module task/service
 */
var tasksRepo = __importStar(require("./task.memory.repository"));
/**
 * To get all tasks on concrete board
 * @param {String} boardId board id
 * @returns {Promise<Array<Task>>} promise (array) of tasks on concrete board
 * {@link module:task/repository}
 */
var getAll = function (boardId) { return tasksRepo.getAll(boardId); };
exports.getAll = getAll;
/**
 * To get one task by his id
 * @param {String} id task id
 * @returns {Promise<Task>} promise, one task
 * {@link module:task/repository}
 */
var getByID = function (id) { return tasksRepo.getByID(id); };
exports.getByID = getByID;
/**
 * To create a new task
 * @param {String} boardId board id
 * @param {Object} body some object
 * @returns {Promise<Task>} promise, one task
 * {@link module:task/repository}
 */
var create = function (boardId, body) { return tasksRepo.create(boardId, body); };
exports.create = create;
/**
 * Forwards new props to be applied to task on board
 * @param {String} id task id
 * @param {Object} body some object
 * @returns {Promise<Task>}
 * {@link module:task/repository}
 */
var update = function (id, body) { return tasksRepo.update(id, body); };
exports.update = update;
/**
 * To delete task
 * @param {String} id task id
 * {@link module:task/repository}
 */
var remove = function (id) { return tasksRepo.remove(id); };
exports.remove = remove;
//# sourceMappingURL=task.service.js.map