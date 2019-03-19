import { VoteParams } from './types';
import { actionNames } from '../reusable/actions';
import { VoteFxn } from './types';

const VoteActionTypes = actionNames(VoteFxn);

export const setVoteParam = (fieldName:VoteParams, value:string|boolean|Number) => {
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