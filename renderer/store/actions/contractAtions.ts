import {
    getContracts,
    searchContract
} from "app/api/Contract";

import {
    ContractActionTypes,
    SET_CONTRACTS,
} from "./types";

export const setContracts = () => async (dispatch): Promise<ContractActionTypes> => {
    const res = await getContracts();
    return dispatch({
        type: SET_CONTRACTS,
        payload: res
    })
};