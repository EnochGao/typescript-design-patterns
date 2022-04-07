/**
 * 状态（State）模式的定义：对有状态的对象，把复杂的“判断逻辑”提取到不同的状态对象中，允许状态对象在其内部状态发生改变时改变其行为。
 *
 * - 1.环境类（Context）角色：也称为上下文，它定义了客户端需要的接口，内部维护一个当前状态，并负责具体状态的切换。
 * - 2.抽象状态（State）角色：定义一个接口，用以封装环境对象中的特定状态所对应的行为，可以有一个或多个行为。
 * - 3.具体状态（Concrete State）角色：实现抽象状态所对应的行为，并且在需要的情况下进行状态切换。。
 *
*/

// 抽象状态（State）角色
export abstract class State {
  abstract handle(c: Context): void;
}

// 环境类（Context）角色
export class Context {
  private state: State;

  setState(state: State) {
    this.state = state;
  }

  getState() {
    return this.state;
  }

  handle() {
    this.state.handle(this);
  }

}

// 具体状态（Concrete State）角色
export class ConcreteStateA extends State {
  handle(c: Context): void {
    console.log('当前状态是 A');
    c.setState(new ConcreteStateB());
  }
}

// 具体状态（Concrete State）角色
class ConcreteStateB extends State {
  handle(c: Context): void {
    console.log('当前状态是 B');
    c.setState(new ConcreteStateA());
  }
}
