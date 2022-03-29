"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdapterPattern = void 0;
var adapter_1 = require("./adapter");
var AdapterPattern = /** @class */ (function () {
    function AdapterPattern() {
    }
    AdapterPattern.prototype.show = function () {
        var target = new adapter_1.ClassAdapter();
        target.request();
        var target1 = new adapter_1.ObjectAdapter(new adapter_1.Adaptee());
        target1.request();
    };
    return AdapterPattern;
}());
exports.AdapterPattern = AdapterPattern;
