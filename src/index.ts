import * as readline from 'readline';

import { SimpleFactoryPattern } from './simple-factory/index';

import { BuilderPattern } from './creational-pattern/builder/index';
import { PrototypePattern } from './creational-pattern/prototype/index';
import { SingletonPattern } from './creational-pattern/singleton/index';
import { FactoryMethodPattern } from './creational-pattern/factory_method/index';
import { AbstractFactoryPattern } from './creational-pattern/abstract-factory/index';

import { AdapterPattern } from './structural-pattern/adapter/index';
import { BridgePattern } from './structural-pattern/bridge/index';
import { CompositePattern } from './structural-pattern/composite';
import { DecoratorPattern } from './structural-pattern/decorator';
import { FlyweightPattern } from './structural-pattern/flyweight';
import { FacadePattern } from './structural-pattern/facade';
import { ProxyPattern } from './structural-pattern/proxy';

import { IteratorPattern } from './behavioral-pattern/Iterator';
import { MediatorPattern } from './behavioral-pattern/mediator';
import { CommandPattern } from './behavioral-pattern/command';
import { InterpreterPattern } from './behavioral-pattern/interpreter';
import { ChainOfResponsibilityPattern } from './behavioral-pattern/chain-of-responsibility';
import { MementoPattern } from './behavioral-pattern/memento';
import { ObserverPattern } from './behavioral-pattern/observer';
import { StatePattern } from './behavioral-pattern/state';
import { StrategyPattern } from './behavioral-pattern/strategy';
import { TemplateMethodPattern } from './behavioral-pattern/template-method';

export interface Pattern {
  show(): void;
}

class PatternShow {

  start(): void {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    this.printMenu();

    rl.question("请选择：", (answer: string) => {

      switch (+answer) {
        case 1: this.show(new SingletonPattern()); break;
        case 2: this.show(new AbstractFactoryPattern()); break;
        case 3: this.show(new FactoryMethodPattern()); break;
        case 4: this.show(new BuilderPattern()); break;
        case 5: this.show(new PrototypePattern()); break;
        case 6: this.show(new SimpleFactoryPattern()); break;

        case 7: this.show(new AdapterPattern()); break;
        case 8: this.show(new BridgePattern()); break;
        case 9: this.show(new CompositePattern()); break;
        case 10: this.show(new DecoratorPattern()); break;
        case 11: this.show(new FacadePattern()); break;
        case 12: this.show(new FlyweightPattern()); break;
        case 13: this.show(new ProxyPattern()); break;

        case 14: this.show(new ChainOfResponsibilityPattern()); break;
        case 15: this.show(new CommandPattern()); break;
        case 16: this.show(new InterpreterPattern()); break;
        case 17: this.show(new IteratorPattern()); break;
        case 18: this.show(new MediatorPattern()); break;
        case 19: this.show(new MementoPattern()); break;
        case 20: this.show(new ObserverPattern()); break;
        case 21: this.show(new StatePattern()); break;
        case 22: this.show(new StrategyPattern()); break;
        case 23: this.show(new TemplateMethodPattern()); break;

        default: break;
      }
      rl.close();
    });
  }

  private show(pattern: Pattern): void {
    pattern.show();
  }

  private printMenu(): void {
    const menu: string = `
      = 创建型 == \n
      1: Singleton \n
      2: Abstract factory \n
      3: Factory method \n
      4: Builder \n
      5: Prototype \n
      6: SimpleFactory \n\n
      = 结构型 == \n
      7: Adapter \n
      8: Bridge \n
      9: Composite \n
      10: Decorator \n
      11: Facade \n
      12: Flyweight \n
      13: Proxy \n\n
      = 行为型 == \n
      14: Chain of responsibility \n
      15: Command \n
      16: Interpreter \n
      17: Iterator \n
      18: Mediator \n
      19: Memento \n
      20: Observer \n
      21: State \n
      22: Strategy \n
      23: Template method \n
      24: Visitor \n
    `;

    console.log("==== 选择一个demo实例运行 ====");
    console.log("\n");
    console.log(menu);
  }
}


new PatternShow().start();