"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingletonPattern = void 0;
var singleton_1 = require("./singleton");
/**
 * @description 单例模式
 */
var SingletonPattern = /** @class */ (function () {
    function SingletonPattern() {
    }
    SingletonPattern.prototype.show = function () {
        console.log('懒汉式：：', singleton_1.LazySingleton.getInstance() === singleton_1.LazySingleton.getInstance());
        console.log('饿汉式：：', singleton_1.HungrySingleton.getInstance() === singleton_1.HungrySingleton.getInstance());
    };
    return SingletonPattern;
}());
exports.SingletonPattern = SingletonPattern;
