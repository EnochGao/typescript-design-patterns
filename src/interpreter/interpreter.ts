/**
 *解释器（Interpreter）模式的定义：给分析对象定义一个语言，并定义该语言的文法表示，再设计一个解析器来解释语言中的句子。
 *也就是说，用编译语言的方式来分析应用中的实例。这种模式实现了文法表达式处理的接口，该接口解释一个特定的上下文。
 *
 * - 1.抽象表达式（Abstract Expression）角色：定义解释器的接口，约定解释器的解释操作，主要包含解释方法 interpret()。
 * - 2.终结符表达式（Terminal Expression）角色：是抽象表达式的子类，用来实现文法中与终结符相关的操作，文法中的每一个终结符都有一个具体终结表达式与之相对应。
 * - 3.非终结符表达式（Nonterminal Expression）角色：也是抽象表达式的子类，用来实现文法中与非终结符相关的操作，文法中的每条规则都对应于一个非终结符表达式。
 * - 4.环境（Context）角色：通常包含各个解释器需要的数据或是公共的功能，一般用来传递被所有解释器共享的数据，后面的解释器可以从这里获取这些值。
 * - 5.客户端（Client）：主要任务是将需要分析的句子或表达式转换成使用解释器对象描述的抽象语法树，然后调用解释器的解释方法，
 * 当然也可以通过环境角色间接访问解释器的解释方法。
*/

// 抽象表达式（Abstract Expression）角色
interface AbstractExpression {
  interpret(info: string): boolean;
}

// 终结符表达式（Terminal Expression）角色
class TerminalExpression implements AbstractExpression {

  private set = new Set<string>();

  constructor(data: Array<string>) {
    data.forEach(d => this.set.add(d));
  }

  interpret(info: string) {
    if (this.set.has(info)) {
      return true;
    }
    return false;
  }

}
// 非终结符表达式（Nonterminal Expression）角色
class AndExpression implements AbstractExpression {

  constructor(private city: AbstractExpression, private person: AbstractExpression) { }

  interpret(info: string) {
    const s = info.split('的');
    return this.city.interpret(s[0]) && this.person.interpret(s[1]);
  }
}

// 环境（Context）角色
export class Context {

  private cities = ['韶关', '广州'];
  private person = ['老人', '妇女', '儿童'];

  private cityPerson: AbstractExpression;

  constructor() {

    const cities = new TerminalExpression(this.cities);
    const person = new TerminalExpression(this.person);
    this.cityPerson = new AndExpression(cities, person);

  }

  freeRide(info: string) {
    const free = this.cityPerson.interpret(info);
    if (free) {
      console.log(`您是${info},您本次乘车免费`);
    } else {
      console.log(`${info},您不是免费人员，本次乘车扣费2元`);
    }
  }

}
