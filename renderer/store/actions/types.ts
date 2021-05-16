import {
    Category,
    DirectBookingDay,
    DirectBookingFlow,
    DirectBookingPriceOfTime,
    DirectBookingTimeRange,
    Counsellor, FeedBack, IChildCategoryResponse
} from "app/api/Consultation";

import {IContract} from 'app/api/Contract';
import {IEvaluationBooking} from "../../app/api/Evaluation";
import {ICompanyService, IPersonalService} from "../../app/api/Main";

export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_CHILD_CATEGORIES = 'SET_CHILD_CATEGORIES';
export const SET_DIRECT_BOOKING = 'SET_DIRECT_BOOKING';
export const SET_DIRECT_BOOKING_PRICE_OF_TIMES = 'SET_DIRECT_BOOKING_PRICE_OF_TIMES';
export const SET_DIRECT_BOOKING_DAYS = 'SET_DIRECT_BOOKING_DAYS';
export const SET_DIRECT_BOOKING_TIME_RANGES = 'SET_DIRECT_BOOKING_TIME_RANGES';
export const SET_COUNSELLORS = 'SET_COUNSELLORS';
export const SET_SELECTED_CONSULTATION_SERVICE_TYPE = 'SET_SELECTED_CONSULTATION_SERVICE_TYPE';
export const SET_FEEDBACKS = 'SET_FEEDBACKS';
export const SET_CONTRACTS = 'SET_CONTRACTS';
export const SET_EVALUATION_BOOKING = 'SET_EVALUATION_BOOKING';
export const SET_PERSONAL_SERVICES = 'SET_PERSONAL_SERVICES';
export const SET_COMPANY_SERVICES = 'SET_COMPANY_SERVICES';
export const SET_CATEGORY = 'SET_CATEGORY';

export const SET_MINIMAL = 'SET_MINIMAL';
export const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN';

export const SET_OTHER_PARTIES = 'SET_OTHER_PARTIES';
export const REMOVE_OTHER_PARTIES = 'REMOVE_OTHER_PARTIES';

interface SetContracts {
    type: typeof SET_CONTRACTS
    payload: IContract[]
}

interface SetCategoriesAction {
    type: typeof SET_CATEGORIES
    payload: Category[]
}

interface SetChildCategoriesAction {
    type: typeof SET_CHILD_CATEGORIES
    payload: IChildCategoryResponse
}

interface SetDirectBookingAction {
    type: typeof SET_DIRECT_BOOKING
    payload: DirectBookingFlow
}

interface SetDirectBookingPriceOfTimesAction {
    type: typeof SET_DIRECT_BOOKING_PRICE_OF_TIMES
    payload: DirectBookingPriceOfTime[]
}

interface SetDirectBookingDaysAction {
    type: typeof SET_DIRECT_BOOKING_DAYS
    payload: DirectBookingDay[]
}

interface SetDirectBookingTimeRangesAction {
    type: typeof SET_DIRECT_BOOKING_TIME_RANGES
    payload: DirectBookingTimeRange[]
}

interface SetCounsellorsAction {
    type: typeof SET_COUNSELLORS
    payload: Counsellor[]
}

interface SetSelectedConsultationServiceTypeAction {
    type: typeof SET_SELECTED_CONSULTATION_SERVICE_TYPE
    payload: string
}

interface SetFeedBacksAction {
    type: typeof SET_FEEDBACKS
    payload: FeedBack[]
}

interface ISetEvaluationBooking {
    type: typeof SET_EVALUATION_BOOKING
    payload: IEvaluationBooking
}

interface ISetPersonalServices {
    type: typeof SET_PERSONAL_SERVICES
    payload: IPersonalService[]
}

interface ISetMinimalAction {
    type: typeof SET_MINIMAL
    payload: boolean
}


interface ISetCompanyServices {
    type: typeof SET_COMPANY_SERVICES
    payload: ICompanyService[]
}
interface ISetConsultation {
    type: typeof SET_CATEGORY
    payload: Category
}
interface ISetAccessToken {
    type: typeof SET_ACCESS_TOKEN,
    payload: string
}

export type ConsultationActionTypes =
    SetCategoriesAction
    | SetChildCategoriesAction
    | SetDirectBookingAction
    | SetDirectBookingPriceOfTimesAction
    | SetDirectBookingDaysAction
    | SetDirectBookingTimeRangesAction
    | SetCounsellorsAction
    | SetSelectedConsultationServiceTypeAction
    | SetFeedBacksAction
    | ISetConsultation;


export type ContractActionTypes = SetContracts;
export type EvaluationActionTypes = ISetEvaluationBooking;
export type MainActionTypes = ISetCompanyServices | ISetPersonalServices | ISetMinimalAction | ISetAccessToken;
