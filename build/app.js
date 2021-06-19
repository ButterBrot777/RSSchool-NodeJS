"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var path_1 = __importDefault(require("path"));
var yamljs_1 = __importDefault(require("yamljs"));
var user_router_1 = require("./resources/users/user.router");
var board_router_1 = require("./resources/boards/board.router");
var task_router_1 = require("./resources/tasks/task.router");
var logger_1 = require("./common/errors/logger");
var app = express_1["default"]();
exports.app = app;
var swaggerDocument = yamljs_1["default"].load(path_1["default"].join(__dirname, '../doc/api.yaml'));
app.use(express_1["default"].json());
app.use(logger_1.logInfo);
app.use('/doc', swagger_ui_express_1["default"].serve, swagger_ui_express_1["default"].setup(swaggerDocument));
app.use('/', function (req, res, next) {
    if (req.originalUrl === '/') {
        res.send('Service is running!');
        return;
    }
    next();
});
app.use('/users', user_router_1.router);
app.use('/boards', board_router_1.router, task_router_1.router);
app.use(logger_1.logError);
process.on('uncaughtException', logger_1.logProcessErrors);
// throw Error('Oops!');
process.on('unhandledRejection', logger_1.logProcessErrors);
//# sourceMappingURL=app.js.map