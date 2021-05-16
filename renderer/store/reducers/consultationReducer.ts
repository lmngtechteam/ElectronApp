import {
    SET_CATEGORIES,
    SET_CHILD_CATEGORIES,
    SET_DIRECT_BOOKING,
    SET_DIRECT_BOOKING_DAYS,
    SET_DIRECT_BOOKING_PRICE_OF_TIMES,
    SET_DIRECT_BOOKING_TIME_RANGES,
    SET_COUNSELLORS, SET_SELECTED_CONSULTATION_SERVICE_TYPE, SET_FEEDBACKS

} from '../actions/types';
import {
    DirectBookingFlow,
    Category,
    DirectBookingPriceOfTime,
    DirectBookingDay,
    DirectBookingTimeRange, Counsellor, FeedBack
} from "app/api/Consultation";


export interface IConsultationSate {
    categories: Category[],
    directBooking: DirectBookingFlow,
    directBookingPriceOfTimes: DirectBookingPriceOfTime[],
    random: number,
    directBookingDays: DirectBookingDay[],
    directBookingTimeRanges: DirectBookingTimeRange[],
    counsellors: Counsellor[],
    selectedServiceType?: string,
    feedBacks?: FeedBack[],
    category?: Category
}


export const initialState : IConsultationSate = {
    categories: [],
    directBooking: {
        step: "",
    },
    directBookingPriceOfTimes: [],
    random: Math.random(),
    directBookingDays: [],
    directBookingTimeRanges: [],
    counsellors: [],
    selectedServiceType: '',
    feedBacks: [],

};

export default (state = initialState, action) => {
    const {type,payload} = action;

    switch (type) {
        case SET_CATEGORIES:
            return {
                ...state,
                categories: payload,
            };
        case SET_COUNSELLORS:
            return {
                ...state,
                counsellors: payload,
            };
        case SET_CHILD_CATEGORIES:
            return {
                ...state,
                categories: payload.categories,
                category: payload.category,
            };
        case SET_DIRECT_BOOKING:
            return {
                ...state,
                directBooking: payload,
                random: Math.random()
            };
        case SET_DIRECT_BOOKING_PRICE_OF_TIMES:
            return {
                ...state,
                directBookingPriceOfTimes: payload,
            };
        case SET_DIRECT_BOOKING_DAYS:
            return {
                ...state,
                directBookingDays: payload,
            };
        case SET_DIRECT_BOOKING_TIME_RANGES:
            return {
                ...state,
                directBookingTimeRanges: payload,
            };
        case SET_SELECTED_CONSULTATION_SERVICE_TYPE:
            return {
                ...state,
                selectedServiceType: payload,
            };
        case SET_FEEDBACKS:
            return {
                ...state,
                feedBacks: payload,
            };
        default: {
            return state;
        }
    }
};
