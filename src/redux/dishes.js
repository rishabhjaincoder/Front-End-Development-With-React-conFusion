import { DISHES } from '../shared/dishes';

// this is a reducer function which manages dishes state and we will combine all reducers using combineReducer function
export const Dishes = (state = DISHES, action) => {
    switch (action.type) {
        default:
            return state;
    }
}