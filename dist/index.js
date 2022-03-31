"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var index_1 = require("./abstract-factory/index");
var index_2 = require("./adapter/index");
var index_3 = require("./bridge/index");
var index_4 = require("./builder/index");
var chain_of_responsibility_1 = require("./chain of responsibility");
var command_1 = require("./command");
var composite_1 = require("./composite");
var decorator_1 = require("./decorator");
var facade_1 = require("./facade");
var index_5 = require("./factory_method/index");
var flyweight_1 = require("./flyweight");
var index_6 = require("./prototype/index");
var proxy_1 = require("./proxy");
var index_7 = require("./simple_factory/index");
var index_8 = require("./singleton/index");
var PatternShow = /** @class */ (function () {
    function PatternShow() {
    }
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
                    _this.show(new index_7.SimpleFactoryPattern());
                    break;
                case 7:
                    _this.show(new index_2.AdapterPattern());
                    break;
                case 8:
                    _this.show(new index_3.BridgePattern());
                    break;
                case 9:
                    _this.show(new composite_1.CompositePattern());
                    break;
                case 10:
                    _this.show(new decorator_1.DecoratorPattern());
                    break;
                case 11:
                    _this.show(new facade_1.FacadePattern());
                    break;
                case 12:
                    _this.show(new flyweight_1.FlyweightPattern());
                    break;
                case 13:
                    _this.show(new proxy_1.ProxyPattern());
                    break;
                case 14:
                    _this.show(new chain_of_responsibility_1.ChainOfResponsibilityPattern());
                    break;
                case 15:
                    _this.show(new command_1.CommandPattern());
                    break;
                default: break;
            }
            rl.close();
        });
    };
    PatternShow.prototype.show = function (pattern) {
        pattern.show();
    };
    PatternShow.prototype.printMenu = function () {
        var menu = "\n      = \u521B\u5EFA\u578B == \n\n      1: Singleton \n\n      2: Abstract factory \n\n      3: Factory method \n\n      4: Builder \n\n      5: Prototype \n\n      6: SimpleFactory \n\n\n      = \u7ED3\u6784\u578B == \n\n      7: Adapter \n\n      8: Bridge \n\n      9: Composite \n\n      10: Decorator \n\n      11: Facade \n\n      12: Flyweight \n\n      13: Proxy \n\n\n      = \u884C\u4E3A\u578B == \n\n      14: Chain of responsibility \n\n      15: Command \n\n      16: Interpreter \n\n      17: Iterator \n\n      18: Mediator \n\n      19: Memento \n\n      20: Observer \n\n      21: State \n\n      22: Strategy \n\n      23: Template method \n\n      24: Visitor \n\n    ";
        console.log("==== 选择一个demo实例运行 ====");
        console.log("\n");
        console.log(menu);
    };
    return PatternShow;
}());
new PatternShow().start();
