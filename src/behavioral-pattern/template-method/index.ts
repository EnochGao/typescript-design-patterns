import { Pattern } from '../../index';
import { ConcreteClass } from './template-method';

/**
 * 模板方法
 */
export class TemplateMethodPattern implements Pattern {
  show() {
    const c = new ConcreteClass();
    c.templateMethod();
  }
}
