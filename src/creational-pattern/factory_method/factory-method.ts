// 工厂方法（Factory Method）: 定义一个用于创建对象的接口，让子类决定实例化哪个类。工厂方法使一个类的实例化延迟到其子类。
/*
   Product：抽象产品
   ConcreteProduct：具体产品
   Factory：抽象工厂
   ConcreteFactory：具体工厂
 */

export interface Product {
  use(): void;
}
export interface Factory {
  factoryMethod(): Product;
}

class ConcreteProduct implements Product {

  use(): void {
    console.log('product is used！');
  }

}
export class ConcreteFactory implements Factory {
  factoryMethod(): Product {
    return new ConcreteProduct();
  }
}
