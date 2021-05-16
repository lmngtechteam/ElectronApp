import {
    SET_OTHER_PARTIES ,
    REMOVE_OTHER_PARTIES
} from '../actions/types';

export interface IDocument {
    otherParties?: {email:string, name:string, family:string , id}[]
}

export const initialState : IDocument = {
    otherParties: []
};

export default (state = initialState, action) => {
    const {type,payload} = action;

    switch (type) {

        case SET_OTHER_PARTIES:
            return {
                ...state,
                otherParties: payload,
            };

        case REMOVE_OTHER_PARTIES:{
            return {
                ...state,
                otherParties: [],
            }
        }

        default: {
            return state;
        }
    }
};
