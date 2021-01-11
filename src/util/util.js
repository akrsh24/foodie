import { message } from "antd";

export const config = {
    headers: {
        "Accept": 'application/json',
        "Content-Type": 'application/json',
        "user-key": process.env.REACT_APP_ZOMATO_API_KEY
    }
};

export const apiURL = `https://developers.zomato.com/api/v2.1/categories`;

export const messageUtil = (type, msg) => {
    console.log(msg, process.env, process)
    return message[type](msg);
}
