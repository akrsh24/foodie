import axios from "axios";
import { apiURL, config, messageUtil } from "../../util/util";
import { SET_DINE_CATEGORIES } from "./types/dineType";

export const setDineCategories = (category) => {
    return { type: SET_DINE_CATEGORIES, payload: category };
}

export const getDineCategories = () => {
    return async (dispatch) => {
        try {
            let response = await axios.get(apiURL, config);
            dispatch(setDineCategories({ status: response.status, data: response.data.categories }));
        }
        catch (error) {
            console.error(error);
            messageUtil("error", "Something went wrong, Please try again");
        }
    };
}
