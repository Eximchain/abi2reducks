(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../Contract"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Contract_1 = require("../Contract");
    /**
     * Factory to produce a selector function which retrieves the `data` field
     * for a given ABI method.  Given the MethodAbi object, returns a function
     * which accepts a FxnState object and returns the function's data field
     * with the given parameters.
     *
     * @param method:MethodAbi
     */
    exports.dataSelectorFactory = function (method) {
        var paramTypes = method.inputs.map(function (_a) {
            var type = _a.type;
            return type;
        });
        var methodName = method.name + "(" + paramTypes.join(',') + ")";
        return function (state) {
            var _a;
            return (_a = Contract_1.default.methods)[methodName].apply(_a, method.inputs.map(function (_a) {
                var name = _a.name;
                state.params[name];
            })).encodeABI();
        };
    };
});
//# sourceMappingURL=selectors.js.map