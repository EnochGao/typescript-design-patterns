import { Pattern } from "../index";
import { ISubject, Proxy } from "./proxy";

/**
 * 代理模式
 */
export class ProxyPattern implements Pattern {

  show() {
    const subject: ISubject = new Proxy();
    subject.request();
  }
}