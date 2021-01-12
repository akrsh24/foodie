import { SET_CURRENT_LOCATION, SET_LOADING_FLAG } from "../../types/UtilType";

const initialState = {
    currentCoordinates: {},
    isLoading: false
};

export const utilReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_LOCATION: return { ...state, currentCoordinates: action.payload }
        case SET_LOADING_FLAG: return { ...state, isLoading: action.payload }
        default: return state;
    }
}