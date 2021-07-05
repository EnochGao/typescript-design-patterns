console.group('创建型');

console.groupCollapsed('单例模式');
import singletonMain from './singleton';
singletonMain();
console.groupEnd();

console.groupCollapsed('简单工厂');
import simpleFactoryMain from './simple-factory';
simpleFactoryMain();
console.groupEnd();

console.groupCollapsed('工厂方法');
import factoryMethodMain from './factory-method';
factoryMethodMain();
console.groupEnd();

console.groupCollapsed('抽象工厂');
import abstractFactoryMain from './abstract-factory';
abstractFactoryMain();
console.groupEnd();

console.groupCollapsed('建造者');
import builderClientMain from './builder';
builderClientMain();
console.groupEnd();

console.groupCollapsed('原型模式');
import prototypeMain from './prototype';
prototypeMain();
console.groupEnd();

console.groupEnd();





console.group('结构型');


console.groupCollapsed('适配器模式');
import adapterMain from './adapter';
adapterMain();
console.groupEnd();

console.groupCollapsed('桥接模式');
import bridgeMain from './bridge';
bridgeMain();
console.groupEnd();



console.groupEnd();