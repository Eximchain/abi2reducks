import { MethodAbi } from "ethereum-types";
import * as web3Utils from 'web3-utils';
const BigNum = require('bignumber.js');

export enum InputTypes {
    Address,
    Boolean,
    Bytes,
    Number,
    String
}

export enum Bytes {
    dynamic = "bytes",
    size1 = "bytes1",
    size2 = "bytes2",
    size3 = "bytes3",
    size4 = "bytes4",
    size5 = "bytes5",
    size6 = "bytes6",
    size7 = "bytes7",
    size8 = "bytes8",
    size9 = "bytes9",
    size10 = "bytes10",
    size11 = "bytes11",
    size12 = "bytes12",
    size13 = "bytes13",
    size14 = "bytes14",
    size15 = "bytes15",
    size16 = "bytes16",
    size17 = "bytes17",
    size18 = "bytes18",
    size19 = "bytes19",
    size20 = "bytes20",
    size21 = "bytes21",
    size22 = "bytes22",
    size23 = "bytes23",
    size24 = "bytes24",
    size25 = "bytes25",
    size26 = "bytes26",
    size27 = "bytes27",
    size28 = "bytes28",
    size29 = "bytes29",
    size30 = "bytes30",
    size31 = "bytes31",
    size32 = "bytes32"
}

export const ByteTypeStrings = Object.values(Bytes);

export type NumberTypes = Uints | Ints;

export enum Uints {
    base = "uint",
    size8 = "uint8",
    size16 = "uint16",
    size24 = "uint24",
    size32 = "uint32",
    size40 = "uint40",
    size48 = "uint48",
    size56 = "uint56",
    size64 = "uint64",
    size72 = "uint72",
    size80 = "uint80",
    size88 = "uint88",
    size96 = "uint96",
    size104 = "uint104",
    size112 = "uint112",
    size120 = "uint120",
    size128 = "uint128",
    size136 = "uint136",
    size144 = "uint144",
    size152 = "uint152",
    size160 = "uint160",
    size168 = "uint168",
    size176 = "uint176",
    size184 = "uint184",
    size192 = "uint192",
    size200 = "uint200",
    size208 = "uint208",
    size216 = "uint216",
    size224 = "uint224",
    size232 = "uint232",
    size240 = "uint240",
    size248 = "uint248",
    size256 = "uint256"
}

export enum Ints {
    base = "int",
    size8 = "int8",
    size16 = "int16",
    size24 = "int24",
    size32 = "int32",
    size40 = "int40",
    size48 = "int48",
    size56 = "int56",
    size64 = "int64",
    size72 = "int72",
    size80 = "int80",
    size88 = "int88",
    size96 = "int96",
    size104 = "int104",
    size112 = "int112",
    size120 = "int120",
    size128 = "int128",
    size136 = "int136",
    size144 = "int144",
    size152 = "int152",
    size160 = "int160",
    size168 = "int168",
    size176 = "int176",
    size184 = "int184",
    size192 = "int192",
    size200 = "int200",
    size208 = "int208",
    size216 = "int216",
    size224 = "int224",
    size232 = "int232",
    size240 = "int240",
    size248 = "int248",
    size256 = "int256"
}

export type FxnState = {
    params : any
    error : string[] | string | null
    value? : string
    result? : any
}

export type Action = {
    type: string
    payload: any
}

export const NumberTypeStrings = Object.values(Uints).concat(Object.values(Ints));

export const selectNumberType:(type:string)=>NumberTypes = (type:string) => {
    if (type.charAt(0) === 'u'){
        return Uints[type];
    } else if (type.charAt(0) === 'i'){
        return Ints[type];
    } else {
        throw new Error(`selectNumberType got a value it wasn't prepared for: ${type}`);
    }
}

export const selectInputType = (type:string) => {
    if (Object.values(NumberTypeStrings).includes(type)){
        return InputTypes.Number;
    } else if (Object.values(ByteTypeStrings).includes(type)){
        return InputTypes.Bytes;
    } else {
        switch (type) {
            case ('bool'):
                return InputTypes.Boolean;
            case ('string'):
                return InputTypes.String;
            case ('address'):
                return InputTypes.Address;
            default:
                throw new Error(`selectFieldType received a value it did not not how to handle: ${type}`);
        }
    }
}

