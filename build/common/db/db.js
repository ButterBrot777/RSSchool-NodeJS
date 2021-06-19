"use strict";
/**
 * Database
 * @module common/DB
 */
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
exports.removeTask = exports.updateTask = exports.createTask = exports.getTaskByID = exports.getAllTasks = exports.removeBoard = exports.updateBoard = exports.createBoard = exports.getBoardByID = exports.getAllBoards = exports.removeUser = exports.updateUser = exports.createUser = exports.getUserByID = exports.getAllUsers = void 0;
/**
 * User instance
 * @typedef {Object} User
 * @ignore
 * @property {String} id user id
 * @property {String} name user name
 * @property {String} login user login
 * @property {String} password user password
  */
var user_model_1 = require("../../resources/users/user.model");
/**
 * Board instance
 * @typedef {Object} Board
 * @ignore
 * @property {String} id board id
 * @property {String} title board title
 * @property {Array<Column>} columns some array of Column instances
 */
var board_model_1 = require("../../resources/boards/board.model");
/**
 * Task instance
 * @typedef {Object} Task
 * @ignore
 * @property {String} id task id
 * @property {String} title task title
 * @property {String} description task description
 * @property {String} userId id of user
 * @property {String} boardId id of board
 * @property {String} columnId id of column
 * @property {String} order some order
 */
var task_model_1 = require("../../resources/tasks/task.model");
var uuidv4 = require('uuid').v4;
/**
 * Database as an object
 * @type {Object}
 * @property {Array<User>} array of Users
 * @property {Array<Board>} array of Boards
 * @property {Array<Task>} array of Tasks
  */
var Db = {
    users: [],
    boards: [],
    tasks: []
};
/* #region create db with empty instances */
Db.users.push(new user_model_1.User(), new user_model_1.User(), new user_model_1.User());
var customBoard = new board_model_1.Board();
Db.boards.push(customBoard);
Db.tasks.push(new task_model_1.Task({ boardId: (customBoard.id = uuidv4()) }), new task_model_1.Task({ boardId: (customBoard.id = uuidv4()) }), new task_model_1.Task({ boardId: (customBoard.id = uuidv4()) }));
/* #endregion */
/**
 * To remove all tasks belongs to concrete user
 * @param {String} userId user id
 */
function removeUserTasks(userId) {
    Db.tasks.forEach(function (task, index) {
        if (task.userId === userId) {
            Db.tasks[index] = __assign(__assign({}, task), { userId: null });
        }
    });
}
/**
 * To remove all tasks on concrete board
 * @param {String} boardId board id
 */
function removeBoardTasks(boardId) {
    var newTasks = Db.tasks.filter(function (task) { return task.boardId !== boardId; });
    Db.tasks = newTasks;
}
// actions for users
/**
 * To get all users
 * @returns {Promise<Array<User>>} promise (array) of users
 * {@link module:user/repository}
 */
var getAllUsers = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, Db.users.slice(0)];
}); }); };
exports.getAllUsers = getAllUsers;
/**
 * To get simple user by his id
 * @param {String} id user id
 * @returns {Promise<User>} promise, one simple user
 * {@link module:user/repository}
 */
var getUserByID = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, Db.users.filter(function (user) { return user.id === id; })[0]];
}); }); };
exports.getUserByID = getUserByID;
/**
 * To create a user instance
 * @param {User} user user instance
 * @returns {Promise<User>} promise, one user
 * {@link module:user/repository}
 */
var createUser = function (user) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        Db.users.push(user);
        return [2 /*return*/, getUserByID(user.id)];
    });
}); };
exports.createUser = createUser;
/**
 * To update some user data
 * @param {User} dbUser user instance
 * @param {Object} body data object
 * @returns {Promise<User>} promise, one user
 * {@link module:user/repository}
 */
var updateUser = function (dbUser, body) { return __awaiter(void 0, void 0, void 0, function () {
    var userIndex;
    return __generator(this, function (_a) {
        userIndex = Db.users.findIndex(function (user) { return user.id === dbUser.id; });
        Db.users[userIndex].name = body.name;
        Db.users[userIndex].login = body.login;
        Db.users[userIndex].password = body.password;
        return [2 /*return*/, Db.users[userIndex]];
    });
}); };
exports.updateUser = updateUser;
/**
 *
 * @param user
 * @returns {Promise<void>}
 */
/**
 * To delete some user
 * @param {User} user instance
 * @returns {Promise<void>} promise, one user
 * {@link module:user/repository}
 */
