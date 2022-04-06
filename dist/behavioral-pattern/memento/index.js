"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MementoPattern = void 0;
var memento_1 = require("./memento");
/**
 * 备忘录模式
 */
var MementoPattern = /** @class */ (function () {
    function MementoPattern() {
    }
    MementoPattern.prototype.show = function () {
        var or = new memento_1.Originator();
        var cr = new memento_1.Caretaker();
        or.setState('状态');
        console.log('初始状态：', or.getState());
        var me = or.createMemento();
        cr.setMemento(me);
        console.log('---设置新状态---');
        or.setState('状态111');
        console.log('当前状态：', or.getState());
        console.log('---状态恢复---');
        or.restoreMemento(cr.getMemento());
        console.log('当前状态：', or.getState());
    };
    return MementoPattern;
}());
exports.MementoPattern = MementoPattern;
