import { Pattern } from "../index";
import { Facade } from "./facade";

export class FacadePattern implements Pattern {

  show() {
    const facade = new Facade();
    facade.wrapOperation();
  }

}