"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryMethodPattern = void 0;
var factory_method_1 = require("./factory-method");
/**
 * 工厂方法
 */ var FactoryMethodPattern = /** @class */ (function () {
    function FactoryMethodPattern() {
    }
    FactoryMethodPattern.prototype.show = function () {
        var factory = new factory_method_1.ConcreteFactory();
        var product = factory.factoryMethod();
        product.use();
    };
    return FactoryMethodPattern;
}());
exports.FactoryMethodPattern = FactoryMethodPattern;
