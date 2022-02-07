import { Pattern } from "../index";
import { Prototype, RealizeType } from "./prototype";

export class PrototypePattern implements Pattern{

  show() {
    const prototype: Prototype = new RealizeType();
    const prototype1 = prototype.clone();
    console.log('prototype::', prototype);
    console.log('prototype1::', prototype1);
    console.log('prototype === prototype1::', prototype === prototype1);
  }
}