"use strict";
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
 * Board repository
 * @module board/repository
 */
// import * as DB from '../../common/db/db';
var board_model_1 = require("./board.model");
var task_model_1 = require("../tasks/task.model");
var createError = require('http-errors');
/**
 * To get all boards
 * @returns {Promise<Array<Board>>} promise (array) of boards
 * {@link module:board/repository}
 */
// const getAll = async (): Promise<Board[]> => DB.getAllBoards();
var getAll = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, board_model_1.Board.find()];
}); }); };
exports.getAll = getAll;
/**
 * To get simple board by his id
 * @param {String} id user id
 * @returns {Promise<Board>} promise, one simple board
 * {@link module:board/repository}
 */
var getByID = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var board;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, board_model_1.Board.findOne(id)];
            case 1:
                board = _a.sent();
                if (!board) {
                    throw new createError.NotFound();
                }
                return [2 /*return*/, board];
        }
    });
}); };
exports.getByID = getByID;
/**
 * To create a board instance
 * @param {User} board board instance
 * @returns {Promise<User>} promise, one board
 * {@link module:board/repository}
 */
// const create = async (board: Board): Promise<Board | undefined> => DB.createBoard(board);
var create = function (board) { return __awaiter(void 0, void 0, void 0, function () {
    var newBoard;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                newBoard = new board_model_1.Board(board);
                return [4 /*yield*/, newBoard.save()];
            case 1:
                _a.sent();
                return [2 /*return*/, newBoard];
        }
    });
}); };
exports.create = create;
/**
 * To update some board data
 * @param {String} id board id
 * @param {Object} body data object
 * @returns {Promise<Board>} promise, one board
 * {@link module:board/repository}
 */
// const update = async (id: string, body: Board): Promise<Board> => {
//   const dbBoards = await DB.getBoardByID(id);
//   if (!dbBoards) {
//     throw new createError.NotFound();
//   }
//
//   await DB.updateBoard(dbBoards, body);
//   const updatedBoard = await getByID(id);
//   return updatedBoard;
// };
var update = function (id, body) { return __awaiter(void 0, void 0, void 0, function () {
    var board, newBoard;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, board_model_1.Board.findOne({ id: id })];
            case 1:
                board = _a.sent();
                if (!board) {
                    throw new Error('User not found');
                }
                return [4 /*yield*/, board_model_1.Board.update(id, body)];
            case 2:
                _a.sent();
                return [4 /*yield*/, board_model_1.Board.findOne(id)];
            case 3:
                newBoard = _a.sent();
                return [2 /*return*/, newBoard];
        }
    });
}); };
exports.update = update;
/**
 * To delete some board
 * @param {String} id board id
 * @returns {Promise<Board>} promise, one board
 * {@link module:board/repository}
 */
var remove = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var dbBoards, updateTasks;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, board_model_1.Board.findOne(id)];
            case 1:
                dbBoards = _a.sent();
                if (!dbBoards) {
                    throw new Error("Board with id " + id + " was not found");
                }
                // await DB.removeBoard(dbBoards);
                // return dbBoards;
                return [4 /*yield*/, dbBoards.remove()];
            case 2:
                // await DB.removeBoard(dbBoards);
                // return dbBoards;
                _a.sent();
                return [4 /*yield*/, task_model_1.Task.find({ boardId: id })];
            case 3:
                updateTasks = _a.sent();
                updateTasks.forEach(function (task) {
                    task.boardId = null;
                    task.save();
                });
                return [2 /*return*/, dbBoards];
        }
    });
}); };
exports.remove = remove;
//# sourceMappingURL=board.memory.repository.js.map