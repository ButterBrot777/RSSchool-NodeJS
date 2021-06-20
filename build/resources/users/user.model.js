"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.__esModule = true;
exports.User = void 0;
/**
 * User model
 * @module user/model
 */
var typeorm_1 = require("typeorm");
var uuidv4 = require('uuid').v4;
/**
 * @type {User}
 * @param {data} data object with user  data
 * @param {String} id user id
 * @param {String} name user name
 * @param {String} login user login
 * @param {String} password user password
 */
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.id, id = _c === void 0 ? uuidv4() : _c, _d = _b.name, name = _d === void 0 ? 'USER' : _d, _e = _b.login, login = _e === void 0 ? 'user' : _e, _f = _b.password, password = _f === void 0 ? 'P@55w0rd' : _f;
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.login = login;
        _this.password = password;
        return _this;
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
    __decorate([
        typeorm_1.PrimaryColumn('varchar', { length: 100 }),
        __metadata("design:type", String)
    ], User.prototype, "id");
    __decorate([
        typeorm_1.Column('varchar', { length: 100 }),
        __metadata("design:type", String)
    ], User.prototype, "name");
    __decorate([
        typeorm_1.Column('varchar', { length: 100 }),
        __metadata("design:type", String)
    ], User.prototype, "login");
    __decorate([
        typeorm_1.Column('varchar', { length: 100 }),
        __metadata("design:type", String)
    ], User.prototype, "password");
    User = __decorate([
        typeorm_1.Entity({ name: 'User' }),
        __metadata("design:paramtypes", [Object])
    ], User);
    return User;
}(typeorm_1.BaseEntity));
exports.User = User;
//# sourceMappingURL=user.model.js.map