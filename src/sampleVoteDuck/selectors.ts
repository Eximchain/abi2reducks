import { VoteFxn } from './types';
import { dataSelectorFactory } from '../reusable/selectors';

const getVoteData = dataSelectorFactory(VoteFxn);

export { getVoteData }