import { searchRobotsReducer, fetchRobotsReducer } from './reducers';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({ searchRobotsReducer, fetchRobotsReducer });