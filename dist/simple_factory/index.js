"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleFactoryPattern = void 0;
var simple_factory_1 = require("./simple-factory");
/**
 * 简单工厂
 */
var SimpleFactoryPattern = /** @class */ (function () {
    function SimpleFactoryPattern() {
    }
    SimpleFactoryPattern.prototype.show = function () {
        var productA = simple_factory_1.Factory.createProduct('A');
        var productB = simple_factory_1.Factory.createProduct('B');
        productA.use();
        productB.use();
    };
    return SimpleFactoryPattern;
}());
exports.SimpleFactoryPattern = SimpleFactoryPattern;
