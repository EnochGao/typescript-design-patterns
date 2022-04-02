// 单列模式（singleton）:保证一个类仅有一个实例，并提供一个访问它的全局访问点
// 懒汉式&饿汉式
export class LazySingleton {

  private static instance: LazySingleton;

  private constructor(public name: string) { }

  static getInstance(): LazySingleton {

    if (LazySingleton.instance === undefined) {
      LazySingleton.instance = new LazySingleton('懒汉式');
    }
    return LazySingleton.instance;
  }
}

export class HungrySingleton {

  private static instance: HungrySingleton = new HungrySingleton('饿汉式');

  private constructor(public name: string) { }

  static getInstance(): HungrySingleton {
    return HungrySingleton.instance;
  }
}
