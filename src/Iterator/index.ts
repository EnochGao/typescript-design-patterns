import { Pattern } from "../index";
import { ConcreteAggregate } from "./Iterator";

/**
 * 迭代器模式
 */
export class IteratorPattern implements Pattern {

  show() {
    const c = new ConcreteAggregate();
    c.add('中山大学');
    c.add('华南理工');
    c.add('韶关学院');

    console.log('聚合的内容有：');

    const i = c.getIterator();
    while (i.hasNext()) {
      console.log(i.next());
    }
    console.log('first', i.first());
  }

}