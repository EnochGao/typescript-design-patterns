import { Pattern } from "../index";
import { ConcreteFactory, Factory, Product } from "./factory-method";

export class FactoryMethodPattern extends Pattern {

  show() {
    const factory: Factory = new ConcreteFactory();
    const product: Product = factory.factoryMethod();
    product.use();
  }
}