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
exports.AdapterPattern = void 0;
var index_1 = require("../index");
var adapter_1 = require("./adapter");
var AdapterPattern = /** @class */ (function (_super) {
    __extends(AdapterPattern, _super);
    function AdapterPattern() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdapterPattern.prototype.show = function () {
        var target = new adapter_1.ClassAdapter();
        target.request();
        var target1 = new adapter_1.ObjectAdapter(new adapter_1.Adaptee());
        target1.request();
    };
    return AdapterPattern;
}(index_1.Pattern));
exports.AdapterPattern = AdapterPattern;
