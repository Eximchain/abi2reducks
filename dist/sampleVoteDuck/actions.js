(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../reusable/actions", "./types"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var actions_1 = require("../reusable/actions");
    var types_1 = require("./types");
    var VoteActionTypes = actions_1.actionNames(types_1.VoteFxn);
    exports.setVoteParam = function (fieldName, value) {
        return {
            type: VoteActionTypes.SET,
            payload: { fieldName: fieldName, value: value }
        };
    };
    exports.submitVote = function () {
        return {
            type: VoteActionTypes.SUBMIT
        };
    };
});
//# sourceMappingURL=actions.js.map