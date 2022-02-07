import { Pattern } from "../index";
import { ConcreteFactory, Factory, Product } from "./factory-method";

export class FactoryMethodPattern implements Pattern {

  show() {
    const factory: Factory = new ConcreteFactory();
    const product: Product = factory.factoryMethod();
    product.use();
  }
}