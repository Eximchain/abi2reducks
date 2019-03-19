var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./actions", "./types"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var merge = require('lodash.merge');
    var actions_1 = require("./actions");
    var types_1 = require("./types");
    var initialStateFromTypes = function (fxn) {
        return {
            params: fxn.inputs.reduce(function (state, input, i) {
                var type = input.type, name = input.name;
                var fieldName = name || "arg" + i;
                var initialValue;
                if (type === 'address') {
                    initialValue = '0x';
                }
                else if (type === 'string') {
                    initialValue = '';
                }
                else if (type === 'bool') {
                    initialValue = true;
                }
                else if (types_1.NumberTypeStrings.includes(type)) {
                    initialValue = '0';
                }
                else if (types_1.ByteTypeStrings.includes(type)) {
                    initialValue = '';
                }
                else {
                    throw new Error("initialStateFromTypes received a type it was not expecting: " + type);
                }
                state[fieldName] = initialValue;
                return state;
            }, {}),
            error: null
        };
    };
    exports.fxnReducer = function (fxn) {
        var initialState = initialStateFromTypes(fxn);
        var typesByField = types_1.buildInputTypeMap(fxn);
        var actions = actions_1.actionNames(fxn);
        return function (state, _a) {
            if (state === void 0) { state = initialState; }
            var type = _a.type, payload = _a.payload;
            switch (type) {
                case (actions.SET):
                    var newVal = {};
                    var fieldName = payload.fieldName, value = payload.value;
                    var _b = types_1.cleanTypedValue(fieldName, typesByField[fieldName], value), cleanVal = _b[0], error = _b[1];
                    newVal[fieldName] = cleanVal;
                    if (error) {
                        return merge({}, state, { error: error });
                    }
                    else {
                        return merge({}, state, { params: __assign({}, newVal), error: null });
                    }
                case (actions.SUBMIT):
                    var errors = Object.keys(state.params).reduce(function (errs, name) {
                        var err = types_1.validateTypedValue(name, typesByField[name], state.params[name]);
                        if (err !== null)
                            errs.push(err.toString());
                        return errs;
                    }, []);
                    if (errors.length > 0) {
                        return merge({}, state, { error: errors });
                    }
                    else {
                        return merge({}, initialState);
                    }
                default:
                    return state;
            }
        };
    };
});
//# sourceMappingURL=reducers.js.map