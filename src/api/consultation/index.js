import { api } from "../api.js"

export const ProductAPI = {
    get: async function (id, cancel = false) {
        const response = await api.request({
            url: `/api/?type=meat-and-filler`,
            method: "GET",

            // retrieving the signal value by using the property name
        })

        // returning the product returned by the API
        return response
    }
}