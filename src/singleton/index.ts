import { Pattern } from "../index";
import { HungrySingleton, LazySingleton } from "./singleton";

export class SingletonPattern extends Pattern {
  show() {
    console.log('懒汉式：：', LazySingleton.getInstance() === LazySingleton.getInstance());
    console.log('饿汉式：：', HungrySingleton.getInstance() === HungrySingleton.getInstance());
  }
}