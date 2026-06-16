(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.greet = greet;
    exports.sub = sub;
    function greet(name) {
        return `Hello, ${name}! This is from the library.`;
    }
    function sub(a, b) {
        return a - b;
    }
});
