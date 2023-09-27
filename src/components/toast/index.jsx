import React, { useState } from 'react';
import { toast, ToastOptions } from "react-toastify"

const useToast = () => {
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

    const toastSuccess = (message) => {
        toast.success(message, ToastOptions)
    }
    const toastError = (message) => {
        toast.error(message, ToastOptions)
    }

    return { toastSuccess, toastError }
}

export default useToast;