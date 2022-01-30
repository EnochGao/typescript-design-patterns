/// <reference path="abstract-factory.ts" />

namespace AbstractFactoryPattern {
  export function show() {
    const factory: AbstractFactory = new ConcreteFactory();
    const productA: ProductA = factory.createProductA();
    const productB: ProductB = factory.createProductB();
    productA.use();
    productB.eat();
    console.log('%c------------', 'color:green;font-size:18px');
  };
}
