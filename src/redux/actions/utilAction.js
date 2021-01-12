import { SET_CURRENT_LOCATION, SET_LOADING_FLAG } from '../types/UtilType';

export const setCoordinates = (coordinates) => {
    return { type: SET_CURRENT_LOCATION, payload: coordinates };
}

export const setIsLoading = (flag) => {
    return { type: SET_LOADING_FLAG, payload: flag };
}