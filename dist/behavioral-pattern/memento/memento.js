"use strict";
/**
 * 备忘录（Memento）模式的定义：在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态，
 * 以便以后当需要时能将该对象恢复到原先保存的状态。该模式又叫快照模式。
 *
 * - 1.发起人（Originator）角色：记录当前时刻的内部状态信息，提供创建备忘录和恢复备忘录数据的功能，实现其他业务功能，它可以访问备忘录里的所有信息。
 * - 2.备忘录（Memento）角色：负责存储发起人的内部状态，在需要的时候提供这些内部状态给发起人。
 * - 3.管理者（Caretaker）角色：对备忘录进行管理，提供保存与获取备忘录的功能，但其不能对备忘录的内容进行访问与修改。
 *
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caretaker = exports.Memento = exports.Originator = void 0;
// 发起人（Originator）角色
var Originator = /** @class */ (function () {
    function Originator() {
    }
    Originator.prototype.setState = function (state) {
        this.state = state;
    };
    Originator.prototype.getState = function () {
        return this.state;
    };
    Originator.prototype.createMemento = function () {
        return new Memento(this.state);
    };
    Originator.prototype.restoreMemento = function (m) {
        this.state = m.getState();
    };
    return Originator;
}());
exports.Originator = Originator;
// 备忘录（Memento）角色
var Memento = /** @class */ (function () {
    function Memento(state) {
        this.state = state;
    }
    Memento.prototype.setState = function (state) {
        this.state = state;
    };
    Memento.prototype.getState = function () {
        return this.state;
    };
    return Memento;
}());
exports.Memento = Memento;
// 管理者（Caretaker）角色
var Caretaker = /** @class */ (function () {
    function Caretaker() {
    }
    Caretaker.prototype.setMemento = function (memento) {
        this.memento = memento;
    };
    Caretaker.prototype.getMemento = function () {
        return this.memento;
    };
    return Caretaker;
}());
exports.Caretaker = Caretaker;
