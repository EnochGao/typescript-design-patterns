import { Pattern } from "../../index";
import { ConcreteComponent, ConcreteDecorator, IComponent, IDecorator } from "./decorator";

/**
 * 装饰器模式
 */
export class DecoratorPattern implements Pattern {

  show() {
    const c: IComponent = new ConcreteComponent();
    const d: IComponent = new ConcreteDecorator(c);

    d.operation();

  }
}