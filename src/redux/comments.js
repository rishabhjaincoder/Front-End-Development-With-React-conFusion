import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

// reducer function for comments
export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            console.log("Comment: ", comment);
            // state.concat(comment) will create a copy of state object and then we can return it
            // concat is an immutable opeartion
            return state.concat(comment);

        default:
            return state;
    }
};