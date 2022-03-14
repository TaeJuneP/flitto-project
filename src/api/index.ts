import axios from "axios";
import apiPhotos from "./photos";
import {API_SERVER, API_SERVER_TIMEOUT} from "../constants/API";

const axiosAPI = axios.create({
    baseURL: API_SERVER,
    timeout: API_SERVER_TIMEOUT,
});


const api = {
    apiPhotos: apiPhotos(axiosAPI),
};

export default api;