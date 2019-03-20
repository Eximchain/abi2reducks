import { MethodAbi } from 'ethereum-types';

export enum VoteParams {
    _voted_for = '_voted_for',
    _election = '_election',
    _inSupport = '_inSupport',
    _votes = '_votes'
}

export type VoteInput = {
    _voted_for : string
    _election: boolean
    _inSupport: boolean
    _votes: string
}

export type VoteState = {
    params : VoteInput,
    error : string | null
}

export const VoteFxn:MethodAbi = {
    "constant": false,
    "inputs": [
      {
        "name": "_voted_for",
        "type": "address"
      },
      {
        "name": "_election",
        "type": "bool"
      },
      {
        "name": "_inSupport",
        "type": "bool"
      },
      {
        "name": "_votes",
        "type": "uint16"
      }
    ],
    "name": "vote",
    "outputs": [
      {
        "name": "index",
        "type": "uint256"
      }
    ],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  }