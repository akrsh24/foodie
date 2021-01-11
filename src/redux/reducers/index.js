import { combineReducers } from "redux";
import { utilReducer } from './types/utilReducer';
import { dineReducer } from './types/dineReducer';

export default combineReducers({
    utilReducer,
    dineReducer
});