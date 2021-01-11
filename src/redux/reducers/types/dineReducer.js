import { SET_DINE_CATEGORIES } from "../../actions/types/dineType"

const initialState = {
    dineCategories: {}
};

export const dineReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DINE_CATEGORIES: return { ...state, dineCategories: action.payload }
        default: return state;
    }
}

