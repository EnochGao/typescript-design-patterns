import { Pattern } from "../../index";
import { IBuilder, ConcreteBuilder, Director } from "./builder";
/**
 * 建造者模式
 */
export class BuilderPattern implements Pattern {

  show() {
    const builder: IBuilder = new ConcreteBuilder();
    const director = new Director();
    director.setBuilder(builder);
    const product = director.getProduct();
    console.log('product::', product);
  }
}