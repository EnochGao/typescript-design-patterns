import { Pattern } from "../index";
import { ConcreteCommand, ICommand, Invoker } from "./command";

/**
 * 命令模式
 */
export class CommandPattern implements Pattern {

  show() {
    const c: ICommand = new ConcreteCommand();
    const invoker = new Invoker(c);
    invoker.call();
  }
}