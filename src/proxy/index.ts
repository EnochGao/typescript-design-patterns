import { Pattern } from "../index";
import { ISubject, Proxy } from "./proxy";


export class ProxyPattern implements Pattern {

  show() {
    const subject: ISubject = new Proxy();
    subject.request();
  }
}