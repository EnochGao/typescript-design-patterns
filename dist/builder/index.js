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
exports.BuilderPattern = void 0;
var index_1 = require("../index");
var builder_1 = require("./builder");
var BuilderPattern = /** @class */ (function (_super) {
    __extends(BuilderPattern, _super);
    function BuilderPattern() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BuilderPattern.prototype.show = function () {
        var builder = new builder_1.ConcreteBuilder();
        var director = new builder_1.Director();
        director.setBuilder(builder);
        var product = director.getProduct();
        console.log('product::', product);
    };
    return BuilderPattern;
}(index_1.Pattern));
exports.BuilderPattern = BuilderPattern;
