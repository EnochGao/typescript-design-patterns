"use strict";
// 简单工厂模式(Simple Factory Pattern)：又称为静态工厂方法(Static Factory Method)模式，它属于类创建型模式。
// 在简单工厂模式中，可以根据参数的不同返回不同类的实例。
// 简单工厂模式专门定义一个类来负责创建其他类的实例，被创建的实例通常都具有共同的父类。
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factory = void 0;
var ConcreteProductA = /** @class */ (function () {
    function ConcreteProductA() {
    }
    ConcreteProductA.prototype.use = function () {
        console.log('Product A is used');
    };
    return ConcreteProductA;
}());
var ConcreteProductB = /** @class */ (function () {
    function ConcreteProductB() {
    }
    ConcreteProductB.prototype.use = function () {
        console.log('Product B is used');
    };
    return ConcreteProductB;
}());
var Factory = /** @class */ (function () {
    function Factory() {
    }
    Factory.createProduct = function (name) {
        if (name === 'A') {
            return new ConcreteProductA();
        }
        if (name === 'B') {
            return new ConcreteProductB();
        }
    };
    ;
    return Factory;
}());
exports.Factory = Factory;
