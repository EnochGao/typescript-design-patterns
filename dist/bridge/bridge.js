"use strict";
// 将抽象与实现分离，使它们可以独立变化。它是用组合关系代替继承关系来实现，从而降低了抽象和实现这两个可变维度的耦合度。
/*
抽象化（Abstraction）角色：定义抽象类，并包含一个对实现化对象的引用。
扩展抽象化（Refined Abstraction）角色：是抽象化角色的子类，实现父类中的业务方法，并通过组合关系调用实现化角色中的业务方法。
实现化（Implementor）角色：定义实现化角色的接口，供扩展抽象化角色调用。
具体实现化（Concrete Implementor）角色：给出实现化角色接口的具体实现。
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
exports.RefinedAbstraction = exports.ConcreteImplementorA = exports.Abstraction = void 0;
var Abstraction = /** @class */ (function () {
    function Abstraction(implementor) {
        this.implementor = implementor;
    }
    return Abstraction;
}());
exports.Abstraction = Abstraction;
var ConcreteImplementorA = /** @class */ (function () {
    function ConcreteImplementorA() {
    }
    ConcreteImplementorA.prototype.operationImpl = function () {
        console.log('具体实现化(Concrete Implementor)角色被访问');
    };
    return ConcreteImplementorA;
}());
exports.ConcreteImplementorA = ConcreteImplementorA;
var RefinedAbstraction = /** @class */ (function (_super) {
    __extends(RefinedAbstraction, _super);
    function RefinedAbstraction(implementor) {
        return _super.call(this, implementor) || this;
    }
    RefinedAbstraction.prototype.operation = function () {
        console.log('扩展抽象化(Refined Abstraction)角色被访问');
        this.implementor.operationImpl();
    };
    return RefinedAbstraction;
}(Abstraction));
exports.RefinedAbstraction = RefinedAbstraction;
