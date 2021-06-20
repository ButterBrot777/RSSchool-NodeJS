"use strict";
exports.__esModule = true;
exports.config = void 0;
var user_model_1 = require("../resources/users/user.model");
var board_model_1 = require("../resources/boards/board.model");
var task_model_1 = require("../resources/tasks/task.model");
exports.config = {
    "type": 'postgres',
    "synchronize": true,
    "host": process.env['POSTGRES_HOST'],
    "port": 5432,
    "username": process.env['POSTGRES_USER'],
    "password": process.env['POSTGRES_USE'],
    "database": process.env['POSTGRES_DB'],
    "autoReconnect": true,
    "reconnectTries": Number.MAX_VALUE,
    "entities": [user_model_1.User, board_model_1.Board, task_model_1.Task],
    "reconnectionInterval": 1000
};
//# sourceMappingURL=ormconfig.js.map