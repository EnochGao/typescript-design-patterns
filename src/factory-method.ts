// 工厂方法（Factory Method）: 定义一个用于创建对象的接口，让子类决定实例化哪个类。工厂方法使一个类的实例化延迟到其子类。
/*
   Product：抽象产品
   ConcreteProduct：具体产品
   Factory：抽象工厂
   ConcreteFactory：具体工厂
 */

interface Product {
  use(): void;
}
interface Factory {
  factoryMethod(): Product;
}

class ConcreteProduct implements Product {

  use(): void {
    console.log('product is used！');
  }

}
class ConcreteFactory implements Factory {
  factoryMethod(): Product {
    return new ConcreteProduct();
  }
}

export default function factoryMethodMain() {
  const factory: Factory = new ConcreteFactory();
  const product: Product = factory.factoryMethod();
  product.use();
  console.log('%c------------', 'color:green;font-size:18px');

};
