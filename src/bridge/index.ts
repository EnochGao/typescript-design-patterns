import { Pattern } from "../index";
import { Abstraction, ConcreteImplementorA, Implementor, RefinedAbstraction } from "./bridge";
/**
 * 桥接模式
 */
export class BridgePattern implements Pattern {

  show() {
    const implementorA: Implementor = new ConcreteImplementorA();
    const refinedAbstraction: Abstraction = new RefinedAbstraction(implementorA);
    refinedAbstraction.operation();

  }
}