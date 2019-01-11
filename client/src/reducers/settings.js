import { SORT_LIST, INIT_SETTINGS } from './../actions/settings';

export default function settings(state = {}, action) {
    switch (action.type) {
        case SORT_LIST:
            return {
                state,
                sortBy: action.sortBy
            }
        case INIT_SETTINGS:
            return action.settings
        default:
            return state
    }
}