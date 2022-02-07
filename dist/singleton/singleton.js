"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HungrySingleton = exports.LazySingleton = void 0;
// 单列模式（singleton）:保证一个类仅有一个实例，并提供一个访问它的全局访问点
// 懒汉式&饿汉式
var LazySingleton = /** @class */ (function () {
    function LazySingleton(name) {
        this.name = name;
    }
    LazySingleton.getInstance = function () {
        if (LazySingleton.instance === undefined) {
            LazySingleton.instance = new LazySingleton('懒汉式');
        }
        return LazySingleton.instance;
    };
    return LazySingleton;
}());
exports.LazySingleton = LazySingleton;
var HungrySingleton = /** @class */ (function () {
    function HungrySingleton(name) {
        this.name = name;
    }
    HungrySingleton.getInstance = function () {
        return HungrySingleton.instance;
    };
    HungrySingleton.instance = new HungrySingleton('饿汉式');
    return HungrySingleton;
}());
exports.HungrySingleton = HungrySingleton;
