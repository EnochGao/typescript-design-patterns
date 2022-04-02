import { Pattern } from "../index";
import { ConcreteColleagueA, ConcreteColleagueB, ConcreteMediator } from "./mediator";


/**
 * 中介者模式
 */
export class MediatorPattern implements Pattern {

  show() {
    const mediator = new ConcreteMediator();

    const ca = new ConcreteColleagueA();
    const cb = new ConcreteColleagueB();

    mediator.register(ca);
    mediator.register(cb);


    ca.send();
    console.log('*****************');
    cb.send();

  }
}