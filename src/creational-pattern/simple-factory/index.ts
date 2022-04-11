import { Pattern } from "../../index";
import { Factory, IProduct } from "./simple-factory";
/**
 * 简单工厂
 */
export class SimpleFactoryPattern implements Pattern {
  show() {
    const productA: IProduct = Factory.createProduct('A');
    const productB: IProduct = Factory.createProduct('B');
    productA.use();
    productB.use();
  }
}