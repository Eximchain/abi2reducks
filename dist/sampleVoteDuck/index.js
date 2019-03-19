(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./reducers", "./selectors", "./actions", "./types"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var reducers_1 = require("./reducers");
    var voteSelectors = require("./selectors");
    exports.voteSelectors = voteSelectors;
    var voteActions = require("./actions");
    exports.voteActions = voteActions;
    var voteTypes = require("./types");
    exports.voteTypes = voteTypes;
    exports.default = reducers_1.default;
});
//# sourceMappingURL=index.js.map