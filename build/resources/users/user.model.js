"use strict";
/**
 * User model
 * @module user/model
 */
exports.__esModule = true;
exports.User = void 0;
var uuidv4 = require('uuid').v4;
/**
 * @type {User}
 * @param {data} data object with user  data
 * @param {String} id user id
 * @param {String} name user name
 * @param {String} login user login
 * @param {String} password user password
 */
var User = /** @class */ (function () {
    function User(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.id, id = _c === void 0 ? uuidv4() : _c, _d = _b.name, name = _d === void 0 ? 'USER' : _d, _e = _b.login, login = _e === void 0 ? 'user' : _e, _f = _b.password, password = _f === void 0 ? 'P@55w0rd' : _f;
        this.id = id;
        this.name = name;
        this.login = login;
        this.password = password;
    }
    /**
     * Create user instance like object exclude password
     * @param {User} user user instance
     * @returns {Object} object exclude password field
     */
    User.toResponse = function (user) {
        var _a = user, id = _a.id, name = _a.name, login = _a.login;
        return { id: id, name: name, login: login };
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.model.js.map