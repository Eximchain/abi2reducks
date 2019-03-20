import {} from 'redux';
import { MethodAbi } from 'ethereum-types';

/**
 * Given the ABI for a method, return an object
 * with SET & SUBMIT action names which are scoped
 * to the method.
 * 
 * @param fxn:MethodAbi
 */
export const actionNames = (fxn:MethodAbi) => {
    return {
        SET : `fxn/${fxn.name}/set`,
        SUBMIT: `fxn/${fxn.name}/submit`
    }
}