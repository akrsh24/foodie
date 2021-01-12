import { SET_CITY_DETAILS, SET_DINE_CATEGORIES } from "../../types/DineType";

const initialState = {
    dineCategories: {},
    cityDetails: {}
};

export const dineReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DINE_CATEGORIES: return { ...state, dineCategories: action.payload }
        case SET_CITY_DETAILS: return { ...state, cityDetails: action.payload }
        default: return state;
    }
}

