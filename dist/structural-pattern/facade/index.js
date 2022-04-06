"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacadePattern = void 0;
var facade_1 = require("./facade");
/**
 * 外观模式
 */
var FacadePattern = /** @class */ (function () {
    function FacadePattern() {
    }
    FacadePattern.prototype.show = function () {
        var facade = new facade_1.Facade();
        facade.wrapOperation();
    };
    return FacadePattern;
}());
exports.FacadePattern = FacadePattern;
