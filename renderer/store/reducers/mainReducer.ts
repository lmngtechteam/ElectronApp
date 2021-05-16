import {ICompanyService, IPersonalService } from "../../app/api/Main";
import {
    MainActionTypes,
    SET_COMPANY_SERVICES,
    SET_PERSONAL_SERVICES,
    SET_MINIMAL, SET_ACCESS_TOKEN,
} from "../actions/types";


export interface IMainState {
    personalServices?: IPersonalService[],
    companyServices?: ICompanyService[],
    isMinimal?: boolean,
    accessToken?: string
}


export const initialState: IMainState = {
    personalServices: [],
    companyServices: [],
    isMinimal: false,
};

export default (state = initialState, action: MainActionTypes) => {
    const {type, payload} = action;
    switch (type) {
        case SET_PERSONAL_SERVICES:
            return {
                ...state,
                personalServices: action.payload
            };
        case SET_COMPANY_SERVICES:
            return {
                ...state,
                companyServices: action.payload
            };
        case SET_MINIMAL:
            return {
                ...state,
                isMinimal: action.payload
            }
        case SET_ACCESS_TOKEN:
            return {
                ...state,
                accessToken: action.payload
            }

        default: {
            return state;
        }
    }
};
