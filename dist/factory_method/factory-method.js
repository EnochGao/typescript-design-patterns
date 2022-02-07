"use strict";
// 工厂方法（Factory Method）: 定义一个用于创建对象的接口，让子类决定实例化哪个类。工厂方法使一个类的实例化延迟到其子类。
/*
   Product：抽象产品
   ConcreteProduct：具体产品
   Factory：抽象工厂
   ConcreteFactory：具体工厂
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteFactory = void 0;
var ConcreteProduct = /** @class */ (function () {
    function ConcreteProduct() {
    }
    ConcreteProduct.prototype.use = function () {
        console.log('product is used！');
    };
    return ConcreteProduct;
}());
var ConcreteFactory = /** @class */ (function () {
    function ConcreteFactory() {
    }
    ConcreteFactory.prototype.factoryMethod = function () {
        return new ConcreteProduct();
    };
    return ConcreteFactory;
}());
exports.ConcreteFactory = ConcreteFactory;
