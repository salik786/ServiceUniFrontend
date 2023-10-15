import { api } from "../api.js"
import { errorHandler } from "../errorHandler.js"

export const StudentEnrollment = {
    add_subject: async function (data, cancel = false) {
        try {
            const response = await api.request({
                url: `studentcentral/add_subject/`,
                method: "POST",
                data: data

                // retrieving the signal value by using the property name
            })
            // returning the product returned by the API
            let newReponse = errorHandler(response)
            return newReponse
        }
        catch (e) {
            let newResponse = errorHandler(e)
            return newResponse

        }
    },
    add_enrollment: async function (data, cancel = false) {
        try {

            let user = JSON.parse(sessionStorage.getItem("user"));
            const response = await api.request({
                url: `studentcentral/add-to-enrollment/${user.id}/`,
                method: "POST",
                data: { "subject_id": data },
                // headers: { "Content-Type": "application/json"},

                withCredentials: true


                // retrieving the signal value by using the property name
            })
            // returning the product returned by the API
            let newReponse = errorHandler(response)
            return newReponse
        }
        catch (e) {
            let newResponse = errorHandler(e)
            return newResponse

        }
    },
    view_subjects: async function (cancel = false) {
        try {
            const response = await api.request({
                url: `studentcentral/view-all-subjects/`,
                method: "GET",

                // retrieving the signal value by using the property name
            })
            let newReponse = errorHandler(response)
            return newReponse
        }
        catch (e) {
            let newResponse = errorHandler(e)
            return newResponse

        }
    },

    view_enrolled_subjects: async function (cancel = false) {
        try {
            let user = JSON.parse(sessionStorage.getItem("user"));
            console.log("userrrr", user.id)
            const response = await api.request({
                url: `studentcentral/view-subjects/${user.id}`,
                method: "GET",

                // retrieving the signal value by using the property name
            })
            let newReponse = errorHandler(response)
            return newReponse
        }
        catch (e) {
            let newResponse = errorHandler(e)
            return newResponse

        }
    },
    update_enrollment: async function (id, cancel = false) {
        if (sessionStorage.userId) {
            let userId = sessionStorage.getItem("userId");
            const response = await api.request({
                url: `studentcentral/update_enrollment` + id,
                method: "PUT",

                // retrieving the signal value by using the property name
            })
            return response
        }
        else {
            const ToastOptions = {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                newestOnTop: false,
                closeOnClick: true,
                rtl: false,
                pauseOnFocusLoss: true,
                draggable: true,
                pauseOnHover: true,
                theme: "light"
            }

            // toast.error("User is Not Logged In", ToastOptions)

            // window.location("/login")
        }



        // returning the product returned by the API
        // return response
    }
}