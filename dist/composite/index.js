"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompositePattern = void 0;
var composite_1 = require("./composite");
var CompositePattern = /** @class */ (function () {
    function CompositePattern() {
    }
    CompositePattern.prototype.show = function () {
        var composite = new composite_1.Composite();
        var composite2 = new composite_1.Composite();
        var leaf = new composite_1.Leaf('leaf1');
        var leaf2 = new composite_1.Leaf('leaf2');
        var leaf3 = new composite_1.Leaf('leaf3');
        composite.add(leaf);
        composite.add(composite2);
        composite.add(leaf2);
        composite.add(leaf3);
        composite.operation();
    };
    return CompositePattern;
}());
exports.CompositePattern = CompositePattern;
