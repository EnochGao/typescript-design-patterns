/**
 * 中介者（Mediator）模式的定义：定义一个中介对象来封装一系列对象之间的交互，使原有对象之间的耦合松散，
 * 且可以独立地改变它们之间的交互。中介者模式又叫调停模式，它是迪米特法则的典型应用。
 * - 1.抽象中介者（Mediator）角色：它是中介者的接口，提供了同事对象注册与转发同事对象信息的抽象方法。
 * - 2.具体中介者（Concrete Mediator）角色：实现中介者接口，定义一个 List 来管理同事对象，协调各个同事角色之间的交互关系，因此它依赖于同事角色。
 * - 3.抽象同事类（Colleague）角色：定义同事类的接口，保存中介者对象，提供同事对象交互的抽象方法，实现所有相互影响的同事类的公共功能。
 * - 4.具体同事类（Concrete Colleague）角色：是抽象同事类的实现者，当需要与其他同事对象交互时，由中介者对象负责后续的交互。
 */

/**
 * 抽象同事类Colleague角色
 * */
export abstract class AbstractColleague {
  protected mediator: IMediator;

  setMediator(mediator: IMediator) {
    this.mediator = mediator;
  }
  abstract receive(): void;
  abstract send(): void;
}

/**
 * 抽象中介者（Mediator）角色
 * */
export interface IMediator {
  register(c: AbstractColleague): void;
  replay(c: AbstractColleague): void;
}

/**
 * 具体中介者（Concrete Mediator）角色
 * */
export class ConcreteMediator implements IMediator {
  private colleagues = new Set<AbstractColleague>();

  register(c: AbstractColleague): void {
    if (!this.colleagues.has(c)) {
      this.colleagues.add(c);
      c.setMediator(this);
    }
  }

  replay(c: AbstractColleague): void {
    this.colleagues.forEach((i) => {
      if (c !== i) {
        i.receive();
      }
    });
  }
}

export class ConcreteColleagueA extends AbstractColleague {
  receive(): void {
    console.log('ConcreteColleagueA收到请求');
  }

  send(): void {
    console.log('ConcreteColleagueA发送消息');
    this.mediator.replay(this);
  }
}

export class ConcreteColleagueB extends AbstractColleague {
  receive(): void {
    console.log('ConcreteColleagueB收到请求');
  }

  send(): void {
    console.log('ConcreteColleagueB发送消息');
    this.mediator.replay(this);
  }
}
