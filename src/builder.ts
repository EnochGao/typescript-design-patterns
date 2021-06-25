// 造者模式(Builder Pattern)：将一个复杂对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表示。
/*
Builder：抽象建造者
ConcreteBuilder：具体建造者
Director：指挥者
Product：产品角色
*/

class Product {
  A: string;
  B: string;
}

interface Builder {
  buildPartA(): void;
  buildPartB(): void;
  getProduct(): Product;
}

class ConcreteBuilder implements Builder {
  product: Product;
  constructor() {
    this.product = new Product();
  }

  buildPartA(): void {
    this.product.A = 'A';
  }
  buildPartB(): void {
    this.product.B = 'B';
  }
  getProduct(): Product {
    return this.product;
  }
}

class Director {
  builder: Builder;

  setBuilder(builder: Builder) {
    this.builder = builder;
  }

  getProduct() {
    this.builder.buildPartA();
    this.builder.buildPartB();
    return this.builder.getProduct();
  }
}


export default function builderClientMain() {
  const builder: Builder = new ConcreteBuilder();
  const director = new Director();
  director.setBuilder(builder);
  const product = director.getProduct();
  console.log('product::', product);

  console.log('%c------------', 'color:green;font-size:18px');
};