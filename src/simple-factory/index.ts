import { Pattern } from "../index";
import { Factory, Product } from "./simple-factory";
/**
 * 简单工厂
 */
export class SimpleFactoryPattern implements Pattern{
  show() {
    const productA: Product = Factory.createProduct('A');
    const productB: Product = Factory.createProduct('B');
    productA.use();
    productB.use();
  }
}