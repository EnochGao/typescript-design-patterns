/**
 * 外观（Facade）模式又叫作门面模式，是一种通过为多个复杂的子系统提供一个一致的接口，而使这些子系统更加容易被访问的模式。该模式对外有一个统一接口，
 * 外部应用程序不用关心内部子系统的具体细节，这样会大大降低应用程序的复杂度，提高了程序的可维护性
 *
 * - 1.外观（Facade）角色：为多个子系统对外提供一个共同的接口
 * - 2.子系统（Sub System）角色：实现系统的部分功能，客户可以通过外观角色访问它。
 * - 3.客户（Client）角色：通过一个外观角色访问各个子系统的功能
*/

// 子系统（Sub System）角色
class SubSystemA {
  public operation() {
    console.log("调用SubSystemA角色的方法operation()");
  }
}
// 子系统（Sub System）角色
class SubSystemB {
  public operation() {
    console.log("调用SubSystemB角色的方法operation()");
  }
}


// 外观（Facade）角色
export class Facade {

  private sa = new SubSystemA();
  private sb = new SubSystemB();

  wrapOperation() {
    this.sa.operation();
    this.sb.operation();
  }

}
