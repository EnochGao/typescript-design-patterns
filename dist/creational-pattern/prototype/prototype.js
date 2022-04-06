"use strict";
// 原型（Prototype）模式的定义如下：用一个已经创建的实例作为原型，通过复制该原型对象来创建一个和原型相同或相似的新对象。
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealizeType = void 0;
var RealizeType = /** @class */ (function () {
    function RealizeType() {
        this.name = 'ZhangSan';
    }
    RealizeType.prototype.clone = function () {
        return Object.create(RealizeType.prototype, {
            name: {
                value: this.name
            }
        });
    };
    return RealizeType;
}());
exports.RealizeType = RealizeType;
