"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterpreterPattern = void 0;
var interpreter_1 = require("./interpreter");
/**
 * 解释器模式
 */
var InterpreterPattern = /** @class */ (function () {
    function InterpreterPattern() {
    }
    InterpreterPattern.prototype.show = function () {
        var context = new interpreter_1.Context();
        context.freeRide('韶关的老人');
        context.freeRide('韶关的年轻人');
        context.freeRide('广州的妇女');
        context.freeRide('广州的儿童');
        context.freeRide('山东的儿童');
    };
    return InterpreterPattern;
}());
exports.InterpreterPattern = InterpreterPattern;