var removeUser = function (user) { return __awaiter(void 0, void 0, void 0, function () {
    var userIndex, lastUser;
    return __generator(this, function (_a) {
        userIndex = Db.users.findIndex(function (userUnit) { return userUnit.id === user.id; });
        lastUser = Db.users.pop();
        if (Db.users.length > 0 && lastUser !== user) {
            Db.users[userIndex] = lastUser;
        }
        removeUserTasks(user.id);
        return [2 /*return*/];
    });
}); };
exports.removeUser = removeUser;
// action for boards
/**
 * To get all boards
 * @returns {Promise<Array<Board>>} promise (array) of boards
 * {@link module:board/repository}
 */
var getAllBoards = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, Db.boards.slice(0)];
}); }); };
exports.getAllBoards = getAllBoards;
/**
 * To get simple board by his id
 * @param {String} id user id
 * @returns {Promise<Board>} promise, one simple board
 * {@link module:board/repository}
 */
var getBoardByID = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, Db.boards.filter(function (board) { return board.id === id; })[0]];
}); }); };
exports.getBoardByID = getBoardByID;
/**
 * To create a board instance
 * @param {User} board board instance
 * @returns {Promise<User>} promise, one board
 * {@link module:board/repository}
 */
var createBoard = function (board) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        Db.boards.push(board);
        return [2 /*return*/, getBoardByID(board.id)];
    });
}); };
exports.createBoard = createBoard;
/**
 * To update some board data
 * @param {String} dbBoard board id
 * @param {Object} body data object
 * @returns {Promise<Board>} promise, one board
 * {@link module:board/repository}
 */
var updateBoard = function (dbBoard, body) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, Object.assign(dbBoard, __assign({}, body))
        // const boardIndex: number = Db.boards.findIndex(board => board.id === dbBoard.id);
        // Db.boards[boardIndex]!.title = body.title
        //   ? body.title
        //   : Db.boards[dbBoard.id].title!;
        // Db.boards[boardIndex]!.columns = body.columns
        //   ? body.columns
        //   : Db.boards[dbBoard.id].columns;
        //
        // return Db.boards[boardIndex];
    ];
}); }); };
exports.updateBoard = updateBoard;
/**
 * To delete some board
 * @param {Board} board instance
 * @returns {Promise<void>} promise, one board
 * {@link module:board/repository}
 */
var removeBoard = function (board) { return __awaiter(void 0, void 0, void 0, function () {
    var boardIndex, lastBoard;
    return __generator(this, function (_a) {
        boardIndex = Db.boards.findIndex(function (boardElem) { return boardElem.id === board.id; });
        lastBoard = Db.boards.pop();
        if (Db.boards.length > 0 && lastBoard !== board) {
            Db.boards[boardIndex] = lastBoard;
        }
        removeBoardTasks(board.id);
        return [2 /*return*/];
    });
}); };
exports.removeBoard = removeBoard;
// actions for tasks
/**
 * To get all tasks on concrete board
 * @param {String} boardId board id
 * @returns {Array<Task>} array of tasks on concrete board
 * {@link module:task/repository}
 */
var getAllTasks = function (boardId) { return Db.tasks.filter(function (task) { return task.boardId === boardId; }); };
exports.getAllTasks = getAllTasks;
/**
 * To get one task by his id
 * @param {String} id task id
 * @returns {Promise<Task>} promise, one task
 * {@link module:task/repository}
 */
var getTaskByID = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, Db.tasks.filter(function (task) { return task.id === id; })[0]];
}); }); };
exports.getTaskByID = getTaskByID;
/**
 * To create a new task
 * @param {String} boardId board id
 * @param {Object} body some object
 * @returns {Task} one task
 * {@link module:task/repository}
 */
var createTask = function (boardId, body) {
    var id = uuidv4();
    var newTask = new task_model_1.Task(__assign(__assign({}, body), { id: id, boardId: boardId }));
    Db.tasks.push(newTask);
    return Db.tasks.filter(function (task) { return task.id === id; })[0];
};
exports.createTask = createTask;
/**
 * Forwards new props to be applied to task on board
 * @param {String} taskId task id
 * @param {Object} body some object
 * @returns {Promise<Task>}
 * {@link module:task/repository}
 */
var updateTask = function (taskId, body) { return __awaiter(void 0, void 0, void 0, function () {
    var taskIndex;
    return __generator(this, function (_a) {
        taskIndex = Db.tasks.findIndex(function (task) { return task.id === taskId; });
        Db.tasks[taskIndex] = __assign(__assign({}, body), { id: taskId });
        return [2 /*return*/, Db.tasks[taskIndex]];
    });
}); };
exports.updateTask = updateTask;
/**
 * To delete task
 * @param id task id
 * @returns {Array<Task>} array of tasks
 * {@link module:task/repository}
 */
var removeTask = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var taskIndex;
    return __generator(this, function (_a) {
        taskIndex = Db.tasks.findIndex(function (taskElem) { return taskElem.id === id; });
        return [2 /*return*/, Db.tasks.splice(taskIndex, 1)];
    });
}); };
exports.removeTask = removeTask;
//# sourceMappingURL=db.js.map