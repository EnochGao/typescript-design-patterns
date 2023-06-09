import * as readline from "readline";

import { SimpleFactoryPattern } from "./creational-pattern/simple-factory/index";

import { BuilderPattern } from "./creational-pattern/builder/index";
import { PrototypePattern } from "./creational-pattern/prototype/index";
import { SingletonPattern } from "./creational-pattern/singleton/index";
import { FactoryMethodPattern } from "./creational-pattern/factory-method/index";
import { AbstractFactoryPattern } from "./creational-pattern/abstract-factory/index";

import { AdapterPattern } from "./structural-pattern/adapter/index";
import { BridgePattern } from "./structural-pattern/bridge/index";
import { CompositePattern } from "./structural-pattern/composite";
import { DecoratorPattern } from "./structural-pattern/decorator";
import { FlyweightPattern } from "./structural-pattern/flyweight";
import { FacadePattern } from "./structural-pattern/facade";
import { ProxyPattern } from "./structural-pattern/proxy";

import { IteratorPattern } from "./behavioral-pattern/Iterator";
import { MediatorPattern } from "./behavioral-pattern/mediator";
import { CommandPattern } from "./behavioral-pattern/command";
import { InterpreterPattern } from "./behavioral-pattern/interpreter";
import { ChainOfResponsibilityPattern } from "./behavioral-pattern/chain-of-responsibility";
import { MementoPattern } from "./behavioral-pattern/memento";
import { ObserverPattern } from "./behavioral-pattern/observer";
import { StatePattern } from "./behavioral-pattern/state";
import { StrategyPattern } from "./behavioral-pattern/strategy";
import { TemplateMethodPattern } from "./behavioral-pattern/template-method";
import { VisitorPattern } from "./behavioral-pattern/visitor";

export interface Pattern {
  show(): void;
}

class PatternShow {
  start(): void {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    this.printMenu();

    rl.question("请选择：", (answer: string) => {
      switch (+answer) {
        case 1:
          this.show(new SingletonPattern());
          break;
        case 2:
          this.show(new AbstractFactoryPattern());
          break;
        case 3:
          this.show(new FactoryMethodPattern());
          break;
        case 4:
          this.show(new BuilderPattern());
          break;
        case 5:
          this.show(new PrototypePattern());
          break;
        case 6:
          this.show(new SimpleFactoryPattern());
          break;

        case 7:
          this.show(new AdapterPattern());
          break;
        case 8:
          this.show(new BridgePattern());
          break;
        case 9:
          this.show(new CompositePattern());
          break;
        case 10:
          this.show(new DecoratorPattern());
          break;
        case 11:
          this.show(new FacadePattern());
          break;
        case 12:
          this.show(new FlyweightPattern());
          break;
        case 13:
          this.show(new ProxyPattern());
          break;

        case 14:
          this.show(new ChainOfResponsibilityPattern());
          break;
        case 15:
          this.show(new CommandPattern());
          break;
        case 16:
          this.show(new InterpreterPattern());
          break;
        case 17:
          this.show(new IteratorPattern());
          break;
        case 18:
          this.show(new MediatorPattern());
          break;
        case 19:
          this.show(new MementoPattern());
          break;
        case 20:
          this.show(new ObserverPattern());
          break;
        case 21:
          this.show(new StatePattern());
          break;
        case 22:
          this.show(new StrategyPattern());
          break;
        case 23:
          this.show(new TemplateMethodPattern());
          break;
        case 24:
          this.show(new VisitorPattern());
          break;

        default:
          break;
      }
      rl.close();
    });
  }

  private show(pattern: Pattern): void {
    pattern.show();
  }

  private printMenu(): void {
    const menu: string = `
      ********** 创建型 ********** 
      1: Singleton 
      2: Abstract factory 
      3: Factory method 
      4: Builder 
      5: Prototype 
      6: SimpleFactory 

      ********** 结构型 **********
      7: Adapter 
      8: Bridge 
      9: Composite 
      10: Decorator 
      11: Facade 
      12: Flyweight 
      13: Proxy 

      ********** 行为型 **********
      14: Chain of responsibility 
      15: Command 
      16: Interpreter 
      17: Iterator 
      18: Mediator 
      19: Memento 
      20: Observer 
      21: State 
      22: Strategy 
      23: Template method 
      24: Visitor 
    `;

    console.log(`>>>选择一个demo实例运行:`);
    console.log(menu);
  }
}

new PatternShow().start();
