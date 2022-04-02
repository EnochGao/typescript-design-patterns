// 将抽象与实现分离，使它们可以独立变化。它是用组合关系代替继承关系来实现，从而降低了抽象和实现这两个可变维度的耦合度。
/*
抽象化（Abstraction）角色：定义抽象类，并包含一个对实现化对象的引用。
扩展抽象化（Refined Abstraction）角色：是抽象化角色的子类，实现父类中的业务方法，并通过组合关系调用实现化角色中的业务方法。
实现化（Implementor）角色：定义实现化角色的接口，供扩展抽象化角色调用。
具体实现化（Concrete Implementor）角色：给出实现化角色接口的具体实现。
*/

export interface Implementor {
  operationImpl(): void;
}

export abstract class Abstraction {
  constructor(protected implementor: Implementor) {
  }
  abstract operation(): void;
}

export class ConcreteImplementorA implements Implementor {
  operationImpl(): void {
    console.log('具体实现化(Concrete Implementor)角色被访问');
  }
}

export class RefinedAbstraction extends Abstraction {
  constructor(implementor: Implementor) {
    super(implementor);
  }
  operation(): void {
    console.log('扩展抽象化(Refined Abstraction)角色被访问');
    this.implementor.operationImpl();
  }
}
