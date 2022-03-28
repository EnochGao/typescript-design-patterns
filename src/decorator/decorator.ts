/**
 * 装饰器（Decorator）模式的定义: 指在不改变现有对象结构的情况下，动态地给该对象增加一些职责（即增加其额外功能）的模式，它属于对象结构型模式。
 *
 * - 1.抽象构件（Component）角色：定义一个抽象接口以规范准备接收附加责任的对象。
 * - 2.具体构件（ConcreteComponent）角色：实现抽象构件，通过装饰角色为其添加一些职责。
 * - 3.抽象装饰（Decorator）角色：继承抽象构件，并包含具体构件的实例，可以通过其子类扩展具体构件的功能。
 * - 4.具体装饰（ConcreteDecorator）角色：实现抽象装饰的相关方法，并给具体构件对象添加附加的责任。
*/

export interface IComponent {
  operation(): void;
}

// 抽象装饰角色
export abstract class IDecorator implements IComponent {
  private component: IComponent;

  constructor(component: IComponent) {
    this.component = component;
  }

  operation() {
    this.component.operation();
  };
}

//具体装饰角色
export class ConcreteDecorator extends IDecorator {

  constructor(component: IComponent) {
    super(component);
  }

  operation() {
    super.operation();
    this.addedFunction();
  }

  public addedFunction() {
    console.log("为具体构件角色增加额外的功能addedFunction()");
  }
}

//具体构件角色
export class ConcreteComponent implements IComponent {

  constructor() {
    console.log("创建具体构件角色");
  }

  public operation() {
    console.log("调用具体构件角色的方法operation()");
  }
}
