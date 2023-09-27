import React, { useEffect, useState } from 'react';
import { Link, Navigate, Routes, Route, useLocation, NavLink } from "react-router-dom"

import { FiSearch } from "react-icons/fi"
import { BiDownArrowAlt } from "react-icons/bi"
import { AiOutlinePlusCircle } from "react-icons/ai"
import Breadcrumbs from '../breadcrumb';
import useToast from '../toast';
import SearchableDropdown from '../search';

function Enrollment() {
    const { toastSuccess, toastError } = useToast()
    const { pathname } = useLocation();
    const [value, setValue] = useState("");
    const [subjectList, setSubjectList] = useState([{
        id: 1, title: "Service Oriented Software Design", code: "CSIT889"
    }, {
        id: 2, title: "Database Management ", code: "CSIT882"
    }, {
        id: 3, title: "Web Development", code: "CSIT884"
    }])
    const animals = [
        { id: 1, name: "Graspus graspus" },
        { id: 2, name: "Grus rubicundus" },
        { id: 3, name: "Speothos vanaticus" },
        { id: 4, name: "Charadrius tricollaris" },
        { id: 5, name: "Sciurus vulgaris" },
        { id: 6, name: "Ateles paniscus" },
        { id: 7, name: "Bucorvus leadbeateri" }]
    useEffect(() => {
        console.log(pathname)
    }, [pathname])
    const handleAddSubject = () => {
        if (true) {
            toastSuccess("Subject Successfully Added")
        }
        else {


            toastError("Unable to Add Subjects")
        }
    }
    return (

        <>
            <Breadcrumbs links={[{ name: "Student Central", path: "/studentcentral" }, { name: "Enrollment", path: "/enrollment" }]} />

            <div>
                <div className=' m-4 bg-white p-4 w-80 text-dark'>
                    <div className='row mb-4'>
                        <div className="col-lg-10 col-xl-10 col-sm-4">
                            <h3 className='bold'>  Enrollment </h3>
                        </div>
                        <div className="col-lg-2">
                            <button className='btn btn-primary'>Fee Structure</button>
                        </div>
                        <hr className='mt-3' />
                    </div>

                    <div className='row h-100 mb-4 mt-4'>
                        <div className="col-lg-2 col-md-4">
                            <h5>  Subject </h5>
                        </div>
                        <div className="col-lg-7 col-md-4" style={{ marginBottom: "25px" }}>
                            <form class="  w-100 ">
                                <div className='row d-flex w-100'>

                                    {/* <div className='col-1 text-center w-0'><FiSearch></FiSearch></div> */}
                                    <SearchableDropdown
                                        options={animals}
                                        label="name"
                                        class="w-100"
                                        id="id"
                                        selectedVal={value}
                                        handleChange={(val) => setValue(val)}
                                    />
                                    {/* <div className='col-2'><BiDownArrowAlt></BiDownArrowAlt></div> */}

                                </div>

                            </form>
                        </div>
                        <div className='col-lg-2  col-sm-12 col-md-4' ><button className='btn btn-outline-primary' onClick={handleAddSubject}><AiOutlinePlusCircle size={20} /><span>Add Subject</span></button></div>
                    </div>
                    <div className='row  mt-4 '>

                        <h4 className='mb-3'>Existing Subjects</h4>
                        <div className=''>
                            <table className='table table-bordered border vertical  '>
                                <thead>
                                    <tr >
                                        <th scope="col" className='p-3'>#</th>
                                        <th scope='col' className='p-3'>
                                            Subject Title
                                        </th>
                                        <th scope='col' className='p-3'>
                                            Subject Code
                                        </th>

                                    </tr>
                                </thead>

                                <tbody>
                                    {subjectList.map((item, index) => {
                                        return (
                                            <>
                                                <tr className='' key={index}>
                                                    <td className='p-4'>{item.id}</td>
                                                    <td className='p-4'>{item.title} </td>

                                                    <td className='p-4'>{item.code} </td>

                                                </tr>
                                            </>
                                        )

                                    })}



                                </tbody>


                            </table>
                        </div>
                    </div>
                    <div className='row'>

                    </div>
                </div >


            </div >


        </>
    );
}

export default Enrollment;