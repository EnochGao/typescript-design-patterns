// 单列模式（singleton）:保证一个类仅有一个实例，并提供一个访问它的全局访问点
// 懒汉式&饿汉式
class LazySingleton {

  private static instance: LazySingleton;

  private constructor(public name: string) { }

  static getInstance(): LazySingleton {

    if (LazySingleton.instance === undefined) {
      LazySingleton.instance = new LazySingleton('懒汉式');
    }
    return LazySingleton.instance;
  }
}

class HungrySingleton {

  private static instance: HungrySingleton = new HungrySingleton('饿汉式');

  private constructor(public name: string) { }

  static getInstance(): HungrySingleton {
    return HungrySingleton.instance;
  }
}

export default function singletonMain() {
  console.log('懒汉式：：', LazySingleton.getInstance() === LazySingleton.getInstance());
  console.log('饿汉式：：', HungrySingleton.getInstance() === HungrySingleton.getInstance());
};
