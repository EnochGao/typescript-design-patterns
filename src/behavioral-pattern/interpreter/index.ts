import { Pattern } from "../../index";
import { Context } from "./interpreter";

/**
 * 解释器模式
 */
export class InterpreterPattern implements Pattern {

  show() {
    const context = new Context();
    context.freeRide('韶关的老人');
    context.freeRide('韶关的年轻人');
    context.freeRide('广州的妇女');
    context.freeRide('广州的儿童');
    context.freeRide('山东的儿童');
  }

}