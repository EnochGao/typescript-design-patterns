"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteFactory = exports.ProductB = exports.ProductA = void 0;
var ProductA = /** @class */ (function () {
    function ProductA() {
    }
    ProductA.prototype.use = function () {
        console.log('ProductA is used!');
    };
    return ProductA;
}());
exports.ProductA = ProductA;
var ProductB = /** @class */ (function () {
    function ProductB() {
    }
    ProductB.prototype.eat = function () {
        console.log('ProductB is eaten!');
    };
    return ProductB;
}());
exports.ProductB = ProductB;
var ConcreteFactory = /** @class */ (function () {
    function ConcreteFactory() {
    }
    ConcreteFactory.prototype.createProductA = function () {
        return new ProductA();
    };
    ConcreteFactory.prototype.createProductB = function () {
        return new ProductB();
    };
    return ConcreteFactory;
}());
exports.ConcreteFactory = ConcreteFactory;
