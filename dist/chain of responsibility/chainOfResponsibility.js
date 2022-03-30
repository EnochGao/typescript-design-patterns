"use strict";
// 责任链（Chain of Responsibility）模式的定义：为了避免请求发送者与多个请求处理者耦合在一起，
// 于是将所有请求的处理者通过前一对象记住其下一个对象的引用而连成一条链；当有请求发生时，可将请求沿着这条链传递，直到有对象处理它为止。
/*
1、抽象处理者（Handler）角色：定义一个处理请求的接口，包含抽象处理方法和一个后继连接。
2、具体处理者（Concrete Handler）角色：实现抽象处理者的处理方法，判断能否处理本次请求，如果可以处理请求则处理，否则将该请求转给它的后继者。
3、客户类（Client）角色：创建处理链，并向链头的具体处理者对象提交请求，它不关心处理细节和请求的传递过程。
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
exports.ConcreteHandle2 = exports.ConcreteHandle1 = exports.Handler = void 0;
// 抽象处理者（Handler）角色
var Handler = /** @class */ (function () {
    function Handler() {
    }
    Handler.prototype.setNest = function (nest) {
        this.nest = nest;
    };
    Handler.prototype.getNest = function () {
        return this.nest;
    };
    return Handler;
}());
exports.Handler = Handler;
// 具体处理者（Concrete Handler）角色
var ConcreteHandle1 = /** @class */ (function (_super) {
    __extends(ConcreteHandle1, _super);
    function ConcreteHandle1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteHandle1.prototype.handleRequest = function () {
        console.log('具体处理1');
        var nest = this.getNest();
        if (nest) {
            nest.handleRequest();
        }
        else {
            console.log('处理完成');
        }
    };
    return ConcreteHandle1;
}(Handler));
exports.ConcreteHandle1 = ConcreteHandle1;
// 具体处理者（Concrete Handler）角色
var ConcreteHandle2 = /** @class */ (function (_super) {
    __extends(ConcreteHandle2, _super);
    function ConcreteHandle2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteHandle2.prototype.handleRequest = function () {
        console.log('具体处理2');
        var nest = this.getNest();
        if (nest) {
            nest.handleRequest();
        }
        else {
            console.log('处理完成');
        }
    };
    return ConcreteHandle2;
}(Handler));
exports.ConcreteHandle2 = ConcreteHandle2;
