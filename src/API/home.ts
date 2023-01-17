import axiosClient from "./axiosClient";

export const homeApi = {
    products: () => {
        const url = "/products";
        return axiosClient.get(url);
    },
};
