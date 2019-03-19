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
    exports.actionNames = function (fxn) {
        return {
            SET: "fxn/" + fxn.name + "/set",
            SUBMIT: "fxn/" + fxn.name + "/submit"
        };
    };
    var WriteActionTypes;
    (function (WriteActionTypes) {
        WriteActionTypes["SET"] = "SET_FIELD";
        WriteActionTypes["START_SIGN"] = "START_SIGN";
        WriteActionTypes["RECEIVE_SIGN"] = "RECEIVE_SIGN";
        WriteActionTypes["SUBMIT"] = "SUBMIT";
        WriteActionTypes["ERROR"] = "ERROR";
        WriteActionTypes["RECEIPT"] = "RECEIPT";
    })(WriteActionTypes = exports.WriteActionTypes || (exports.WriteActionTypes = {}));
    var ReadActionTypes;
    (function (ReadActionTypes) {
        ReadActionTypes["SET"] = "SET_FIELD";
        ReadActionTypes["RESULT"] = "RESULT";
    })(ReadActionTypes = exports.ReadActionTypes || (exports.ReadActionTypes = {}));
    // SetFieldFactory is a factory which produces action creator
    // functions.  The functions it returns are ready to be used
    // with the Redux bindActionCreators method like so:
    //
    // this.actions = bindActionCreators({
    //   setVotingFor : SetFieldFactory('votingFor'),
    //   setAmount : SetFieldFactory('amount'),
    //   setElection : SetFieldFactory('election'),
    //   setInSupport : SetFieldFactory('inSupport')
    // }, dispatch)
    exports.SetFieldFactory = function (fieldName) {
        return function (value) {
            return {
                type: 'SET_FIELD',
                payload: { fieldName: fieldName, value: value }
            };
        };
    };
});
//# sourceMappingURL=actions.js.map