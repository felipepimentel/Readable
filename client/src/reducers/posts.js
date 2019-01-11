import update from 'react-addons-update';
import {
    RECEIVE_POSTS,
    RECEIVE_POSTS_BY_CATEGORY,
    SORT_POST,
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
        case SORT_POST:
            return {
                ...state
                // actions.posts
            }
        case DELETE_POST:
            const newStateToUpdate = { ...state };
            console.log(newStateToUpdate[action.id], 'meu objeto')
            newStateToUpdate[action.id].deleted = true;

            return { ...newStateToUpdate };
        case UPDATE_POST:
            const newState = { ...state };
            newState[action.post.id].title = action.post.title;
            newState[action.post.id].body = action.post.body;
            newState[action.post.id].category = action.post.category;
            newState[action.post.id].voteScore = action.post.voteScore;

            return { ...newState };
        case ADD_COMMENT_TO_POST:
            const newStateToAddComment = { ...state };
            newStateToAddComment[action.id].commentCount = newStateToAddComment[action.id].commentCount + 1;
            return { ...newStateToAddComment };
        case REMOVE_COMMENT_TO_POST:
            const newStateToRemoveComment = { ...state };
            newStateToRemoveComment[action.id].commentCount = newStateToRemoveComment[action.id].commentCount - 1;
            return { ...newStateToRemoveComment };
        default:
            return state
    }
}