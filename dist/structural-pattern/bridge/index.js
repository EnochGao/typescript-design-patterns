"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BridgePattern = void 0;
var bridge_1 = require("./bridge");
/**
 * 桥接模式
 */
var BridgePattern = /** @class */ (function () {
    function BridgePattern() {
    }
    BridgePattern.prototype.show = function () {
        var implementorA = new bridge_1.ConcreteImplementorA();
        var refinedAbstraction = new bridge_1.RefinedAbstraction(implementorA);
        refinedAbstraction.operation();
    };
    return BridgePattern;
}());
exports.BridgePattern = BridgePattern;
