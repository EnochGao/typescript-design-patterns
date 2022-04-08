/**
 * 访问者（Visitor）模式的定义：将作用于某种数据结构中的各元素的操作分离出来封装成独立的类，使其在不改变数据结构的前提下可以添加作用于这些元素的新的操作，
 * 为数据结构中的每个元素提供多种访问方式。它将对数据的操作与数据结构进行分离，是行为类模式中最复杂的一种模式。
 *
 * - 1.抽象访问者（Visitor）角色：定义一个访问具体元素的接口，为每个具体元素类对应一个访问操作 visit() ，该操作中的参数类型标识了被访问的具体元素。
 * - 2.具体访问者（ConcreteVisitor）角色：实现抽象访问者角色中声明的各个访问操作，确定访问者访问一个元素时该做什么。
 * - 3.抽象元素（Element）角色：声明一个包含接受操作 accept() 的接口，被接受的访问者对象作为 accept() 方法的参数。
 * - 4.具体元素（ConcreteElement）角色：实现抽象元素角色提供的 accept() 操作，其方法体通常都是 visitor.visit(this)
 * 另外具体元素中可能还包含本身业务逻辑的相关操作。。
 * - 5.对象结构（Object Structure）角色：是一个包含元素角色的容器，提供让访问者对象遍历容器中的所有元素的方法，通常由 List、Set、Map 等聚合类实现。
 *
*/


// 抽象访问者（Visitor）角色
export interface IVisitor {
  visit(element: ConcreteElementA): void;
  visit(element: ConcreteElementB): void;
}


// 具体访问者（ConcreteVisitor）角色
export class ConcreteVisitorA implements IVisitor {
  visit(element: ConcreteElementA): void;
  visit(element: ConcreteElementB): void;
  visit(element: any): void {
    if (element instanceof ConcreteElementA) {
      console.log('具体访问者A访问-->', element.operationA());
    } else {
      console.log('具体访问者A访问-->', element.operationB());
    }
  }

}
// 具体访问者（ConcreteVisitor）角色
export class ConcreteVisitorB implements IVisitor {
  visit(element: ConcreteElementA): void;
  visit(element: ConcreteElementB): void;
  visit(element: any): void {
    if (element instanceof ConcreteElementA) {
      console.log('具体访问者B访问-->', element.operationA());
    } else {
      console.log('具体访问者B访问-->', element.operationB());
    }
  }
}

// 抽象访问者（Visitor）角色
export interface IElement {
  accept(visitor: IVisitor): void;
}

// 具体元素（ConcreteElement）角色
export class ConcreteElementA implements IElement {
  accept(visitor: IVisitor): void {
    visitor.visit(this);
  }
  operationA() {
    return '具体元素A的操作';
  }
}

// 具体元素（ConcreteElement）角色
export class ConcreteElementB implements IElement {
  accept(visitor: IVisitor): void {
    visitor.visit(this);
  }

  operationB() {
    return '具体元素B的操作';
  }
}

// 对象结构（Object Structure）角色
export class ObjectStructure {

  private list = new Set<IElement>();

  accept(v: IVisitor) {
    this.list.forEach(i => {
      i.accept(v);
    });
  }


  add(el: IElement) {
    this.list.add(el);
  }

  remove(el: IElement) {
    this.list.delete(el);
  };


}
