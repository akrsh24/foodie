import axios from "axios";
import { apiURL, config, messageUtil } from "../../util/Util";
import { SET_CITY_DETAILS, SET_COLLECTION_CATEGORIES, SET_DINE_CATEGORIES } from "../types/DineType";

export const setDineCategories = (category) => {
    return { type: SET_DINE_CATEGORIES, payload: category };
}

export const setCityDetails = (details) => {
    return { type: SET_CITY_DETAILS, payload: details };
}

export const setCollectionCategories = (category) => {
    return { type: SET_COLLECTION_CATEGORIES, payload: category };
}

export const getDineCategories = () => {
    return async (dispatch) => {
        try {
            let response = await axios.get(`${apiURL}/categories`, config);
            dispatch(setDineCategories({ status: response.status, data: response.data.categories }));
        }
        catch (error) {
            console.error(error);
            messageUtil("error", "Something went wrong, Please try again");
        }
    };
}

export const getCityDetails = (lat, lon) => {
    return async (dispatch) => {
        try {
            let response = await axios.get(`${apiURL}/cities?lat=${lat}&lon=${lon}`, config);
            sessionStorage.setItem("currentCityDetails", JSON.stringify({ status: response.status, data: response.data.location_suggestions }));
            dispatch(setCityDetails({ status: response.status, data: response.data.location_suggestions }));
        }
        catch (error) {
            console.error(error);
            messageUtil("error", "Something went wrong, Please try again");
        }
    }
}

export const getCollectionCategories = (cityID, lat, lon) => {
    return async (dispatch) => {
        try {
            let response = await axios.get(`${apiURL}/collections?city_id=${cityID}&lat=${lat}&lon=${lon}`, config);
            dispatch(setCollectionCategories({ status: response.status, data: response.data }));
        }
        catch (error) {
            console.error(error);
            messageUtil("error", "Something went wrong, Please try again");
        }
    }

}