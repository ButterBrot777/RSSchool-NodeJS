"use strict";
exports.__esModule = true;
exports.config = void 0;
var user_model_1 = require("../resources/users/user.model");
var board_model_1 = require("../resources/boards/board.model");
var task_model_1 = require("../resources/tasks/task.model");
var config_1 = require("./config");
exports.config = {
    "type": 'postgres',
    "synchronize": true,
    "host": config_1.POSTGRES_HOST,
    "port": config_1.POSTGRES_PORT,
    "username": config_1.POSTGRES_USER,
    "password": config_1.POSTGRES_PASSWORD,
    "database": config_1.POSTGRES_DB,
    "autoReconnect": true,
    "reconnectTries": Number.MAX_VALUE,
    "entities": [user_model_1.User, board_model_1.Board, task_model_1.Task],
    "reconnectionInterval": 1000
};
//# sourceMappingURL=ormconfig.js.map