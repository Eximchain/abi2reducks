import { MethodAbi } from 'ethereum-types';
import { fxnSignature, FxnState } from './types';
import Contract from '../GeneratedContract';

/**
 * Factory to produce a selector function which retrieves the `data` field
 * for a given ABI method.  Given the MethodAbi object, returns a function
 * which accepts a FxnState object and returns the function's data field
 * with the given parameters.
 * @param fxn:MethodAbi 
 */
export const getDataFactory = (fxn:MethodAbi) => {
    let methodName = fxnSignature(fxn);
    return (state:FxnState) => {
        return Contract.methods[methodName](...fxn.inputs.map(({name})=>{
            return state.params[name];
        })).encodeABI();
    }
}