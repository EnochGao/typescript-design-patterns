import { Pattern } from '../../index';
import { Caretaker, Originator } from './memento';

/**
 * 备忘录模式
 */
export class MementoPattern implements Pattern {
  show() {
    const or = new Originator();
    const cr = new Caretaker();

    or.setState('状态');
    console.log('初始状态：', or.getState());

    const me = or.createMemento();
    cr.setMemento(me);

    console.log('---设置新状态---');
    or.setState('状态111');

    console.log('当前状态：', or.getState());

    console.log('---状态恢复---');

    or.restoreMemento(cr.getMemento());

    console.log('当前状态：', or.getState());
  }
}
