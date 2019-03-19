import {} from 'redux';
import { MethodAbi } from 'ethereum-types';

export const actionNames = (fxn:MethodAbi) => {
    return {
        SET : `fxn/${fxn.name}/set`,
        SUBMIT: `fxn/${fxn.name}/submit`
    }
}

export enum WriteActionTypes {
    SET = 'SET_FIELD',
    START_SIGN = 'START_SIGN',
    RECEIVE_SIGN = 'RECEIVE_SIGN',
    SUBMIT = 'SUBMIT',
    ERROR = 'ERROR',
    RECEIPT = 'RECEIPT'
}

export enum ReadActionTypes {
    SET = 'SET_FIELD',
    RESULT = 'RESULT'
}

export type SetActionPayload = {
    fieldName: string
    value: string | boolean
}

export type WriteSetAction = {
    type : WriteActionTypes.SET
    payload : SetActionPayload | any
}

export type WriteAction = WriteSetAction | {
    type : WriteActionTypes
    payload : any
}

export type ReadAction = {
    type : ReadActionTypes
    payload : SetActionPayload | any
}

export type TxAction = {
    type: WriteActionTypes | ReadActionTypes
    payload: any
}

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
export const SetFieldFactory = (fieldName:string) => {
    return (value:any) => {
        return {
            type : 'SET_FIELD',
            payload : { fieldName, value }
        }
    }
}