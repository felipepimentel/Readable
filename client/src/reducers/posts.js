import { RECEIVE_POSTS, RECEIVE_POSTS_BY_CATEGORY, SORT_POST } from './../actions/posts';

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
        case SORT_POST:
            return {
                ...state
                // actions.posts
            }
        default:
            return state
    }
}