import axios from "axios"
import Cookies from "js-cookie";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
// axios.defaults.xsrfHeaderName = "X-CSRFToken";

// axios.defaults.headers.common['X-CSRFToken'] = Cookies.get("csrftoken");
export const api = axios.create({
    baseURL: "http://127.0.0.1:8090/",
})