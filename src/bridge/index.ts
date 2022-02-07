import { Pattern } from "../index";
import { Abstraction, ConcreteImplementorA, Implementor, RefinedAbstraction } from "./bridge";

export class BridgePattern implements Pattern{

  show() {
    const implementorA: Implementor = new ConcreteImplementorA();
    const refinedAbstraction: Abstraction = new RefinedAbstraction(implementorA);
    refinedAbstraction.operation();

  }
}