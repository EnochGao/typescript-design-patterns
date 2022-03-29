"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrototypePattern = void 0;
var prototype_1 = require("./prototype");
var PrototypePattern = /** @class */ (function () {
    function PrototypePattern() {
    }
    PrototypePattern.prototype.show = function () {
        var prototype = new prototype_1.RealizeType();
        var prototype1 = prototype.clone();
        console.log('prototype::', prototype);
        console.log('prototype1::', prototype1);
        console.log('prototype === prototype1::', prototype === prototype1);
    };
    return PrototypePattern;
}());
exports.PrototypePattern = PrototypePattern;
