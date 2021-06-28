// 抽象工厂（abstract factory）:提供一个创建一系列相关或相互依赖对象的接口，而无需指定它们具体的类。
/*
AbstractFactory：抽象工厂
ConcreteFactory：具体工厂
AbstractProduct：抽象产品
Product：具体产品
*/
interface AbstractFactory {
  createProductA(): AbstractProductA;
  createProductB(): AbstractProductB;
}
interface AbstractProductA {
  use(): void;
}
interface AbstractProductB {
  eat(): void;
}

class ProductA implements AbstractProductA {
  use(): void {
    console.log('ProductA is used!');
  }
}
class ProductB implements AbstractProductB {
  eat(): void {
    console.log('ProductB is eaten!');
  }
}

class ConcreteFactory implements AbstractFactory {
  createProductA(): AbstractProductA {
    return new ProductA();
  }
  createProductB(): AbstractProductB {
    return new ProductB();
  }
}
export default function abstractFactoryMain() {
  const factory: AbstractFactory = new ConcreteFactory();
  const productA: ProductA = factory.createProductA();
  const productB: ProductB = factory.createProductB();
  productA.use();
  productB.eat();
  console.log('%c------------', 'color:green;font-size:18px');
};