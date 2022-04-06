"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObserverPattern = void 0;
var observer_1 = require("./observer");
/**
 * 观察者模式
 */
var ObserverPattern = /** @class */ (function () {
    function ObserverPattern() {
    }
    ObserverPattern.prototype.show = function () {
        var su = new observer_1.ConcreteSubject();
        var oba = new observer_1.ConcreteObserverA();
        var obb = new observer_1.ConcreteObserverB();
        su.add(oba);
        su.add(obb);
        su.notice();
    };
    return ObserverPattern;
}());
exports.ObserverPattern = ObserverPattern;
