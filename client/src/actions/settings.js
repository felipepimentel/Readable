export const SORT_LIST = 'SORT_LIST'
export const INIT_SETTINGS = 'INIT_SETTINGS'
export const INIT_SYSTEM = 'INIT_SYSTEM'

export function handleSortList(sortBy) {
    return {
        type: SORT_LIST,
        sortBy: sortBy
    }
}

export function initSystem() {
    return {
        type: INIT_SYSTEM
    }
}

export function initSettings(settings) {
    return {
        type: INIT_SETTINGS,
        settings
    }
}