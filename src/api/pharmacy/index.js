import { api } from "../api.js"
import { errorHandler } from "../errorHandler.js"
import Cookies from "js-cookie"
export const Pharmacy = {
    book_appointment: async function (data, cancel = false) {
        try {
            const response = await api.request({
                url: `pharmacy/book-appointment/`,
                method: "POST",
                data: { gp_id: data.gp_id, user_id: data.user_id, time_stamp: data.timestamp },
                headers: { "Content-Type": "application/json", 'X-CSRFToken': Cookies.get("csrftoken") },

                withCredentials: true


                // retrieving the signal value by using the property name
            })
            let newReponse = errorHandler(response)
            console.log("Response->>>>>>", response)
            return newReponse
        }
        catch (e) {
            let newError = errorHandler(e)
            return newError
        }
        // returning the product returned by the API

    },
    update_gp: async function (data, gp_id, cancel = false) {
        try {
            const response = await api.request({
                url: `pharmacy/update-gp/` + gp_id + "/",
                method: "POST",
                data: data,
                headers: { "Content-Type": "application/json" },

                withCredentials: true


                // retrieving the signal value by using the property name
            })
            let newReponse = errorHandler(response)
            console.log("Response->>>>>>", response)
            return newReponse
        }
        catch (e) {
            let newError = errorHandler(e)
            return newError
        }
        // returning the product returned by the API

    },
    get_all_gps: async function (cancel = false) {
        const response = await api.request({
            url: `pharmacy/get-all-gp/`,
            method: "GET",

            // retrieving the signal value by using the property name
        })
        // returning the product returned by the API
        return response
    },
    view_slots: async function (id, cancel = false) {
        const response = await api.request({
            url: `view-slots/` + id,
            method: "POST",

            // retrieving the signal value by using the property name
        })

        // returning the product returned by the API
        return response
    },
    view_appointment: async function (cancel = false) {
        try {
            let user = JSON.parse(sessionStorage.getItem("user"));
            const response = await api.request({
                url: `pharmacy/view-appointments/` + user.id,
                method: "GET",

                // retrieving the signal value by using the property name
            })
            let newReponse = errorHandler(response)
            console.log("Response->>>>>>", response)
            return newReponse
        }
        catch (error) {
            let newError = errorHandler(error)
            return newError

        }

        // returning the product returned by the API

    },
    update_appointment: async function (id, cancel = false) {
        const response = await api.request({
            url: `update-appointment/` + id,
            method: "PUT",

            // retrieving the signal value by using the property name
        })

        // returning the product returned by the API
        return response
    },
    get_all_medicines: async function (cancel = false) {
        const response = await api.request({
            url: `pharmacy/get-all-medicines/`,
            method: "GET",

            // retrieving the signal value by using the property name
        })

        // returning the product returned by the API
        return response
    },
    add_to_cart: async function (data, cancel = false) {
        try {
            console.log(data, "data")
            const response = await api.request({
                url: `add_to_cart/`,
                method: "POST",
                withCredentials: true,
                data: { cart_id: 1, medicine_id: data.medicine_id },
                headers: { "Content-Type": "application/json", 'X-CSRFToken': Cookies.get("csrftoken") }

                // retrieving the signal value by using the property name
            })
            let newReponse = errorHandler(response)
            console.log("Response->>>>>>", response)
            return newReponse
        }
        // returning the product re
        // returning the product returned by the API

        catch (error) {
            let newError = errorHandler(error)
            return newError

        }

    }
}