import { RECEIVE_COMMENTS, ADD_COMMENT, DELETE_COMMENT, UPDATE_COMMENT } from './../actions/comments'

export default function comments(state = {}, action) {
    switch (action.type) {
        case RECEIVE_COMMENTS:
            return {
                ...state,
                ...action.comments
            }
        case ADD_COMMENT:
            return {
                ...state,
                [action.comment.id]: action.comment
            }
        case DELETE_COMMENT:
            const newStateToUpdate = { ...state };
            newStateToUpdate[action.id].deleted = true;
            return { ...newStateToUpdate };
        case UPDATE_COMMENT:
            const newState = { ...state };
            newState[action.comment.id].body = action.comment.body;
            newState[action.comment.id].voteScore = action.comment.voteScore;
            return { ...newState };
        default:
            return state
    }
}