import { MethodAbi } from 'ethereum-types';
const merge = require('lodash.merge');
import { WriteActionTypes, WriteAction, ReadAction, ReadActionTypes } from './actions';
import { NumberTypeStrings, ByteTypeStrings } from './types';

const initialStateFromTypes = (fxn:MethodAbi) => {
    return { 
        params : fxn.inputs.reduce((state, input, i) => {
            let { type, name } = input;
            let fieldName = name || `arg${i}`;
            let initialValue;

            if (type === 'address'){
                initialValue = '0x'
            } else if (type === 'string'){
                initialValue = ''
            } else if (type === 'bool') {
                initialValue = true;
            } else if (NumberTypeStrings.includes(type)) {
                initialValue = '0'
            } else if (ByteTypeStrings.includes(type)){
                initialValue = ''
            } else {
                throw new Error(`initialStateFromTypes received a type it was not expecting: ${type}`);
            }

            state[fieldName] = initialValue;
            return state;
        }, {}) 
    };
}

const writeReducerFactory = (fxn: MethodAbi) => {
    const initialState = initialStateFromTypes(fxn);
    return (state=initialState, {type,payload}:WriteAction) => {
        switch (type){
            case (WriteActionTypes.SET):
                let newParamVal = {};
                // TODO: Incorporate type checking on new value
                newParamVal[payload.fieldName] = payload.value;
                // Note the spread operator, which expands the underlying
                // object so the value of `params` is the contents of 
                // newParamVal.
                return merge({}, state, { 
                    params : { ...newParamVal } 
                });
            case (WriteActionTypes.START_SIGN):
                return merge({}, state, { 
                    signing: true 
                })
            case (WriteActionTypes.RECEIVE_SIGN):
                return merge({}, state, { 
                    signing: false, 
                    signature: payload.signature 
                })
            case (WriteActionTypes.SUBMIT):
                return merge({}, state, { 
                    submitting : true 
                });
            case (WriteActionTypes.RECEIPT):
                return merge({}, state, { 
                    submitting : false, 
                    receipt : payload.receipt,
                    params : initialState.params
                })
            case (WriteActionTypes.ERROR):
                return merge({}, state, {
                    submitting : false,
                    error : payload.error
                })
            default:
                return state;
        }
    }
}

const readReducerFactory = (fxn: MethodAbi) => {
    const initialState = initialStateFromTypes(fxn);
    return (state=initialState, {type,payload}:ReadAction) => {
        switch (type){
            case (ReadActionTypes.SET):
                let newParamVal = {};
                // TODO: Incorporate type checking
                newParamVal[payload.fieldName] = payload.value;
                return merge({}, state, { 
                    params : { ...newParamVal }
                });
            case (ReadActionTypes.RESULT):
                return merge({}, state, { 
                    result : payload.result 
                });
        }
    }
}