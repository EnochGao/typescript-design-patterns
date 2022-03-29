import { Pattern } from "../index";
import { AbstractFactory, ConcreteFactory, ProductA, ProductB } from "./abstract-factory";
/**
 * 抽象工厂
 */
export class AbstractFactoryPattern implements Pattern {

  show(): void {
    const factory: AbstractFactory = new ConcreteFactory();
    const productA: ProductA = factory.createProductA();
    const productB: ProductB = factory.createProductB();
    productA.use();
    productB.eat();
  }

}