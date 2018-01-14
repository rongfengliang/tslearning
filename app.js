"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = /** @class */ (function () {
    function app(name) {
        this.name = name;
    }
    app.prototype.printname = function () {
        return this.name;
    };
    return app;
}());
exports.default = app;
