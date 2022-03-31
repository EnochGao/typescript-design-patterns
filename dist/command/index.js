"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandPattern = void 0;
var command_1 = require("./command");
/**
 * 命令模式
 */
var CommandPattern = /** @class */ (function () {
    function CommandPattern() {
    }
    CommandPattern.prototype.show = function () {
        var c = new command_1.ConcreteCommand();
        var invoker = new command_1.Invoker(c);
        invoker.call();
    };
    return CommandPattern;
}());
exports.CommandPattern = CommandPattern;
