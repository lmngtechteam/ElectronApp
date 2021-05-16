import {IEvaluationBooking} from "../../app/api/Evaluation";
import {EvaluationActionTypes, SET_EVALUATION_BOOKING} from "./types";

export const setEvaluationBooking = (evaluationBooking: IEvaluationBooking) => (dispatch): EvaluationActionTypes => {
    return dispatch({
        type: SET_EVALUATION_BOOKING,
        payload: evaluationBooking
    })
};
