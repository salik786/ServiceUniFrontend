export const errorHandler = (response) => {

    try {
        if (response) {
            if (response.status >= 200 && response.status < 300) {
                let newReponse = { data: response.data, error: false }

                return newReponse
            }
            else if (response.response.status == 400) {

                let newReponse = { data: response.response.data, error: true }
                return newReponse
            }
            else if (response.response && response.response.status == 401) {

                let newReponse = { data: response.response.data, error: true }
                return newReponse
            }
            else if (response?.response) {
                throw new Error(response)
            }
        }
    }
    catch (e) { console.log("error in error handler function") }
}