"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyPattern = void 0;
var proxy_1 = require("./proxy");
/**
 * 代理模式
 */
var ProxyPattern = /** @class */ (function () {
    function ProxyPattern() {
    }
    ProxyPattern.prototype.show = function () {
        var subject = new proxy_1.Proxy();
        subject.request();
    };
    return ProxyPattern;
}());
exports.ProxyPattern = ProxyPattern;
