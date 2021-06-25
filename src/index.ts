import singletonMain from './singleton';
console.group('单例模式');
singletonMain();
console.groupEnd();

import simpleFactoryMain from './simple-factory';
console.groupCollapsed('简单工厂');
simpleFactoryMain();
console.groupEnd();

import factoryMethodMain from './factory-method';
console.groupCollapsed('工厂方法');
factoryMethodMain();
console.groupEnd();

import abstractFactoryMain from './abstract-factory';
console.groupCollapsed('抽象工厂');
abstractFactoryMain();
console.groupEnd();
