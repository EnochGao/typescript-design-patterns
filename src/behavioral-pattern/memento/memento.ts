/**
 * 备忘录（Memento）模式的定义：在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态，
 * 以便以后当需要时能将该对象恢复到原先保存的状态。该模式又叫快照模式。
 *
 * - 1.发起人（Originator）角色：记录当前时刻的内部状态信息，提供创建备忘录和恢复备忘录数据的功能，实现其他业务功能，
 * 它可以访问备忘录里的所有信息。
 * - 2.备忘录（Memento）角色：负责存储发起人的内部状态，在需要的时候提供这些内部状态给发起人。
 * - 3.管理者（Caretaker）角色：对备忘录进行管理，提供保存与获取备忘录的功能，但其不能对备忘录的内容进行访问与修改。
 */

/** 发起人（Originator）角色 */
export class Originator {
  state: string;

  setState(state: string) {
    this.state = state;
  }
  getState() {
    return this.state;
  }

  createMemento() {
    return new Memento(this.state);
  }

  restoreMemento(m: Memento) {
    this.state = m.getState();
  }
}

/**备忘录（Memento）角色 */
export class Memento {
  constructor(private state: string) {}

  setState(state: string) {
    this.state = state;
  }

  getState() {
    return this.state;
  }
}

/** 管理者（Caretaker）角色
 * 负责人通过保存备忘录栈来记录原发器的历史状态。
 * 当原发器需要回溯历史状态时，
 * 负责人将其传递给原发器的恢复 （restora­tion） 方法
*/
export class Caretaker {
  memento: Memento;

  setMemento(memento: Memento) {
    this.memento = memento;
  }

  getMemento() {
    return this.memento;
  }
}
