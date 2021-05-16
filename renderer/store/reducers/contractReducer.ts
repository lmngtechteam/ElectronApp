import {
    SET_CONTRACTS ,
} from '../actions/types';

import {
    IContract
} from "app/api/Contract";

export interface IContractSate {
    contracts?: IContract[]
}


export const initialState : IContractSate = {
    contracts: []
};

export default (state = initialState, action) => {
    const {type,payload} = action;

    switch (type) {

        case SET_CONTRACTS:
            return {
                ...state,
                contracts: payload,
            };


        default: {
            return state;
        }
    }
};
