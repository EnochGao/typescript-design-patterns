"use strict";
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
exports.FactoryMethodPattern = void 0;
var index_1 = require("../index");
var factory_method_1 = require("./factory-method");
var FactoryMethodPattern = /** @class */ (function (_super) {
    __extends(FactoryMethodPattern, _super);
    function FactoryMethodPattern() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FactoryMethodPattern.prototype.show = function () {
        var factory = new factory_method_1.ConcreteFactory();
        var product = factory.factoryMethod();
        product.use();
    };
    return FactoryMethodPattern;
}(index_1.Pattern));
exports.FactoryMethodPattern = FactoryMethodPattern;
