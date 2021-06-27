"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.checkJWT = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var http_status_codes_1 = require("http-status-codes");
var config_1 = require("./config");
function checkJWT(req, res, next) {
    if (req.url === '/login' || req.url === '/doc' || req.url === '/') {
        return next();
    }
    var authHeader = req.headers.authorization;
    if (authHeader) {
        var type = authHeader.split(' ')[0];
        var token = authHeader.split(' ')[1];
        if (token) {
            if (type !== 'Bearer' || !token) {
                return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).send('Wrong credentials');
            }
        }
        jsonwebtoken_1["default"].verify(token, String(config_1.JWT_SECRET_KEY));
        return next();
    }
    return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).send(http_status_codes_1.ReasonPhrases.UNAUTHORIZED);
}
exports.checkJWT = checkJWT;
//# sourceMappingURL=checkJWT.js.map