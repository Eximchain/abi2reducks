(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "web3-utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var web3Utils = require("web3-utils");
    var BigNum = require('bignumber.js');
    var InputTypes;
    (function (InputTypes) {
        InputTypes[InputTypes["Address"] = 0] = "Address";
        InputTypes[InputTypes["Boolean"] = 1] = "Boolean";
        InputTypes[InputTypes["Bytes"] = 2] = "Bytes";
        InputTypes[InputTypes["Number"] = 3] = "Number";
        InputTypes[InputTypes["String"] = 4] = "String";
    })(InputTypes = exports.InputTypes || (exports.InputTypes = {}));
    var Bytes;
    (function (Bytes) {
        Bytes["dynamic"] = "bytes";
        Bytes["size1"] = "bytes1";
        Bytes["size2"] = "bytes2";
        Bytes["size3"] = "bytes3";
        Bytes["size4"] = "bytes4";
        Bytes["size5"] = "bytes5";
        Bytes["size6"] = "bytes6";
        Bytes["size7"] = "bytes7";
        Bytes["size8"] = "bytes8";
        Bytes["size9"] = "bytes9";
        Bytes["size10"] = "bytes10";
        Bytes["size11"] = "bytes11";
        Bytes["size12"] = "bytes12";
        Bytes["size13"] = "bytes13";
        Bytes["size14"] = "bytes14";
        Bytes["size15"] = "bytes15";
        Bytes["size16"] = "bytes16";
        Bytes["size17"] = "bytes17";
        Bytes["size18"] = "bytes18";
        Bytes["size19"] = "bytes19";
        Bytes["size20"] = "bytes20";
        Bytes["size21"] = "bytes21";
        Bytes["size22"] = "bytes22";
        Bytes["size23"] = "bytes23";
        Bytes["size24"] = "bytes24";
        Bytes["size25"] = "bytes25";
        Bytes["size26"] = "bytes26";
        Bytes["size27"] = "bytes27";
        Bytes["size28"] = "bytes28";
        Bytes["size29"] = "bytes29";
        Bytes["size30"] = "bytes30";
        Bytes["size31"] = "bytes31";
        Bytes["size32"] = "bytes32";
    })(Bytes = exports.Bytes || (exports.Bytes = {}));
    exports.ByteTypeStrings = Object.values(Bytes);
    var Uints;
    (function (Uints) {
        Uints["base"] = "uint";
        Uints["size8"] = "uint8";
        Uints["size16"] = "uint16";
        Uints["size24"] = "uint24";
        Uints["size32"] = "uint32";
        Uints["size40"] = "uint40";
        Uints["size48"] = "uint48";
        Uints["size56"] = "uint56";
        Uints["size64"] = "uint64";
        Uints["size72"] = "uint72";
        Uints["size80"] = "uint80";
        Uints["size88"] = "uint88";
        Uints["size96"] = "uint96";
        Uints["size104"] = "uint104";
        Uints["size112"] = "uint112";
        Uints["size120"] = "uint120";
        Uints["size128"] = "uint128";
        Uints["size136"] = "uint136";
        Uints["size144"] = "uint144";
        Uints["size152"] = "uint152";
        Uints["size160"] = "uint160";
        Uints["size168"] = "uint168";
        Uints["size176"] = "uint176";
        Uints["size184"] = "uint184";
        Uints["size192"] = "uint192";
        Uints["size200"] = "uint200";
        Uints["size208"] = "uint208";
        Uints["size216"] = "uint216";
        Uints["size224"] = "uint224";
        Uints["size232"] = "uint232";
        Uints["size240"] = "uint240";
        Uints["size248"] = "uint248";
        Uints["size256"] = "uint256";
    })(Uints = exports.Uints || (exports.Uints = {}));
    var Ints;
    (function (Ints) {
        Ints["base"] = "int";
        Ints["size8"] = "int8";
        Ints["size16"] = "int16";
        Ints["size24"] = "int24";
        Ints["size32"] = "int32";
        Ints["size40"] = "int40";
        Ints["size48"] = "int48";
        Ints["size56"] = "int56";
        Ints["size64"] = "int64";
        Ints["size72"] = "int72";
        Ints["size80"] = "int80";
        Ints["size88"] = "int88";
        Ints["size96"] = "int96";
        Ints["size104"] = "int104";
        Ints["size112"] = "int112";
        Ints["size120"] = "int120";
        Ints["size128"] = "int128";
        Ints["size136"] = "int136";
        Ints["size144"] = "int144";
        Ints["size152"] = "int152";
        Ints["size160"] = "int160";
        Ints["size168"] = "int168";
        Ints["size176"] = "int176";
        Ints["size184"] = "int184";
        Ints["size192"] = "int192";
        Ints["size200"] = "int200";
        Ints["size208"] = "int208";
        Ints["size216"] = "int216";
        Ints["size224"] = "int224";
        Ints["size232"] = "int232";
        Ints["size240"] = "int240";
        Ints["size248"] = "int248";
        Ints["size256"] = "int256";
    })(Ints = exports.Ints || (exports.Ints = {}));
    exports.NumberTypeStrings = Object.values(Uints).concat(Object.values(Ints));
    exports.selectNumberType = function (type) {
        if (type.charAt(0) === 'u') {
            return Uints[type];
        }
        else if (type.charAt(0) === 'i') {
            return Ints[type];
        }
        else {
            throw new Error("selectNumberType got a value it wasn't prepared for: " + type);
        }
    };
    exports.selectInputType = function (type) {
        if (Object.values(exports.NumberTypeStrings).includes(type)) {
            return InputTypes.Number;
        }
        else if (Object.values(exports.ByteTypeStrings).includes(type)) {
            return InputTypes.Bytes;
        }
        else {
            switch (type) {
                case ('bool'):
                    return InputTypes.Boolean;
                case ('string'):
                    return InputTypes.String;
                case ('address'):
                    return InputTypes.Address;
                default:
                    throw new Error("selectFieldType received a value it did not not how to handle: " + type);
            }
        }
    };
    exports.buildInputTypeMap = function (fxn) {
        return fxn.inputs.reduce(function (typeMap, _a) {
            var name = _a.name, type = _a.type;
            typeMap[name] = type;
            return typeMap;
        }, {});
    };
    exports.cleanTypedValue = function (type, value) {
        if (Object.values(exports.NumberTypeStrings).includes(type)) {
            return [value.replace(/\D/g, ''), null];
        }
        else if (Object.values(exports.ByteTypeStrings).includes(type)) {
            if (web3Utils.isHexStrict(value)) {
                return [value, null];
            }
            else {
                return [null, name + " is byte data which must be encoded in hex, beginning with an 0x."];
            }
        }
        else {
            switch (type) {
                case ('bool'):
                    if (typeof value === 'boolean') {
                        return [value, null];
                    }
                    else {
                        return [null, "Provided value for " + name + " was not a boolean."];
                    }
                case ('string'):
                    if (typeof value === 'string') {
                        return [value, null];
                    }
                    else {
                        return [null, "Provided value for " + name + " was not a string."];
                    }
                case ('address'):
                    if (typeof value !== 'string') {
                        return [null, "Provided value for " + name + " was not a string."];
                    }
                    else if (value.length >= 2 && value.slice(0, 2) !== '0x') {
                        return [null, name + " is an address and must begin with 0x."];
                    }
                    else if (value.length > 42) {
                        return [null, name + " is an address; it is only 42 characters long, not " + value.length + "."];
                    }
                    else {
                        return [value, null];
                    }
                default:
                    throw new Error("selectFieldType received a value it did not not how to handle: " + type);
            }
        }
    };
    exports.validateTypedValue = function (name, type, value) {
        if (Object.values(exports.NumberTypeStrings).includes(type)) {
            // validateNumber fxn to determine whether the size is appropriate.
            return validateNumber(name, type, value);
        }
        else if (Object.values(exports.ByteTypeStrings).includes(type)) {
            return web3Utils.isHexStrict(value) ? null : name + " bytes must be encoded in hex, beginning with an 0x.";
        }
        else {
            switch (type) {
                case ('bool'):
                    return typeof value === 'boolean' ? null : name + " must be boolean, true or false.";
                case ('string'):
                    return typeof value === 'string' ? null : name + " must be a string, type was instead " + typeof value + ".";
                case ('address'):
                    if (typeof value !== 'string')
                        return name + " must be an address string, type was instead " + typeof value + ".";
                    if (value.length !== 42 || value.slice(0, 2) !== '0x') {
                        return name + " must be a hex address; 42 characters total, beginning with 0x.";
                    }
                    if (web3Utils.isAddress(value.toLowerCase())) {
                        return null;
                    }
                    else {
                        return name + " was not a valid address, double-check you wrote it correctly.";
                    }
                default:
                    throw new Error("selectFieldType received a value it did not not how to handle: " + type);
            }
        }
    };
    var validateNumber = function (name, type, value) {
        if (typeof value !== 'string') {
            return name + " was not a string, its type was instead: " + value + ".";
        }
        else {
            var isSigned = type.charAt(0) === 'i';
            var numBits = /[0-9]/.test(type) ? parseInt(isSigned ? type.slice(3) : type.slice(4)) : 256;
            if (Object.values(Uints).includes(type)) {
                var maxVal = new BigNum(2).exponentiatedBy(numBits);
                var val = new BigNum(value);
                return val.gte(0) && val.lte(maxVal) ? null : name + " only accepts numbers between 0 and " + maxVal.toString() + ".";
            }
            else if (Object.values(Ints).includes(type)) {
                var maxMagnitude = new BigNum(2).exponentiatedBy(numBits - 1);
                var val = new BigNum(value);
                return val.gte(maxMagnitude.negated()) && val.lte(maxMagnitude) ? null : name + " only accepts numbers between -" + maxMagnitude + " and " + maxMagnitude + ".";
            }
            else {
                return "validateNumber was given an unknown type for " + name + ": " + type;
            }
        }
    };
    exports.fxnSignature = function (fxn) {
        var paramTypes = fxn.inputs.map(function (_a) {
            var type = _a.type;
            return type;
        });
        return fxn.name + "(" + paramTypes.join(',') + ")";
    };
});
//# sourceMappingURL=types.js.map