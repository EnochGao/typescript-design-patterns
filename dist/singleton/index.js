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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingletonPattern = void 0;
var index_1 = require("../index");
var singleton_1 = require("./singleton");
var SingletonPattern = /** @class */ (function (_super) {
    __extends(SingletonPattern, _super);
    function SingletonPattern() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SingletonPattern.prototype.show = function () {
        console.log('懒汉式：：', singleton_1.LazySingleton.getInstance() === singleton_1.LazySingleton.getInstance());
        console.log('饿汉式：：', singleton_1.HungrySingleton.getInstance() === singleton_1.HungrySingleton.getInstance());
    };
    return SingletonPattern;
}(index_1.Pattern));
exports.SingletonPattern = SingletonPattern;
