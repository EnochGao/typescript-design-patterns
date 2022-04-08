"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var index_1 = require("./simple-factory/index");
var index_2 = require("./creational-pattern/builder/index");
var index_3 = require("./creational-pattern/prototype/index");
var index_4 = require("./creational-pattern/singleton/index");
var index_5 = require("./creational-pattern/factory_method/index");
var index_6 = require("./creational-pattern/abstract-factory/index");
var index_7 = require("./structural-pattern/adapter/index");
var index_8 = require("./structural-pattern/bridge/index");
var composite_1 = require("./structural-pattern/composite");
var decorator_1 = require("./structural-pattern/decorator");
var flyweight_1 = require("./structural-pattern/flyweight");
var facade_1 = require("./structural-pattern/facade");
var proxy_1 = require("./structural-pattern/proxy");
var Iterator_1 = require("./behavioral-pattern/Iterator");
var mediator_1 = require("./behavioral-pattern/mediator");
var command_1 = require("./behavioral-pattern/command");
var interpreter_1 = require("./behavioral-pattern/interpreter");
var chain_of_responsibility_1 = require("./behavioral-pattern/chain-of-responsibility");
var memento_1 = require("./behavioral-pattern/memento");
var observer_1 = require("./behavioral-pattern/observer");
var state_1 = require("./behavioral-pattern/state");
var strategy_1 = require("./behavioral-pattern/strategy");
var template_method_1 = require("./behavioral-pattern/template-method");
var visitor_1 = require("./behavioral-pattern/visitor");
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
                    _this.show(new index_4.SingletonPattern());
                    break;
                case 2:
                    _this.show(new index_6.AbstractFactoryPattern());
                    break;
                case 3:
                    _this.show(new index_5.FactoryMethodPattern());
                    break;
                case 4:
                    _this.show(new index_2.BuilderPattern());
                    break;
                case 5:
                    _this.show(new index_3.PrototypePattern());
                    break;
                case 6:
                    _this.show(new index_1.SimpleFactoryPattern());
                    break;
                case 7:
                    _this.show(new index_7.AdapterPattern());
                    break;
                case 8:
                    _this.show(new index_8.BridgePattern());
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
                case 16:
                    _this.show(new interpreter_1.InterpreterPattern());
                    break;
                case 17:
                    _this.show(new Iterator_1.IteratorPattern());
                    break;
                case 18:
                    _this.show(new mediator_1.MediatorPattern());
                    break;
                case 19:
                    _this.show(new memento_1.MementoPattern());
                    break;
                case 20:
                    _this.show(new observer_1.ObserverPattern());
                    break;
                case 21:
                    _this.show(new state_1.StatePattern());
                    break;
                case 22:
                    _this.show(new strategy_1.StrategyPattern());
                    break;
                case 23:
                    _this.show(new template_method_1.TemplateMethodPattern());
                    break;
                case 24:
                    _this.show(new visitor_1.VisitorPattern());
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
