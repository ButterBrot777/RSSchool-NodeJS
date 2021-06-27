"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.remove = exports.update = exports.create = exports.getByID = exports.getAll = void 0;
/**
 * Task repository
 * @module task/repository
 */
// import * as DB from '../../common/db/db';
var task_model_1 = require("./task.model");
var uuidv4 = require('uuid').v4;
var createError = require('http-errors');
/**
 * To get all tasks on concrete board
 * @param {String} boardId board id
 * @returns {Promise<Array<Task>>} promise (array) of tasks on concrete board
 * {@link module:task/repository}
 */
// const getAll = async (boardId: string):Promise<Task[]> => DB.getAllTasks(boardId);
var getAll = function (boardId) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, task_model_1.Task.find({ boardId: boardId })];
}); }); };
exports.getAll = getAll;
/**
 * To get one task by his id
 * @param {String} id task id
 * @returns {Promise<Task>} promise, one task
 * {@link module:task/repository}
 */
var getByID = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var task;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, task_model_1.Task.findOne(id)];
            case 1:
                task = _a.sent();
                if (!task) {
                    throw new createError.NotFound();
                }
                return [2 /*return*/, task];
        }
    });
}); };
exports.getByID = getByID;
/**
 * To create a new task
 * @param {String} boardId board id
 * @param {Object} body some object
 * @returns {Promise<Task>} promise, one task
 * {@link module:task/repository}
 */
// const create = async (boardId: string, body: Task): Promise<Task | undefined> => DB.createTask(boardId, body);
var create = function (boardId, body) { return __awaiter(void 0, void 0, void 0, function () {
    var id, newTask;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = uuidv4();
                newTask = new task_model_1.Task(__assign(__assign({}, body), { id: id, boardId: boardId }));
                return [4 /*yield*/, newTask.save()];
            case 1:
                _a.sent();
                return [2 /*return*/, newTask];
        }
    });
}); };
exports.create = create;
/**
 * Forwards new props to be applied to task on board
 * @param {String} id task id
 * @param {Object} body some object
 * @returns {Promise<Task>}
 * {@link module:task/repository}
 */
var update = function (id, body) { return __awaiter(void 0, void 0, void 0, function () {
    var dbTask;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, task_model_1.Task.findOne(id)];
            case 1:
                dbTask = _a.sent();
                if (!dbTask) {
                    throw new createError.NotFound();
                }
                return [4 /*yield*/, task_model_1.Task.update(id, body)];
            case 2:
                _a.sent();
                // return dbTask;
                return [2 /*return*/, task_model_1.Task.findOne(id)];
        }
    });
}); };
exports.update = update;
/**
 * To delete task
 * @param id task id
 * @returns {Promise<Task>} task one task
 * {@link module:task/repository}
 */
var remove = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var dbTask;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, task_model_1.Task.findOne(id)];
            case 1:
                dbTask = _a.sent();
                if (!dbTask) {
                    throw new createError.NotFound();
                }
                return [4 /*yield*/, dbTask.remove()];
            case 2:
                _a.sent();
                return [2 /*return*/, task_model_1.Task.find()];
        }
    });
}); };
exports.remove = remove;
//# sourceMappingURL=task.memory.repository.js.map