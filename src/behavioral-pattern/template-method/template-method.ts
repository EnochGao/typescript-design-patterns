/**
 * 模板方法（Template Method）模式的定义如下：定义一个操作中的算法骨架，而将算法的一些步骤延迟到子类中，
 * 使得子类可以不改变该算法结构的情况下重定义该算法的某些特定步骤。它是一种类行为型模式。
 *
 * 抽象类/抽象模板（Abstract Class）抽象模板类，负责给出一个算法的轮廓和骨架。它由一个模板方法和若干个基本方法构成。这些方法的定义如下
 *
 * 1 模板方法：定义了算法的骨架，按某种顺序调用其包含的基本方法。
 *
 * 2 基本方法：是整个算法中的一个步骤，包含以下几种类型。
 * - 抽象方法：在抽象类中声明，由具体子类实现。
 * - 具体方法：在抽象类中已经实现，在具体子类中可以继承或重写它。
 * - 钩子方法：在抽象类中已经实现，包括用于判断的逻辑方法和需要子类重写的空方法两种。
 *
 * 具体子类/具体实现（Concrete Class）
 * 具体实现类，实现抽象类中所定义的抽象方法和钩子方法，它们是一个顶级逻辑的一个组成步骤。
 */

/** 抽象类/抽象模板（Abstract Class） */
abstract class AbstractClass {
  abstract abstractMethod1(): void;
  abstract abstractMethod2(): void;

  specificMethod() {
    console.log('抽象类中的具体方法被调用...');
  }

  templateMethod() {
    this.specificMethod();
    this.abstractMethod1();
    this.abstractMethod2();
  }
}

/** 具体子类/具体实现 */
export class ConcreteClass extends AbstractClass {
  abstractMethod1(): void {
    console.log('子类中的具体方法Method1被调用...');
  }

  abstractMethod2(): void {
    console.log('子类中的具体方法Method2被调用...');
  }
}
