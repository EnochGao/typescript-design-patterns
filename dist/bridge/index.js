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
exports.BridgePattern = void 0;
var index_1 = require("../index");
var bridge_1 = require("./bridge");
var BridgePattern = /** @class */ (function (_super) {
    __extends(BridgePattern, _super);
    function BridgePattern() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BridgePattern.prototype.show = function () {
        var implementorA = new bridge_1.ConcreteImplementorA();
        var refinedAbstraction = new bridge_1.RefinedAbstraction(implementorA);
        refinedAbstraction.operation();
    };
    return BridgePattern;
}(index_1.Pattern));
exports.BridgePattern = BridgePattern;
