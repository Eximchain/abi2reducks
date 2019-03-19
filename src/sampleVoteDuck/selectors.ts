import { VoteFxn } from './types';
import { getDataFactory } from '../reusable/selectors';

const getVoteData = getDataFactory(VoteFxn);

export { getVoteData }