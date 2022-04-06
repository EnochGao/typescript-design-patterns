"use strict";
// 将一个类的接口转换成客户希望的另外一个接口。Adapter模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作
/**
 * 目标（Target）接口：当前系统业务所期待的接口，它可以是抽象类或接口。
   适配者（Adaptee）类：它是被访问和适配的现存组件库中的组件接口。
   适配器（Adapter）类：它是一个转换器，通过继承或引用适配者的对象，把适配者接口转换成目标接口，让客户按目标接口的格式访问适配者。
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
exports.ObjectAdapter = exports.ClassAdapter = exports.Adaptee = void 0;
var Adaptee = /** @class */ (function () {
    function Adaptee() {
    }
    Adaptee.prototype.specificRequest = function () {
        console.log('specificRequest');
    };
    ;
    return Adaptee;
}());
exports.Adaptee = Adaptee;
// 类适配器
var ClassAdapter = /** @class */ (function (_super) {
    __extends(ClassAdapter, _super);
    function ClassAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassAdapter.prototype.request = function () {
        this.specificRequest();
    };
    return ClassAdapter;
}(Adaptee));
exports.ClassAdapter = ClassAdapter;
// 对象适配器
var ObjectAdapter = /** @class */ (function () {
    function ObjectAdapter(adaptee) {
        this.adaptee = adaptee;
    }
    ObjectAdapter.prototype.request = function () {
        this.adaptee.specificRequest();
    };
    return ObjectAdapter;
}());
exports.ObjectAdapter = ObjectAdapter;
