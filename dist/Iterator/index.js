"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IteratorPattern = void 0;
var Iterator_1 = require("./Iterator");
/**
 * 迭代器模式
 */
var IteratorPattern = /** @class */ (function () {
    function IteratorPattern() {
    }
    IteratorPattern.prototype.show = function () {
        var c = new Iterator_1.ConcreteAggregate();
        c.add('中山大学');
        c.add('华南理工');
        c.add('韶关学院');
        console.log('聚合的内容有：');
        var i = c.getIterator();
        while (i.hasNext()) {
            console.log(i.next());
        }
        console.log('first', i.first());
    };
    return IteratorPattern;
}());
exports.IteratorPattern = IteratorPattern;
