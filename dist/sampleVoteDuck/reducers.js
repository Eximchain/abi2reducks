(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../reusable/reducers", "./types"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var reducers_1 = require("../reusable/reducers");
    var types_1 = require("./types");
    exports.VoteReducer = reducers_1.fxnReducer(types_1.VoteFxn);
    exports.default = exports.VoteReducer;
});
//# sourceMappingURL=reducers.js.map