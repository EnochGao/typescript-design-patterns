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
exports.PrototypePattern = void 0;
var index_1 = require("../index");
var prototype_1 = require("./prototype");
var PrototypePattern = /** @class */ (function (_super) {
    __extends(PrototypePattern, _super);
    function PrototypePattern() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PrototypePattern.prototype.show = function () {
        var prototype = new prototype_1.RealizeType();
        var prototype1 = prototype.clone();
        console.log('prototype::', prototype);
        console.log('prototype1::', prototype1);
        console.log('prototype === prototype1::', prototype === prototype1);
    };
    return PrototypePattern;
}(index_1.Pattern));
exports.PrototypePattern = PrototypePattern;
