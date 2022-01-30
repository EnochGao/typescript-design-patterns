import readline from 'readline';
import { SingletonPattern } from './singleton/index';

export abstract class Pattern {

  abstract show(): void;

  constructor() {
    console.log('%c------------', 'color:green;font-size:18px');
  }

}

class PatternShow {
  printMenu(): void {
    const menu = "= Creational Patterns == \n" +
      "  1: Singleton \n" +
      "  2: Abstract factory \n" +
      "  3: Factory method \n" +
      "  4: Builder \n" +
      "  5: Prototype \n\n" +
      "= Structural Patterns == \n" +
      "  6: Adapter \n" +
      "  7: Bridge \n" +
      "  8: Composite \n" +
      "  9: Decorator \n" +
      " 10: Facade \n" +
      " 11: Flyweight \n" +
      " 12: Proxy \n\n" +
      "= Behavioral Patterns == \n" +
      " 13: Chain of responsibility \n" +
      " 14: Command \n" +
      " 15: Interpreter \n" +
      " 16: Iterator \n" +
      " 17: Mediator \n" +
      " 18: Memento \n" +
      " 19: Observer \n" +
      " 20: State \n" +
      " 21: Strategy \n" +
      " 22: Template method \n" +
      " 23: Visitor \n";


    console.log("\n\n");
    console.log("==== Choose one pattern to demonstrate ====");
    console.log("\n");
    console.log(menu);
  }

  show(pattern: Pattern): void {
    pattern.show();
  }

  start(): void {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    this.printMenu();
    rl.question("Which pattern would you like to check?   ", function (answer) {
      switch (+answer) {
        case 1: this.show(new SingletonPattern()); break;
        default: break;
      }
      rl.close();
    });

  }
}