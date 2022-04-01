"use strict";
/**
 * 迭代器（Iterator）模式的定义：提供一个对象来顺序访问聚合对象中的一系列数据，而不暴露聚合对象的内部表示。迭代器模式是一种对象行为型模式，其主要优点如下。
 *
 * - 1.抽象聚合（Aggregate）角色：定义存储、添加、删除聚合对象以及创建迭代器对象的接口。
 * - 2.具体聚合（ConcreteAggregate）角色：实现抽象聚合类，返回一个具体迭代器的实例。
 * - 3.抽象迭代器（Iterator）角色：定义访问和遍历聚合元素的接口，通常包含 hasNext()、first()、next() 等方法。
 * - 4.具体迭代器（ConcreteIterator）角色：实现抽象迭代器接口中所定义的方法，完成对聚合对象的遍历，记录遍历的当前位置。
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteAggregate = void 0;
// 具体聚合（ConcreteAggregate）角色
var ConcreteAggregate = /** @class */ (function () {
    function ConcreteAggregate() {
        this.list = [];
    }
    ConcreteAggregate.prototype.add = function (obj) {
        this.list.push(obj);
    };
    ConcreteAggregate.prototype.remove = function (obj) {
        this.list = this.list.filter(function (i) { return i !== obj; });
    };
    ConcreteAggregate.prototype.getIterator = function () {
        return new ConcreteIterator(this.list);
    };
    return ConcreteAggregate;
}());
exports.ConcreteAggregate = ConcreteAggregate;
// 具体迭代器（ConcreteIterator）角色
var ConcreteIterator = /** @class */ (function () {
    function ConcreteIterator(list) {
        if (list === void 0) { list = []; }
        this.list = list;
        this.index = -1;
    }
    ConcreteIterator.prototype.first = function () {
        if (this.list && this.list.length > 0) {
            return this.list[0];
        }
    };
    ConcreteIterator.prototype.next = function () {
        var obj = null;
        if (this.hasNext()) {
            obj = this.list[++this.index];
        }
        return obj;
    };
    ConcreteIterator.prototype.hasNext = function () {
        if (this.index < this.list.length - 1) {
            return true;
        }
        return false;
    };
    return ConcreteIterator;
}());
