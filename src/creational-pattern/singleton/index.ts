import { Pattern } from "../../index";
import { HungrySingleton, LazySingleton } from "./singleton";
/**
 * @description 单例模式
 */
export class SingletonPattern implements Pattern{
  show() {
    console.log('懒汉式：：', LazySingleton.getInstance() === LazySingleton.getInstance());
    console.log('饿汉式：：', HungrySingleton.getInstance() === HungrySingleton.getInstance());
  }
}