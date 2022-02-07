import { Pattern } from "../index";
import { Adaptee, ClassAdapter, ObjectAdapter, Target } from "./adapter";

export class AdapterPattern extends Pattern {

  show() {
    const target: Target = new ClassAdapter();
    target.request();

    const target1: Target = new ObjectAdapter(new Adaptee());
    target1.request();
  }
}