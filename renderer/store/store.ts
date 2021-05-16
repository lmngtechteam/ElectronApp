import {createStore, applyMiddleware, combineReducers} from 'redux'
import {HYDRATE, createWrapper} from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
import consultation from "./reducers/consultationReducer"
import contract from "./reducers/contractReducer"
import evaluation from "./reducers/evaluationReducer"
import main from "./reducers/mainReducer"
import document from './reducers/documentReducer'

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        const {composeWithDevTools} = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}

const combinedReducer = combineReducers({
    consultation,
    contract,
    evaluation,
    main,
    document
});

const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        if (action.payload.hasOwnProperty('consultation')) {
            if (action.payload.consultation.hasOwnProperty('selectedServiceType'))
                action.payload.consultation['selectedServiceType'] = state.consultation.selectedServiceType;
        }
        if (action.payload.hasOwnProperty('main')) {
            if (action.payload.main.hasOwnProperty('isMinimal'))
                action.payload.main['isMinimal'] = state.main.isMinimal;
        }
        const nextState = {
            ...state,
            ...action.payload,
        }
        return nextState
    } else {
        return combinedReducer(state, action)
    }
}


// const makeStore = context => createStore(reducer, bindMiddleware([thunkMiddleware]));
// export default makeStore
//
// export const wrapper = createWrapper(makeStore, {debug: true});


const store = createStore(reducer, bindMiddleware([thunkMiddleware]))
const initStore = () => {
    return store
};

export const wrapper = createWrapper(initStore)
export default store;