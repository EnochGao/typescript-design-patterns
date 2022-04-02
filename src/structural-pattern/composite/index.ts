import { Pattern } from "../../index";
import { Composite, Leaf } from "./composite";

/**
 * 组合模式
 */
export class CompositePattern implements Pattern {
  show() {

    const composite = new Composite();
    const composite2 = new Composite();

    const leaf = new Leaf('leaf1');
    const leaf2 = new Leaf('leaf2');
    const leaf3 = new Leaf('leaf3');

    composite.add(leaf);
    composite.add(composite2);

    composite.add(leaf2);
    composite.add(leaf3);

    composite.operation();

  }
}