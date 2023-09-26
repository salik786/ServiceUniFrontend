import React, { useEffect, useState } from 'react';
import { Link, Navigate, Routes, Route, useLocation, NavLink } from "react-router-dom"

import {FiSearch} from "react-icons/fi"
import {BiDownArrowAlt} from "react-icons/bi"
import Breadcrumbs from '../breadcrumb';

function Enrollment() {
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
        <Breadcrumbs  links={[{name:"Student Central",path:"/studentcentral"},{name:"Enrollment",path:"/enrollment"}]}/>

            <div>
                <div className=' m-4 bg-white p-4 w-80 text-dark'>
                    <div className='row mb-4'>
                        <div className="col-10">
                            <h3 className='bold'>  Enrollment </h3>
                        </div>
                        <div className="col-2">
                            <button className='btn btn-primary'>Fee Structure</button>
                        </div>
                        <hr className='mt-3'/>
                    </div>
                    
                    <div className='row h-100 mb-4 mt-4'>
                        <div className="col-2">
                            <h5>  Subject </h5>
                        </div>
                        <div className="col-7" style={{marginBottom:"25px"}}>
                            <form class=" border w-100 ">
                                <div className='row d-flex w-100'>
                                
                                <div className='col-1 text-center w-0'><FiSearch></FiSearch></div>
                                <div className='col-8'><input class="form-control " type="search" placeholder="Search" aria-label="Search" /></div>
                                                                <div className='col-2'><BiDownArrowAlt></BiDownArrowAlt></div>
                                
                                </div>
                                
                            </form>
                        </div>
                        <div className='col-2'><button className='btn btn-outline-primary'>Add Subject</button></div>
                    </div>
                    <div className='row  mt-4 '>

                        <h4>Existing Subjects</h4>
                        <div className='mr-2 ml-2'>
                        <table className='table table-bordered border vertical"  '>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope='col ml-2  p-2'>
                                        Subject Title
                                    </th>
                                    <th scope='col ml-2  p-2'>
                                        Subject Code
                                    </th>

                                </tr>
                            </thead>

                            <tbody>

                                <tr className=' ml-2  p-2'>
                                    <th scope="row">1</th>
                                    <td className='p-2'>Service Oriented Software Design </td>
                                    <td className='p-2'>CSIT889 </td>

                                </tr>

                                <tr className=' ml-2'>
                                    <th scope="row">2</th>
                                    <td className='p-2'> Web Development </td>
                                    <td className='p-2'>CSIT882 </td>

                                </tr>
                                <tr className=' ml-2'>
                                    <th scope="row">3</th>
                                    <td className='p-2'>Database Management </td>
                                    <td className='p-2'>CSIT884 </td>

                                </tr>



                            </tbody>


                        </table>
                        </div>
                    </div>
                    <div className='row'>

                    </div>
                </div>


            </div>


        </>
    );
}

export default Enrollment;