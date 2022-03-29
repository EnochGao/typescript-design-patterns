"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuilderPattern = void 0;
var builder_1 = require("./builder");
var BuilderPattern = /** @class */ (function () {
    function BuilderPattern() {
    }
    BuilderPattern.prototype.show = function () {
        var builder = new builder_1.ConcreteBuilder();
        var director = new builder_1.Director();
        director.setBuilder(builder);
        var product = director.getProduct();
        console.log('product::', product);
    };
    return BuilderPattern;
}());
exports.BuilderPattern = BuilderPattern;
