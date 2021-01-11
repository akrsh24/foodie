import { SET_CURRENT_LOCATION } from './types/utilType';

export const setCoordinates = (coordinates) => {
    return { type: SET_CURRENT_LOCATION, payload: coordinates };
}