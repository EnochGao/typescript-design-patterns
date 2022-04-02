// 将一个类的接口转换成客户希望的另外一个接口。Adapter模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作
/**
 * 目标（Target）接口：当前系统业务所期待的接口，它可以是抽象类或接口。
   适配者（Adaptee）类：它是被访问和适配的现存组件库中的组件接口。
   适配器（Adapter）类：它是一个转换器，通过继承或引用适配者的对象，把适配者接口转换成目标接口，让客户按目标接口的格式访问适配者。
*/

export interface Target {
  request(): void;
}

export class Adaptee {
  specificRequest() {
    console.log('specificRequest');
  };
}

// 类适配器
export class ClassAdapter extends Adaptee implements Target {
  request(): void {
    this.specificRequest();
  }
}
// 对象适配器
export class ObjectAdapter implements Target {
  constructor(private adaptee: Adaptee) {
  }
  request(): void {
    this.adaptee.specificRequest();
  }
}
