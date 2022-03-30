import { Pattern } from "../index";
import { ConcreteHandle1, ConcreteHandle2, Handler } from "./chainOfResponsibility";


/**
 *  @description 责任链模式
 */
export class ChainOfResponsibilityPattern implements Pattern {

  show() {
    const h1: Handler = new ConcreteHandle1();
    const h2: Handler = new ConcreteHandle2();
    h1.setNest(h2);
    h1.handleRequest();
  }
}