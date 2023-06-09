"use strict";
/**命令（Command）模式的定义如下：将一个请求封装为一个对象，使发出请求的责任和执行请求的责任分割开。
 * 这样两者之间通过命令对象进行沟通，这样方便将命令对象进行储存、传递、调用、增加与管理
 *
 * - 1.抽象命令类（Command）角色：声明执行命令的接口，拥有执行命令的抽象方法 execute()。
 * - 2.具体命令类（Concrete Command）角色：是抽象命令类的具体实现类，它拥有接收者对象，并通过调用接收者的功能来完成命令要执行的操作。
 * - 3.实现者/接收者（Receiver）角色：执行命令功能的相关操作，是具体命令对象业务的真正实现者。
 * - 4.调用者/请求者（Invoker）角色：是请求的发送者，它通常拥有很多的命令对象，并通过访问命令对象来执行相关请求，它不直接访问接收者。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoker = exports.ConcreteCommand = void 0;
// 具体命令类（Concrete Command）角色
var ConcreteCommand = /** @class */ (function () {
    function ConcreteCommand() {
        this.receiver = new Receiver();
    }
    ConcreteCommand.prototype.execute = function () {
        this.receiver.action();
    };
    return ConcreteCommand;
}());
exports.ConcreteCommand = ConcreteCommand;
// 实现者/接收者（Receiver）角色
var Receiver = /** @class */ (function () {
    function Receiver() {
    }
    Receiver.prototype.action = function () {
        console.log("接收者的action()方法被调用...");
    };
    return Receiver;
}());
// 调用者/请求者（Invoker）角色
var Invoker = /** @class */ (function () {
    function Invoker(command) {
        this.command = command;
    }
    Invoker.prototype.call = function () {
        console.log("调用者执行命令");
        this.command.execute();
    };
    return Invoker;
}());
exports.Invoker = Invoker;
