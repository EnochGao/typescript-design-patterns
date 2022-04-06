"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediatorPattern = void 0;
var mediator_1 = require("./mediator");
/**
 * 中介者模式
 */
var MediatorPattern = /** @class */ (function () {
    function MediatorPattern() {
    }
    MediatorPattern.prototype.show = function () {
        var mediator = new mediator_1.ConcreteMediator();
        var ca = new mediator_1.ConcreteColleagueA();
        var cb = new mediator_1.ConcreteColleagueB();
        mediator.register(ca);
        mediator.register(cb);
        ca.send();
        console.log('*****************');
        cb.send();
    };
    return MediatorPattern;
}());
exports.MediatorPattern = MediatorPattern;