export const buildInputTypeMap = (fxn:MethodAbi) => {
    return fxn.inputs.reduce((typeMap, {name, type}) => {
        typeMap[name] = type;
        return typeMap;
    }, {})
}

export const cleanTypedValue:(name:string,type:string,value:any)=>[any,string|null] = (type:string, value:any) => {
    if (Object.values(NumberTypeStrings).includes(type)){
        return [value.replace(/\D/g, ''), null];
    } else if (Object.values(ByteTypeStrings).includes(type)){
        if (web3Utils.isHexStrict(value)){
            return [value, null]
        } else {
            return [null, `${name} is byte data which must be encoded in hex, beginning with an 0x.`];
        }
    } else {
        switch (type) {
            case ('bool'):
                if (typeof value === 'boolean'){
                    return [value, null]
                } else {
                    return [null, `Provided value for ${name} was not a boolean.`]
                }
            case ('string'):
                if (typeof value === 'string'){
                    return [value, null]
                } else {
                    return [null, `Provided value for ${name} was not a string.`];
                }
            case ('address'):
                if (typeof value !== 'string'){
                    return [null, `Provided value for ${name} was not a string.`];
                } else if (value.length >= 2 && value.slice(0,2) !== '0x') {
                    return [null, `${name} is an address and must begin with 0x.`]
                } else if (value.length > 42) {
                    return [null, `${name} is an address; it is only 42 characters long, not ${value.length}.`];
                } else {
                    return [value, null]
                }
            default:
                throw new Error(`selectFieldType received a value it did not not how to handle: ${type}`);
        }
    }
}

export const validateTypedValue:(name:string, type:string,value:any)=>string | null = (name, type, value) => {
    if (Object.values(NumberTypeStrings).includes(type)){
        // validateNumber fxn to determine whether the size is appropriate.
        return validateNumber(name,type,value);
    } else if (Object.values(ByteTypeStrings).includes(type)){
        return web3Utils.isHexStrict(value) ? null : `${name} bytes must be encoded in hex, beginning with an 0x.`
    } else {
        switch (type) {
            case ('bool'):
                return typeof value === 'boolean' ? null : `${name} must be boolean, true or false.`
            case ('string'):
                return typeof value === 'string' ? null : `${name} must be a string, type was instead ${typeof value}.`;
            case ('address'):
                if (typeof value !== 'string') return `${name} must be an address string, type was instead ${typeof value}.`
                if (value.length !== 42 || value.slice(0,2) !== '0x') {
                    return `${name} must be a hex address; 42 characters total, beginning with 0x.`
                }
                if (web3Utils.isAddress(value.toLowerCase())){
                    return null;
                } else {
                    return `${name} was not a valid address, double-check you wrote it correctly.`
                }
            default:
                throw new Error(`selectFieldType received a value it did not not how to handle: ${type}`);
        }
    }
}

const validateNumber:(name:string,type:string,value:any)=>string | null = (name,type,value)=>{
    if (typeof value !== 'string'){
        return `${name} was not a string, its type was instead: ${value}.`;
    } else {
        const isSigned = type.charAt(0) === 'i';
        const numBits = /[0-9]/.test(type) ? parseInt(isSigned ? type.slice(3) : type.slice(4)) : 256;
        if (Object.values(Uints).includes(type)){
            let maxVal = new BigNum(2).exponentiatedBy(numBits);
            let val = new BigNum(value);
            return val.gte(0) && val.lte(maxVal) ? null : `${name} only accepts numbers between 0 and ${maxVal.toString()}.`
        } else if (Object.values(Ints).includes(type)){
            let maxMagnitude = new BigNum(2).exponentiatedBy(numBits - 1);
            let val = new BigNum(value);
            return val.gte(maxMagnitude.negated()) && val.lte(maxMagnitude) ? null : `${name} only accepts numbers between -${maxMagnitude} and ${maxMagnitude}.`;
        } else {
            return `validateNumber was given an unknown type for ${name}: ${type}`;
        }
    }
}

export const fxnSignature = (fxn:MethodAbi) => {
    let paramTypes = fxn.inputs.map(({type})=>type)
    return `${fxn.name}(${paramTypes.join(',')})`
}