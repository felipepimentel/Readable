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
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    deleted: true
                }
            }

        case UPDATE_COMMENT:
            return {
                ...state,
                [action.comment.id]: {
                    ...state[action.comment.id],
                    body: action.comment.body,
                    voteScore: action.comment.voteScore
                }
            }

        default:
            return state
    }
}