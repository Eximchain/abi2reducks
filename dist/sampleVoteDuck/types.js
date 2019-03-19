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
    var VoteParams;
    (function (VoteParams) {
        VoteParams["_voted_for"] = "_voted_for";
        VoteParams["_election"] = "_election";
        VoteParams["_inSupport"] = "_inSupport";
        VoteParams["_votes"] = "_votes";
    })(VoteParams = exports.VoteParams || (exports.VoteParams = {}));
    exports.VoteFxn = {
        "constant": false,
        "inputs": [
            {
                "name": "_voted_for",
                "type": "address"
            },
            {
                "name": "_election",
                "type": "bool"
            },
            {
                "name": "_inSupport",
                "type": "bool"
            },
            {
                "name": "_votes",
                "type": "uint16"
            }
        ],
        "name": "vote",
        "outputs": [
            {
                "name": "index",
                "type": "uint256"
            }
        ],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    };
});
//# sourceMappingURL=types.js.map