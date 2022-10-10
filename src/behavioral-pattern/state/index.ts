import { Pattern } from '../../index';
import { ConcreteStateA, Context } from './state';

/**
 * 状态模式
 */
export class StatePattern implements Pattern {
  show() {
    const c = new Context();
    c.setState(new ConcreteStateA());
    c.handle();
    c.handle();
  }
}
