import { Pattern } from "../index";
import { Factory, Product } from "./simple-factory";

export class SimpleFactoryPattern extends Pattern {
  show() {
    const productA: Product = Factory.createProduct('A');
    const productB: Product = Factory.createProduct('B');
    productA.use();
    productB.use();
  }
}