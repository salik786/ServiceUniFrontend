import React, { useEffect, useState } from 'react';
import { Link, Navigate, Routes, Route, useLocation, NavLink, BrowserRouter } from "react-router-dom"
import SearchableDropdown from '../search';
import 'react-dropdown/style.css';
import Breadcrumbs from '../breadcrumb';
import useToast from '../toast';
function BookAppointment() {

    const { toastSuccess, toastError } = useToast()
    // console.log("path÷name",pathname)
    const [value, setValue] = useState("");
    const animals = [
        { id: 1, name: "Graspus graspus" },
        { id: 2, name: "Grus rubicundus" },
        { id: 3, name: "Speothos vanaticus" },
        { id: 4, name: "Charadrius tricollaris" },
        { id: 5, name: "Sciurus vulgaris" },
        { id: 6, name: "Ateles paniscus" },
        { id: 7, name: "Bucorvus leadbeateri" }]
    const options = [
        { value: 'Ken Peter - GP', label: 'Ken Peter - GP', date: "10/12/2022" },
        { value: 'Thomas Hawking - GP', label: 'Thomas Hawking - GP', date: 'myOptionClassName' },


    ];
    const handleChange = (event) => {

        console.log("time and date ", event.target.value)

    }
    const handleSubmit = () => {
        toastSuccess("Successfully Book Appointment")
    }
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
                                <SearchableDropdown
                                    options={animals}
                                    label="name"
                                    class="w-100"
                                    id="id"
                                    selectedVal={value}
                                    handleChange={(val) => setValue(val)}
                                />
                            </div>
                        </div>

                        <div class="form-outline mb-4 d-flex w-100 row">
                            <div className='col-2'>
                                <label for="exampleInputPassword1" class="form-label text-black" style={{ fontWeight: "500 !important", marginRight: "18%" }} >Date</label>
                            </div>
                            <div className='col-4'>
                                <div class="form-group  w-100">

                                    <div class="input-group " id="show_hide_password">
                                        <input class="form-control border  w-50" type="date" onChange={handleChange} />

                                    </div>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div class="form-group  w-100">

                                    <div class="input-group " id="show_hide_password">
                                        <input class="form-control border  w-50" type="time" onChange={handleChange} />

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-outline mb-4 d-flex w-100 row">
                            <div className='col-2'>
                                <label for="exampleInputPassword1" class="form-label text-black" style={{ fontWeight: "500 !important", marginRight: "18%" }}>Availabilty</label>
                            </div>
                            <div className='col-4'>
                                <div class="form-group  w-100">

                                    <div class="input-group " id="show_hide_password">
                                        <input class="form-control border  w-50" value="available" type="text" disabled />

                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='d-flex w-100 justify-content-end' style={{ marginTop: "15vh" }}>
                            <div class="mt-4 " style={{ width: "12%", marginRight: "15px" }}>
                                <button class="btn btn-primary border border-primary w-100" onClick={handleSubmit}>
                                    Submit
                                </button>
                            </div>
                            <div class="mt-4 " style={{ width: "12%" }}>
                                <button class="btn btn-outline-secondary border border-secondary w-100" >
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