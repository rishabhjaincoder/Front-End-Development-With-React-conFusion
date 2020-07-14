import * as ActionTypes from './ActionTypes';

// it is now responsibility of action creator to supply the information to dishes reducer
// import { DISHES } from '../shared/dishes';

// this is a reducer function which manages dishes state and we will combine all reducers using combineReducer function
export const Dishes = (state = {
    isLoading: true,
    errMess: null,
    dishes: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return { ...state, isLoading: false, errMess: null, dishes: action.payload };

        case ActionTypes.DISHES_LOADING:
            return { ...state, isLoading: true, errMess: null, dishes: [] }

        case ActionTypes.DISHES_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        default:
            return state;
    }
};