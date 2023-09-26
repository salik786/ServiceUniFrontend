import React, { useEffect, useState } from 'react';
import { Link, Navigate, Routes, Route, useLocation, NavLink, BrowserRouter } from "react-router-dom"
import TopBar from '../topbar/topbar';
import CenterDashboard from '../centerdashboard/centerdashboard';
import Pharmacy from '../../pages/Pharmacy/pharmacy';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Breadcrumbs from '../breadcrumb';
function BookAppointment() {
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
    const handleSelect = (e) => {
        console.log(e)
    }
    const options = [
        { value: 'Ken Peter - GP', label: 'Ken Peter - GP', date: "10/12/2022" },
        { value: 'Thomas Hawking - GP', label: 'Thomas Hawking - GP', date: 'myOptionClassName' },


    ];
    const defaultOption = options[0];
    return (

        <>
            <Breadcrumbs links={[{ name: "Pharmacy", path: "/pharmacy" }, { name: "Consultation", path: "/consultation" }, { name: "Book an Appointment", path: "/bookappointment" }]} />
            <div>


                <div className="m-4"   >
                    <div className='bg-white p-4' style={{ height: "50vh" }}>
                        <div class="form-outline mb-4 d-flex w-100 row">
                            <div className='col-2'>

                                <label for="Username" class="form-label bold text-black mr-4" style={{ fontWeight: "500 !important", marginRight: "20%" }}>GP</label>
                            </div>
                            <div className='col-6'>
                                <Dropdown class="form-control" options={options} onChange={handleSelect} value={defaultOption} placeholder="Select an option" />;
                            </div>
                        </div>

                        <div class="form-outline mb-4 d-flex w-100 row">
                            <div className='col-2'>
                                <label for="exampleInputPassword1" class="form-label text-black" style={{ fontWeight: "500 !important", marginRight: "18%" }}>Date</label>
                            </div>
                            <div className='col-4'>
                                <div class="form-group  w-100">

                                    <div class="input-group " id="show_hide_password">
                                        <input class="form-control border  w-50" type="date" />

                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='d-flex ' style={{ marginTop: "20vh" }}>
                            <div class="mt-4 w-10">
                                <button class="btn btn-primary" >
                                    Submit
                                </button>
                            </div>
                            <div class="mt-4 w-10">
                                <button class="btn btn secondary" >
                                    Cancel
                                </button>
                            </div>

                        </div>

                    </div>



                </div>
            </div>


        </>
    );
}

export default BookAppointment;