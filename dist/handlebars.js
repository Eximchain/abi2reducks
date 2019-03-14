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
    var Handlebars = require("handlebars");
    Handlebars.registerHelper({
        logconsole: function () {
            var args = Array.prototype.slice.call(arguments);
            console.log(args.splice(args.length - 1));
        },
        upper: function (input) {
            return input.toUpperCase();
        },
        camelCase: function (input) {
            return input.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
                return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
            }).replace(/\s+/g, '');
        },
        pascalCase: function (input) {
            return input.replace(/(\w)(\w*)/g, function (g0, g1, g2) { return g1.toUpperCase() + g2.toLowerCase(); });
        },
        inputList: function (inputs) {
            return inputs.map(function (input) { return input.name !== "" ? input.name : input.type; }).join(', ');
        },
        inputSpread: function (inputs) {
            if (inputs.length > 0)
                return ', ' + inputs.map(function (input) { return input.name !== "" ? input.name : input.type; }).join(', ');
            return '';
        }
    });
    exports.default = Handlebars;
});
//# sourceMappingURL=handlebars.js.map