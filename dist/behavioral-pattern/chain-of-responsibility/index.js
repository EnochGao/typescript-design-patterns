"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainOfResponsibilityPattern = void 0;
var chainOfResponsibility_1 = require("./chainOfResponsibility");
/**
 *  @description 责任链模式
 */
var ChainOfResponsibilityPattern = /** @class */ (function () {
    function ChainOfResponsibilityPattern() {
    }
    ChainOfResponsibilityPattern.prototype.show = function () {
        var h1 = new chainOfResponsibility_1.ConcreteHandle1();
        var h2 = new chainOfResponsibility_1.ConcreteHandle2();
        h1.setNext(h2);
        h1.handleRequest();
    };
    return ChainOfResponsibilityPattern;
}());
exports.ChainOfResponsibilityPattern = ChainOfResponsibilityPattern;
