import { store } from "@redux";
import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,

    headers: {
        "Content-Type": "application/json",
    },
    paramsSerializer: {
        serialize: (params) => queryString.stringify(params),
    },
});

axiosClient.interceptors.request.use((config) => {
    //   const token = store.getState()?.auth?.auth?.token || '';
    //   config.headers = config.headers ?? {};

    //   if (token) {
    //     config.headers.Authorization = `Bearer ${token}`;
    //   }
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error: any) => {
        throw error;
    }
);

export default axiosClient;
