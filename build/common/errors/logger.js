"use strict";
exports.__esModule = true;
exports.logProcessErrors = exports.logError = exports.logInfo = exports.logger = void 0;
var winston_1 = require("winston");
var path = require('path');
exports.logger = winston_1.createLogger({
    level: 'silly',
    transports: [
        new winston_1.transports.Console(),
        new winston_1.transports.File({
            filename: path.join(__dirname, '../../../logs/error.log'),
            level: 'error',
            format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.json())
        }),
        new winston_1.transports.File({
            filename: path.join(__dirname, '../../../logs/info.log'),
            level: 'info',
            format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.json())
        })
    ]
});
var logInfo = function (req, _res, next) {
    exports.logger.info("Url: " + req.url + ", Params: " + JSON.stringify(req.params) + ", Body: " + JSON.stringify(req.body));
    next();
};
exports.logInfo = logInfo;
var logError = function (err, _req, _res, next) {
    exports.logger.error("ERROR: " + (err.code || 500) + " " + (err.message || 'Internal Server Error') + ", \n    Details: " + err.stack);
    next(err);
};
exports.logError = logError;
var logProcessErrors = function (message, err) {
    exports.logger.error("Error: " + (err.code || 500) + " " + message);
};
exports.logProcessErrors = logProcessErrors;
//# sourceMappingURL=logger.js.map