// 责任链（Chain of Responsibility）模式的定义：为了避免请求发送者与多个请求处理者耦合在一起，
// 于是将所有请求的处理者通过前一对象记住其下一个对象的引用而连成一条链；当有请求发生时，可将请求沿着这条链传递，直到有对象处理它为止。
/*
1、抽象处理者（Handler）角色：定义一个处理请求的接口，包含抽象处理方法和一个后继连接。
2、具体处理者（Concrete Handler）角色：实现抽象处理者的处理方法，判断能否处理本次请求，如果可以处理请求则处理，否则将该请求转给它的后继者。
3、客户类（Client）角色：创建处理链，并向链头的具体处理者对象提交请求，它不关心处理细节和请求的传递过程。
*/

// 抽象处理者（Handler）角色
export abstract class Handler {
  private nest: Handler;

  setNest(nest: Handler) {
    this.nest = nest;
  }


  getNest() {
    return this.nest;
  }

  abstract handleRequest(): void;
}

// 具体处理者（Concrete Handler）角色
export class ConcreteHandle1 extends Handler {

  handleRequest(): void {
    console.log('步骤1');
    const nest = this.getNest();
    if (nest) {
      nest.handleRequest();
    } else {
      console.log('处理完成');
    }
  }
}

// 具体处理者（Concrete Handler）角色
export class ConcreteHandle2 extends Handler {

  handleRequest(): void {
    console.log('步骤2');
    const nest = this.getNest();
    if (nest) {
      nest.handleRequest();
    } else {
      console.log('处理完成');
    }
  }
}
