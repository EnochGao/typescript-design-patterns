/**
 * 享元（Flyweight）模式的定义：运用共享技术来有效地支持大量细粒度对象的复用。
 * 它通过共享已经存在的对象来大幅度减少需要创建的对象数量、避免大量相似类的开销，从而提高系统资源的利用率。
 *
 * - 1.抽象享元角色（Flyweight）：是所有的具体享元类的基类，为具体享元规范需要实现的公共接口，非享元的外部状态以参数的形式通过方法传入。
 * - 2.具体享元（Concrete Flyweight）角色：实现抽象享元角色中所规定的接口。
 * - 3.非享元（UnSharable Flyweight)角色：是不可以共享的外部状态，它以参数的形式注入具体享元的相关方法中。
 * - 4.享元工厂（Flyweight Factory）角色：负责创建和管理享元角色。当客户对象请求一个享元对象时，享元工厂检査系统中是否存在符合要求的享元对象，
 * 如果存在则提供给客户；如果不存在的话，则创建一个新的享元对象。
*/


// 非享元抽象角色
interface IUnSharableFlyweight {
  // new(key: string): any;
  getInfo(): string;
}

// 享元抽象角色
interface IFlyweight {
  operation(c: IUnSharableFlyweight): void;
}

// 具体享元角色
export class ConcreteFlyweight implements IFlyweight {

  constructor(private key: string) { }

  operation(c: IUnSharableFlyweight): void {
    console.log(`具体享元${this.key}被调用`);
    console.log(`非享元信息是`, c.getInfo());
  }
}

// 非享元角色
export class UnSharableFlyweight implements IUnSharableFlyweight {

  constructor(private info: string) {
  }

  getInfo() {
    return this.info;
  }

}

// 享元工厂（Flyweight Factory）角色
export class FlyweightFactory {
  flyweights: Map<string, IFlyweight> = new Map();

  getFlyWeight(key: string): IFlyweight {

    const fw = this.flyweights.has(key);
    if (!fw) {
      this.flyweights.set(key, new ConcreteFlyweight(key));
    }

    return this.flyweights.get(key);

  }

}
