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
        var menu = "= Creational Patterns == \n" +
            "  1: Singleton \n" +
            "  2: Abstract factory \n" +
            "  3: Factory method \n" +
            "  4: Builder \n" +
            "  5: Prototype \n\n" +
            "= Structural Patterns == \n" +
            "  6: Adapter \n" +
            "  7: Bridge \n" +
            "  8: Composite \n" +
            "  9: Decorator \n" +
            " 10: Facade \n" +
            " 11: Flyweight \n" +
            " 12: Proxy \n\n" +
            "= Behavioral Patterns == \n" +
            " 13: Chain of responsibility \n" +
            " 14: Command \n" +
            " 15: Interpreter \n" +
            " 16: Iterator \n" +
            " 17: Mediator \n" +
            " 18: Memento \n" +
            " 19: Observer \n" +
            " 20: State \n" +
            " 21: Strategy \n" +
            " 22: Template method \n" +
            " 23: Visitor \n" +
            " 24: SimpleFactory \n";
        console.log("\n\n");
        console.log("==== Choose one pattern to demonstrate ====");
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
        rl.question("Which pattern would you like to check?   ", function (answer) {
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
            rl.close();
        });
    };
    PatternShow.prototype.show = function (pattern) {
        pattern.show();
    };
    return PatternShow;
}());
new PatternShow().start();
