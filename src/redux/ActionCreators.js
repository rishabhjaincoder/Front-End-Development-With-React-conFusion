import * as ActionTypes from './ActionTypes';

// this function creates an action object and returns it
// action should contain type and payload
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});