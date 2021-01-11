import { SET_CURRENT_LOCATION } from "../../actions/types/utilType"

const initialState = {
    currentCoordinates: {}
};

export const utilReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_LOCATION: return { ...state, currentCoordinates: action.payload }
        default: return state;
    }
}