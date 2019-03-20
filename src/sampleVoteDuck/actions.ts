import { actionNames } from '../reusable/actions';
import { ParamValue } from '../reusable/types';
import { VoteFxn, VoteParams } from './types';

const VoteActionTypes = actionNames(VoteFxn);

export const setVoteParam = (fieldName:VoteParams, value:ParamValue) => {
    return {
        type : VoteActionTypes.SET,
        payload : { fieldName, value }
    }
}

export const submitVote = () => {
    return {
        type : VoteActionTypes.SUBMIT
    }
}