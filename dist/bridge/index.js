"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BridgePattern = void 0;
var bridge_1 = require("./bridge");
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
