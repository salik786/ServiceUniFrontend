import Cookies from "js-cookie"
import { api } from "../api.js"
import { errorHandler } from "../errorHandler.js"
export const User = {
    login: async function (data, cancel = false) {
        try {
            const response = await api.request({
                url: `/login/`,
                method: "POST",
                data: { email: data.email, password: data.password },
                headers: { "Content-Type": "application/json", 'X-CSRFToken': Cookies.get("csrftoken") },

                withCredentials: true
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
    register: async function (data, cancel = false) {


        // console.log(Cookies.get("csrftoken"))
        try {
            const response = await api.request({
                url: `/register/`,
                method: "POST",
                withCredentials: true,
                data: data,
                headers: { "Content-Type": "application/json", 'X-CSRFToken': Cookies.get("csrftoken") }

                // retrieving the signal value by using the property name
            })

            let newReponse = errorHandler(response)
            console.log("Response->>>>>>", response)
            return newReponse
            // returning the product returned by the API

        }

        catch (error) {
            let newError = errorHandler(error)
            return newError

        }

    }
}
