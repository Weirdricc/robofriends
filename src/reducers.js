import {
    CHANGE_SEARCH_FIELD, 
    FETCH_ROBOTS_REQUEST, 
    FETCH_ROBOTS_SUCCESS, 
    FETCH_ROBOTS_FAILURE, 
} from './constants.js';

const initialStateSearch = {
    searchField: '',
}

export const searchRobotsReducer = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD: 
            return Object.assign({}, state, { searchField: action.payload });

        default: 
            return state
    }
}

const initialStateRobots = {
    loading: false,
    robots: [],
    error: ''
}

export const fetchRobotsReducer = (state = initialStateRobots, action = {}) => {
    switch (action.type) {
        case FETCH_ROBOTS_REQUEST:
            return Object.assign({}, state, { loading: true });

        case FETCH_ROBOTS_SUCCESS: 
            return Object.assign({}, state, { robots: action.payload, loading: false });

        case FETCH_ROBOTS_FAILURE:
            return Object.assign({}, state, { error: action.payload, loading: false });

        default: return state
    }
}
