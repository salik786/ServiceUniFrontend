import React, { useEffect, useState } from 'react';
import { Link, Navigate, Routes, Route, useLocation, NavLink } from "react-router-dom"
// import TopBar from '../topbar/topbar';
// import CenterDashboard from '../centerdashboard/centerdashboard';
// import Pharmacy from '../../pages/Pharmacy/pharmacy';
import { AiOutlineMedicineBox, AiOutlineEye } from "react-icons/ai"
import { BiInjection } from "react-icons/bi"
import { BsPlus } from "react-icons/bs"
import { GiMedicines } from "react-icons/gi"
import Breadcrumbs from '../breadcrumb';

function Consultation() {
    const [Routing, setRouting] = useState({
        Dashboard: { key: '/dashboard', show: false },
        Pharmacy: {

            key: '/pharmacy', show: false, nestedRoute: {
                listmedicines: { key: '/listmedicine', show: false },
                cart: { key: '/cart', show: false }
            },
            StudentsCenter: {
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
        
            <section>
                <div class="main-content w-100 h-  px-5">
                <Breadcrumbs links={[{name:"Pharmacy",path:"/pharmacy"},{name:"Consultation",path:"/consultation"},{name:"Appointment",path:"/appointment"}]}/>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 ">
                                <div class="card" style={{ width: "18rem" }}>
                                    <div class="card-body text-center mt-4">

                                        <span><AiOutlineMedicineBox size={25} /></span>
                                        <p class="main_text">
                                            Consultation
                                        </p>
                                    </div>

                                </div>

                            </div>
                            <div class="col-lg-5 col-md-12 ">
                                <Link to="/bookappointment"><button type="button" class="btn btn-primary px-4 py-2 main_text">Book an appointment <BsPlus
                                    fontSize={"bolder"} size={25} /></button></Link>
                                <Link to="/viewappointment"><button type="button" class="btn bg-white px-4 py-2 text-primary d-flex mt-3">View appointment<AiOutlineEye size={22} /></button>
                                </Link>
                            </div>


                        </div>
                        <div class="row mt-5">
                            <div class="col-lg-4 col-md-6">
                                <div class="card" style={{ width: "18rem" }}>
                                    <div class="card-body text-center mt-4">
                                        <span><GiMedicines size={25} /></span>

                                        <p class="main_text">
                                            Dispencing
                                        </p>

                                    </div>
                                </div>

                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="card" style={{ width: "18rem" }}>
                                    <div class="card-body text-center mt-4">
                                        <span><BiInjection size={25} /></span>
                                        <p class="main_text">
                                            Immunization
                                        </p>

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>


                </div>
            </section>

        </>
    );
}

export default Consultation;