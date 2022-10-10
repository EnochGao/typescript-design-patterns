import { Pattern } from 'src';
import { ConcreteStrategyA, ConcreteStrategyB, Context } from './strategy';

/**
 * 策略模式
 */
export class StrategyPattern implements Pattern {
  show() {
    const c = new Context();
    const sa = new ConcreteStrategyA();
    const sb = new ConcreteStrategyB();

    c.setStrategy(sa);
    c.strategyMethod();
    console.log('----------------------');
    c.setStrategy(sb);
    c.strategyMethod();
  }
}
