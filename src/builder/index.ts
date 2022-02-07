import { Pattern } from "../index";
import { Builder, ConcreteBuilder, Director } from "./builder";

export class BuilderPattern implements Pattern {

  show() {
    const builder: Builder = new ConcreteBuilder();
    const director = new Director();
    director.setBuilder(builder);
    const product = director.getProduct();
    console.log('product::', product);
  }
}