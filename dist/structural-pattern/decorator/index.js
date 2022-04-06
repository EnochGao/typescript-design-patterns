"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecoratorPattern = void 0;
var decorator_1 = require("./decorator");
/**
 * 装饰器模式
 */
var DecoratorPattern = /** @class */ (function () {
    function DecoratorPattern() {
    }
    DecoratorPattern.prototype.show = function () {
        var c = new decorator_1.ConcreteComponent();
        var d = new decorator_1.ConcreteDecorator(c);
        d.operation();
    };
    return DecoratorPattern;
}());
exports.DecoratorPattern = DecoratorPattern;
