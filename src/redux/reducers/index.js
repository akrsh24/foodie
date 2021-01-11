import { combineReducers } from "redux";
import { utilReducer } from './types/UtilReducer';
import { dineReducer } from './types/DineReducer';

export default combineReducers({
    utilReducer,
    dineReducer
});