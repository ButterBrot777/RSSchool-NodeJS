"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
exports.__esModule = true;
exports.AUTH_MODE = exports.NODE_ENV = exports.JWT_SECRET_KEY = exports.POSTGRES_HOST = exports.POSTGRES_DB = exports.POSTGRES_USER = exports.POSTGRES_PASSWORD = exports.POSTGRES_PORT = exports.PORT = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
var path_1 = __importDefault(require("path"));
dotenv_1["default"].config({
    path: path_1["default"].join(__dirname, '../../.env')
});
exports.PORT = (_a = process.env, _a.PORT), exports.POSTGRES_PORT = _a.POSTGRES_PORT, exports.POSTGRES_PASSWORD = _a.POSTGRES_PASSWORD, exports.POSTGRES_USER = _a.POSTGRES_USER, exports.POSTGRES_DB = _a.POSTGRES_DB, exports.POSTGRES_HOST = _a.POSTGRES_HOST, exports.JWT_SECRET_KEY = _a.JWT_SECRET_KEY;
exports.NODE_ENV = process.env.NODE_ENV;
var authMode = process.env.AUTH_MODE;
exports.AUTH_MODE = authMode === 'true';
//# sourceMappingURL=config.js.map