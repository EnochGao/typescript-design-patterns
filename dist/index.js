"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var index_1 = require("./abstract-factory/index");
var index_2 = require("./adapter/index");
var index_3 = require("./bridge/index");
var index_4 = require("./builder/index");
var index_5 = require("./factory_method/index");
var index_6 = require("./prototype/index");
var index_7 = require("./simple_factory/index");
var index_8 = require("./singleton/index");
var PatternShow = /** @class */ (function () {
    function PatternShow() {
    }
    PatternShow.prototype.printMenu = function () {
        var menu = "\n      = \u521B\u5EFA\u578B == \n\n      1: Singleton \n\n      2: Abstract factory \n\n      3: Factory method \n\n      4: Builder \n\n      5: Prototype \n\n\n      = \u7ED3\u6784\u578B == \n\n      6: Adapter \n\n      7: Bridge \n\n      8: Composite \n\n      9: Decorator \n\n      10: Facade \n\n      11: Flyweight \n\n      12: Proxy \n\n\n      = \u884C\u4E3A\u578B == \n\n      13: Chain of responsibility \n\n      14: Command \n\n      15: Interpreter \n\n      16: Iterator \n\n      17: Mediator \n\n      18: Memento \n\n      19: Observer \n\n      20: State \n\n      21: Strategy \n\n      22: Template method \n\n      23: Visitor \n\n      24: SimpleFactory \n\n    ";
        console.log("==== 选择一个demo实例运行 ====");
        console.log("\n");
        console.log(menu);
    };
    PatternShow.prototype.start = function () {
        var _this = this;
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.printMenu();
        rl.question("请选择：", function (answer) {
            switch (+answer) {
                case 1:
                    _this.show(new index_8.SingletonPattern());
                    break;
                case 2:
                    _this.show(new index_1.AbstractFactoryPattern());
                    break;
                case 3:
                    _this.show(new index_5.FactoryMethodPattern());
                    break;
                case 4:
                    _this.show(new index_4.BuilderPattern());
                    break;
                case 5:
                    _this.show(new index_6.PrototypePattern());
                    break;
                case 6:
                    _this.show(new index_2.AdapterPattern());
                    break;
                case 7:
                    _this.show(new index_3.BridgePattern());
                    break;
                case 24:
                    _this.show(new index_7.SimpleFactoryPattern());
                    break;
                default: break;
            }
            // rl.close();
        });
    };
    PatternShow.prototype.show = function (pattern) {
        pattern.show();
    };
    return PatternShow;
}());
new PatternShow().start();
