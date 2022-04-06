import { Pattern } from "../../index";
import { ConcreteObserverA, ConcreteObserverB, ConcreteSubject } from "./observer";

/**
 * 观察者模式
 */
export class ObserverPattern implements Pattern {

  show() {
    const su = new ConcreteSubject();
    const oba = new ConcreteObserverA();
    const obb = new ConcreteObserverB();

    su.add(oba);
    su.add(obb);

    su.notice();

  }

}