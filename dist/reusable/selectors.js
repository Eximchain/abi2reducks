(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../GeneratedContract"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GeneratedContract_1 = require("../GeneratedContract");
    /**
     * Factory to produce a selector function which retrieves the `data` field
     * for a given ABI method.  Given the MethodAbi object, returns a function
     * which accepts a FxnState object and returns the function's data field
     * with the given parameters.
     *
     * @param fxn:MethodAbi
     */
    exports.getDataFactory = function (fxn) {
        var paramTypes = fxn.inputs.map(function (_a) {
            var type = _a.type;
            return type;
        });
        var methodName = fxn.name + "(" + paramTypes.join(',') + ")";
        return function (state) {
            var _a;
            return (_a = GeneratedContract_1.default.methods)[methodName].apply(_a, fxn.inputs.map(function (_a) {
                var name = _a.name;
                state.params[name];
            })).encodeABI();
        };
    };
});
//# sourceMappingURL=selectors.js.map