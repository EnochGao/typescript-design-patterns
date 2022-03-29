"use strict";
/**
 * 装饰器（Decorator）模式的定义: 指在不改变现有对象结构的情况下，动态地给该对象增加一些职责（即增加其额外功能）的模式，它属于对象结构型模式。
 *
 * - 1.抽象构件（Component）角色：定义一个抽象接口以规范准备接收附加责任的对象。
 * - 2.具体构件（ConcreteComponent）角色：实现抽象构件，通过装饰角色为其添加一些职责。
 * - 3.抽象装饰（Decorator）角色：继承抽象构件，并包含具体构件的实例，可以通过其子类扩展具体构件的功能。
 * - 4.具体装饰（ConcreteDecorator）角色：实现抽象装饰的相关方法，并给具体构件对象添加附加的责任。
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteComponent = exports.ConcreteDecorator = exports.IDecorator = void 0;
// 抽象装饰角色
var IDecorator = /** @class */ (function () {
    function IDecorator(component) {
        this.component = component;
    }
    IDecorator.prototype.operation = function () {
        this.component.operation();
    };
    ;
    return IDecorator;
}());
exports.IDecorator = IDecorator;
//具体装饰角色
var ConcreteDecorator = /** @class */ (function (_super) {
    __extends(ConcreteDecorator, _super);
    function ConcreteDecorator(component) {
        return _super.call(this, component) || this;
    }
    ConcreteDecorator.prototype.operation = function () {
        _super.prototype.operation.call(this);
        this.addedFunction();
    };
    ConcreteDecorator.prototype.addedFunction = function () {
        console.log("为具体构件角色增加额外的功能addedFunction()");
    };
    return ConcreteDecorator;
}(IDecorator));
exports.ConcreteDecorator = ConcreteDecorator;
//具体构件角色
var ConcreteComponent = /** @class */ (function () {
    function ConcreteComponent() {
        console.log("创建具体构件角色");
    }
    ConcreteComponent.prototype.operation = function () {
        console.log("调用具体构件角色的方法operation()");
    };
    return ConcreteComponent;
}());
exports.ConcreteComponent = ConcreteComponent;
