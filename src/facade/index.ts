import { Pattern } from "../index";
import { Facade } from "./facade";
/**
 * 外观模式
 */
export class FacadePattern implements Pattern {

  show() {
    const facade = new Facade();
    facade.wrapOperation();
  }

}