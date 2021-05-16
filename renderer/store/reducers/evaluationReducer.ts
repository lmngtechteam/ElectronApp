import {IEvaluationBooking} from "../../app/api/Evaluation";
import {EvaluationActionTypes, SET_EVALUATION_BOOKING} from "../actions/types";

export interface IEvaluationState {
    booking?: IEvaluationBooking
}


export const initialState: IEvaluationState = {};

export default (state = initialState, action:EvaluationActionTypes) => {
    const {type, payload} = action;
    switch (type) {
        case SET_EVALUATION_BOOKING:
            return {
                ...state,
                booking: payload
            }
        default: {
            return state;
        }
    }
};
