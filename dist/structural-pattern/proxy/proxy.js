"use strict";
// 代理模式的结构比较简单，主要是通过定义一个继承抽象主题的代理来包含真实主题，从而实现对真实主题的访问，下面来分析其基本结构和实现方法
/*
1、抽象主题（Subject）类：通过接口或抽象类声明真实主题和代理对象实现的业务方法。
2、真实主题（Real Subject）类：实现了抽象主题中的具体业务，是代理对象所代表的真实对象，是最终要引用的对象。
3、代理（Proxy）类：提供了与真实主题相同的接口，其内部含有对真实主题的引用，它可以访问、控制或扩展真实主题的功能。
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proxy = exports.RealSubject = void 0;
var RealSubject = /** @class */ (function () {
    function RealSubject() {
    }
    RealSubject.prototype.request = function () {
        console.log('真实访问类');
    };
    return RealSubject;
}());
exports.RealSubject = RealSubject;
var Proxy = /** @class */ (function () {
    function Proxy() {
        this.realSubject = new RealSubject();
    }
    Proxy.prototype.request = function () {
        this.preQuest();
        this.realSubject.request();
    };
    Proxy.prototype.preQuest = function () {
        console.log('访问前做一些操作...');
    };
    return Proxy;
}());
exports.Proxy = Proxy;
