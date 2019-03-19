(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./types", "../reusable/selectors"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var types_1 = require("./types");
    var selectors_1 = require("../reusable/selectors");
    var getVoteData = selectors_1.getDataFactory(types_1.VoteFxn);
    exports.getVoteData = getVoteData;
});
//# sourceMappingURL=selectors.js.map