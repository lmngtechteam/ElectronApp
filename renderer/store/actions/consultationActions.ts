import {
    DirectBookingFlow,
    getCategories,
    getChildCategories,
    getDirectBookingDays,
    getDirectBookingPriceOfTimes, getDirectBookingTimeRanges,
    getCounsellors, getFeedBacks
} from "app/api/Consultation";
import {
    ConsultationActionTypes,
    SET_CATEGORIES,
    SET_CHILD_CATEGORIES,
    SET_DIRECT_BOOKING,
    SET_DIRECT_BOOKING_DAYS,
    SET_DIRECT_BOOKING_PRICE_OF_TIMES,
    SET_DIRECT_BOOKING_TIME_RANGES,
    SET_COUNSELLORS, SET_FEEDBACKS,  SET_SELECTED_CONSULTATION_SERVICE_TYPE,
} from "./types";

export const setCategories = () => async (dispatch): Promise<ConsultationActionTypes> => {
    const res = await getCategories();
    return dispatch({
        type: SET_CATEGORIES,
        payload: res
    })
};

export const setChildCategories = (id) => async (dispatch): Promise<ConsultationActionTypes> => {
    const res = await getChildCategories(id);

    return dispatch({
        type: SET_CHILD_CATEGORIES,
        payload: {
            categories: res.categories,
            category: res.category
        }
    })
};

export const setDirectBooking = (directBooking: DirectBookingFlow) => async (dispatch): Promise<ConsultationActionTypes> => {
    return dispatch({
        type: SET_DIRECT_BOOKING,
        payload: directBooking
    })
};

export const setDirectBookingPriceOfTimes = () => async (dispatch): Promise<ConsultationActionTypes> => {
    return dispatch({
        type: SET_DIRECT_BOOKING_PRICE_OF_TIMES,
        payload: await getDirectBookingPriceOfTimes()
    })
};

export const setDirectBookingDays = (params) => async (dispatch): Promise<ConsultationActionTypes> => {
    return dispatch({
        type: SET_DIRECT_BOOKING_DAYS,
        payload: await getDirectBookingDays(params)
    })
};
export const setDirectBookingTimeRanges = (day) => async (dispatch): Promise<ConsultationActionTypes> => {
    const data = await getDirectBookingTimeRanges(day);
    return dispatch({
        type: SET_DIRECT_BOOKING_TIME_RANGES,
        payload:data
    })
};

export const setCounsellors = (params = {}) => async (dispatch): Promise<ConsultationActionTypes> => {
    console.log(params)
    const res = await getCounsellors(params);
    return dispatch({
        type: SET_COUNSELLORS,
        payload: res
    })
};

export const setSelectedServiceType = (serviceType) => async (dispatch): Promise<ConsultationActionTypes> => {
     return await dispatch({
        type: SET_SELECTED_CONSULTATION_SERVICE_TYPE,
        payload: serviceType
     })
};

export const setFeedbacks = () => async (dispatch): Promise<ConsultationActionTypes> => {
    const res = await getFeedBacks();
    return dispatch({
        type: SET_FEEDBACKS,
        payload: res
    })
};
