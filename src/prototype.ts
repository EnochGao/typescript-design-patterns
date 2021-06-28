// 原型（Prototype）模式的定义如下：用一个已经创建的实例作为原型，通过复制该原型对象来创建一个和原型相同或相似的新对象。

interface Prototype {
  clone(): Prototype;
}

class RealizeType implements Prototype {
  name: string = 'ZhangSan';
  clone(): Prototype {
    return Object.create(RealizeType.prototype, {
      name: {
        value: this.name
      }
    });
  }
}

export default function prototypeMain() {
  const prototype: Prototype = new RealizeType();
  const prototype1 = prototype.clone();
  console.log('prototype::', prototype);
  console.log('prototype1::', prototype1);
  console.log('prototype === prototype1::', prototype === prototype1);

  console.log('%c------------', 'color:green;font-size:18px');
};