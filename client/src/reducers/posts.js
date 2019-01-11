import {
    RECEIVE_POSTS,
    RECEIVE_POSTS_BY_CATEGORY,
    ADD_POST,
    DELETE_POST,
    UPDATE_POST,
    ADD_COMMENT_TO_POST,
    REMOVE_COMMENT_TO_POST
} from './../actions/posts';


export default function posts(state = {}, action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            return {
                ...state,
                ...action.posts
            }
        case RECEIVE_POSTS_BY_CATEGORY:
            return {
                ...action.posts
            }
        case ADD_POST:
            return {
                ...state,
                [action.post.id]: action.post
            }
        case DELETE_POST:
            return {
                ...state,
                [action.id]:{
                    ...state[action.id],
                    deleted: true
                }
            }
        case UPDATE_POST:
            return { 
                ...state,
                [action.post.id]: {
                    ...state[action.post.id],
                    title: action.post.title,
                    body: action.post.body,
                    category: action.post.category,
                    voteScore: action.post.voteScore
                }
            } 
            
        case ADD_COMMENT_TO_POST:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    commentCount: state[action.id].commentCount + 1
                }
            }

        case REMOVE_COMMENT_TO_POST:
        return {
            ...state,
            [action.id]: {
                ...state[action.id],
                commentCount: state[action.id].commentCount - 1
            }
        }

        default:
            return state
    }
}