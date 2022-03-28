import * as readline from 'readline';
import { AbstractFactoryPattern } from './abstract-factory/index';
import { AdapterPattern } from './adapter/index';
import { BridgePattern } from './bridge/index';
import { BuilderPattern } from './builder/index';
import { CompositePattern } from './composite';
import { DecoratorPattern } from './decorator';
import { FactoryMethodPattern } from './factory_method/index';
import { PrototypePattern } from './prototype/index';
import { SimpleFactoryPattern } from './simple_factory/index';
import { SingletonPattern } from './singleton/index';

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