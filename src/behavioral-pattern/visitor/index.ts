import { Pattern } from 'src';
import {
  ConcreteElementA,
  ConcreteElementB,
  ConcreteVisitorA,
  ConcreteVisitorB,
  ObjectStructure,
} from './visitor';

/**
 * 访问者模式
 */
export class VisitorPattern implements Pattern {
  show() {
    const os = new ObjectStructure();

    const elA = new ConcreteElementA();
    const elB = new ConcreteElementB();

    os.add(elA);
    os.add(elB);

    const vA = new ConcreteVisitorA();
    os.accept(vA);

    console.log('------------------------');

    const vB = new ConcreteVisitorB();
    os.accept(vB);
  }
}
