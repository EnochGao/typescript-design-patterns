"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlyweightPattern = void 0;
var flyweight_1 = require("./flyweight");
var FlyweightPattern = /** @class */ (function () {
    function FlyweightPattern() {
    }
    FlyweightPattern.prototype.show = function () {
        var factory = new flyweight_1.FlyweightFactory();
        var fa1 = factory.getFlyWeight('a');
        var fa2 = factory.getFlyWeight('a');
        var fa3 = factory.getFlyWeight('a');
        var fb1 = factory.getFlyWeight('b');
        var fb2 = factory.getFlyWeight('b');
        fa1.operation(new flyweight_1.UnSharableFlyweight('第一次调用a'));
        fa2.operation(new flyweight_1.UnSharableFlyweight('第二次调用a'));
        fa3.operation(new flyweight_1.UnSharableFlyweight('第三次调用a'));
        fb1.operation(new flyweight_1.UnSharableFlyweight('第一次调用b'));
        fb2.operation(new flyweight_1.UnSharableFlyweight('第二次调用b'));
    };
    return FlyweightPattern;
}());
exports.FlyweightPattern = FlyweightPattern;
