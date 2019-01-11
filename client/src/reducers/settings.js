import { SORT_LIST, INIT_SETTINGS, INIT_SYSTEM } from './../actions/settings';

export default function settings(state = {}, action) {
    switch (action.type) {
        case SORT_LIST:
            return {
                state,
                sortBy: action.sortBy
            }
        case INIT_SETTINGS:
            return action.settings
        case INIT_SYSTEM:
            return Object.assign({}, state, {
                systemLoaded: true
            })
        default:
            return state
    }
}