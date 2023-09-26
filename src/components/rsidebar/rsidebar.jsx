import React, { useEffect, useState } from 'react';
import { Link, Navigate, Routes, Route, useLocation } from "react-router-dom"
import TopBar from '../topbar/topbar';
import CenterDashboard from '../centerdashboard/centerdashboard';
import Pharmacy from '../../pages/Pharmacy/pharmacy';
function RSidebar() {
    const [Routing, setRouting] = useState({
        Dashboard: { key: '/dashboard', show: false },
        Pharmacy: {

            key: '/pharmacy', show: false, nestedRoute: {
                listmedicines: { key: '/listmedicine', show: false },
                cart: { key: '/cart', show: false }
            },
        StudentsCenter:{
            key: '/students', show: false, nestedRoute: {
                listcourses: { key: '/listcourses', show: false },
                showcourses: { key: '/showcourses', show: false }
            },
        }
        },
        rememberMe: false,
    });
    const { pathname } = useLocation();
    // console.log("path÷name",pathname)
    useEffect(() => {
        console.log(pathname)
    }, [pathname])

    return (

        <>
            <div id="content" class="" style={{ color: "rgb(241 244 253) !important" }}>
               
                <CenterDashboard /> 

            </div>
        </>
    );
}

export default RSidebar;