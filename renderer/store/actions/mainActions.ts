import {MainActionTypes, SET_COMPANY_SERVICES, SET_PERSONAL_SERVICES, SET_MINIMAL, SET_ACCESS_TOKEN} from "./types";
import {getCompanyServices, getPersonalServices} from "../../app/api/Main";

export const setMinimal = (payload) => async (dispatch): Promise<MainActionTypes> => {
    return dispatch({
        type: SET_MINIMAL,
        payload
    })
};

export const setPersonalServices = () => async (dispatch): Promise<MainActionTypes> => {
    const res = await getPersonalServices();

    return dispatch({
        type: SET_PERSONAL_SERVICES,
        payload: res
    })
};

export const setCompanyServices = () => async (dispatch): Promise<MainActionTypes> => {
    const res = await getCompanyServices();
    return dispatch({
        type: SET_COMPANY_SERVICES,
        payload: res
    })
};

export const setAccessToken = (accessToken:string) => async (dispatch): Promise<MainActionTypes> => {
    return dispatch({
        type: SET_ACCESS_TOKEN,
        payload: accessToken
    })
};
