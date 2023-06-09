"use strict";
/**
 * 中介者（Mediator）模式的定义：定义一个中介对象来封装一系列对象之间的交互，使原有对象之间的耦合松散，
 * 且可以独立地改变它们之间的交互。中介者模式又叫调停模式，它是迪米特法则的典型应用。
 * - 1.抽象中介者（Mediator）角色：它是中介者的接口，提供了同事对象注册与转发同事对象信息的抽象方法。
 * - 2.具体中介者（Concrete Mediator）角色：实现中介者接口，定义一个 List 来管理同事对象，协调各个同事角色之间的交互关系，因此它依赖于同事角色。
 * - 3.抽象同事类（Colleague）角色：定义同事类的接口，保存中介者对象，提供同事对象交互的抽象方法，实现所有相互影响的同事类的公共功能。
 * - 4.具体同事类（Concrete Colleague）角色：是抽象同事类的实现者，当需要与其他同事对象交互时，由中介者对象负责后续的交互。
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteColleagueB = exports.ConcreteColleagueA = exports.ConcreteMediator = exports.AbstractColleague = void 0;
/**
 * 抽象同事类Colleague角色
 * */
var AbstractColleague = /** @class */ (function () {
    function AbstractColleague() {
    }
    AbstractColleague.prototype.setMediator = function (mediator) {
        this.mediator = mediator;
    };
    return AbstractColleague;
}());
exports.AbstractColleague = AbstractColleague;
/**
 * 具体中介者（Concrete Mediator）角色
 * */
var ConcreteMediator = /** @class */ (function () {
    function ConcreteMediator() {
        this.colleagues = new Set();
    }
    ConcreteMediator.prototype.register = function (c) {
        if (!this.colleagues.has(c)) {
            this.colleagues.add(c);
            c.setMediator(this);
        }
    };
    ConcreteMediator.prototype.replay = function (c) {
        this.colleagues.forEach(function (i) {
            if (c !== i) {
                i.receive();
            }
        });
    };
    return ConcreteMediator;
}());
exports.ConcreteMediator = ConcreteMediator;
var ConcreteColleagueA = /** @class */ (function (_super) {
    __extends(ConcreteColleagueA, _super);
    function ConcreteColleagueA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteColleagueA.prototype.receive = function () {
        console.log('ConcreteColleagueA收到请求');
    };
    ConcreteColleagueA.prototype.send = function () {
        console.log('ConcreteColleagueA发送消息');
        this.mediator.replay(this);
    };
    return ConcreteColleagueA;
}(AbstractColleague));
exports.ConcreteColleagueA = ConcreteColleagueA;
var ConcreteColleagueB = /** @class */ (function (_super) {
    __extends(ConcreteColleagueB, _super);
    function ConcreteColleagueB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteColleagueB.prototype.receive = function () {
        console.log('ConcreteColleagueB收到请求');
    };
    ConcreteColleagueB.prototype.send = function () {
        console.log('ConcreteColleagueB发送消息');
        this.mediator.replay(this);
    };
    return ConcreteColleagueB;
}(AbstractColleague));
exports.ConcreteColleagueB = ConcreteColleagueB;
