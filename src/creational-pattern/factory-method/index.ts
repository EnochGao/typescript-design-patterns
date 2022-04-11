import { Pattern } from "../../index";
import { ConcreteFactory, IFactory, IProduct } from "./factory-method";
/**
 * 工厂方法
 */
export class FactoryMethodPattern implements Pattern {

  show() {
    const factory: IFactory = new ConcreteFactory();
    const product: IProduct = factory.createProduct();
    product.use();
  }
}