// 抽象工厂（abstract factory）:提供一个创建一系列相关或相互依赖对象的接口，而无需指定它们具体的类。
/*
AbstractFactory：抽象工厂
ConcreteFactory：具体工厂
AbstractProduct：抽象产品
Product：具体产品
*/
export interface AbstractFactory {
  createProductA(): AbstractProductA;
  createProductB(): AbstractProductB;
}
interface AbstractProductA {
  use(): void;
}
interface AbstractProductB {
  eat(): void;
}

export class ProductA implements AbstractProductA {
  use(): void {
    console.log('ProductA is used!');
  }
}
export class ProductB implements AbstractProductB {
  eat(): void {
    console.log('ProductB is eaten!');
  }
}

export class ConcreteFactory implements AbstractFactory {
  createProductA(): AbstractProductA {
    return new ProductA();
  }
  createProductB(): AbstractProductB {
    return new ProductB();
  }
}
