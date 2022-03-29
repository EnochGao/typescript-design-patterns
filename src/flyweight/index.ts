import { Pattern } from "../index";
import { FlyweightFactory, UnSharableFlyweight } from "./flyweight";

/**
 * 享元模式
 */
export class FlyweightPattern implements Pattern {

  show() {

    const factory = new FlyweightFactory();
    const fa1 = factory.getFlyWeight('a');
    const fa2 = factory.getFlyWeight('a');
    const fa3 = factory.getFlyWeight('a');
    const fb1 = factory.getFlyWeight('b');
    const fb2 = factory.getFlyWeight('b');

    fa1.operation(new UnSharableFlyweight('第一次调用a'));
    fa2.operation(new UnSharableFlyweight('第二次调用a'));
    fa3.operation(new UnSharableFlyweight('第三次调用a'));

    fb1.operation(new UnSharableFlyweight('第一次调用b'));
    fb2.operation(new UnSharableFlyweight('第二次调用b'));

  }

}