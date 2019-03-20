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
    /**
     * Given the ABI for a method, return an object
     * with SET & SUBMIT action names which are scoped
     * to the method.
     *
     * @param fxn:MethodAbi
     */
    exports.actionNames = function (fxn) {
        return {
            SET: "fxn/" + fxn.name + "/set",
            SUBMIT: "fxn/" + fxn.name + "/submit"
        };
    };
});
//# sourceMappingURL=actions.js.map