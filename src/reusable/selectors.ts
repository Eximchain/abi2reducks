import { MethodAbi } from 'ethereum-types';
import { MethodState } from './types';
import Contract from '../Contract';

/**
 * Factory to produce a selector function which retrieves the `data` field
 * for a given ABI method.  Given the MethodAbi object, returns a function
 * which accepts a FxnState object and returns the function's data field
 * with the given parameters.
 * 
 * @param method:MethodAbi 
 */
export const dataSelectorFactory = (method:MethodAbi) => {
    let paramTypes = method.inputs.map(({type})=>type)
    let methodName = `${method.name}(${paramTypes.join(',')})`;
    return (state:MethodState) => {
        return Contract.methods[methodName](...method.inputs.map(
            ({name})=>{ state.params[name] }
        )).encodeABI();
    }
}