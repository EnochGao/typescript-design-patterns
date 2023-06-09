"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractFactoryPattern = void 0;
var abstract_factory_1 = require("./abstract-factory");
/**
 * 抽象工厂
 */
var AbstractFactoryPattern = /** @class */ (function () {
    function AbstractFactoryPattern() {
    }
    AbstractFactoryPattern.prototype.show = function () {
        var factory = new abstract_factory_1.ConcreteFactory();
        var productA = factory.createProductA();
        var productB = factory.createProductB();
        productA.use();
        productB.eat();
    };
    return AbstractFactoryPattern;
}());
exports.AbstractFactoryPattern = AbstractFactoryPattern;
