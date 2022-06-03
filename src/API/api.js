import axios from "axios";

export const api = axios.create({
    baseURL:'https://bo-ok-shop.herokuapp.com/api/v1/'
})
