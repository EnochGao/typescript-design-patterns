import { Pattern } from "../../index";
import { Adaptee, ClassAdapter, ObjectAdapter, ITarget } from "./adapter";
/**
 * 适配器模式
 */
export class AdapterPattern implements Pattern {

  show() {
    const target: ITarget = new ClassAdapter();
    target.request();

    const target1: ITarget = new ObjectAdapter(new Adaptee());
    target1.request();
  }
}