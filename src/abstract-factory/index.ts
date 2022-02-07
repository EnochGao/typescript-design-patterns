import { Pattern } from "../index";
import { AbstractFactory, ConcreteFactory, ProductA, ProductB } from "./abstract-factory";

export class AbstractFactoryPattern extends Pattern {

  show(): void {
    const factory: AbstractFactory = new ConcreteFactory();
    const productA: ProductA = factory.createProductA();
    const productB: ProductB = factory.createProductB();
    productA.use();
    productB.eat();
  }

}