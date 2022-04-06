"use strict";
// 造者模式(Builder Pattern)：将一个复杂对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表示。
/*
Builder：抽象建造者
ConcreteBuilder：具体建造者
Director：指挥者
Product：产品角色
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Director = exports.ConcreteBuilder = void 0;
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
var ConcreteBuilder = /** @class */ (function () {
    function ConcreteBuilder() {
        this.product = new Product();
    }
    ConcreteBuilder.prototype.buildPartA = function () {
        this.product.A = 'A';
    };
    ConcreteBuilder.prototype.buildPartB = function () {
        this.product.B = 'B';
    };
    ConcreteBuilder.prototype.getProduct = function () {
        return this.product;
    };
    return ConcreteBuilder;
}());
exports.ConcreteBuilder = ConcreteBuilder;
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.setBuilder = function (builder) {
        this.builder = builder;
    };
    Director.prototype.getProduct = function () {
        this.builder.buildPartA();
        this.builder.buildPartB();
        return this.builder.getProduct();
    };
    return Director;
}());
exports.Director = Director;
