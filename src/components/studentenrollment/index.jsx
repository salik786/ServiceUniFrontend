import React, { useEffect, useState } from 'react';
import { Link, Navigate, Routes, Route, useLocation, NavLink } from "react-router-dom"

import { AiOutlinePlusCircle } from "react-icons/ai"
import Breadcrumbs from '../breadcrumb';

import SearchableDropdown from '../search';
import { StudentEnrollment } from '../../api/enrollment';
import useToast from '../Toast';

function Enrollment() {
    const { toastSuccess, toastError } = useToast()
    const [value, setValue] = useState("");
    const [subjectList, setSubjectList] = useState([])
    const [selectedSubject, setSelectedSubject] = useState("")
    const [newSubject, setNewSubject] = useState("")
    const [animals, setAnimal] = useState([
        { id: 1, name: "Graspus graspus" },
        { id: 2, name: "Grus rubicundus" },
        { id: 3, name: "Speothos vanaticus" },
        { id: 4, name: "Charadrius tricollaris" },
        { id: 5, name: "Sciurus vulgaris" },
        { id: 6, name: "Ateles paniscus" },
        { id: 7, name: "Bucorvus leadbeateri" }])

    const handleAddSubject = async () => {
        console.log("subjectttt-------->", value)
        if (selectedSubject && sessionStorage.getItem("user")) {
            let user = JSON.parse(sessionStorage.getItem("user"))
            console.log("animalss", animals)
            console.log("selectttttt", selectedSubject)
            let selectedSubjectNew = animals.filter((item) => item.name == selectedSubject)
            console.log("newSubject", selectedSubjectNew)
            // now check for selected subject if already present in user enrollment
            if (subjectList.length > 0) {
                let checkSubject = subjectList.filter((item) => item.name == selectedSubject)

                if (checkSubject.length > 0) {
                    toastError("You are Already Enrolled in this Subject")
                }
                else {
                    let resp = await StudentEnrollment.add_enrollment(selectedSubjectNew[0].id)
                    if (resp.data && resp.data.message) {
                        toastSuccess(resp.data.message)
                    }
                    else {
                        toastError(resp.data.error)
                    }
                    console.log("resp", resp)
                    getEnrolledSubjects()
                }

            }


            else {
                let resp = await StudentEnrollment.add_enrollment(selectedSubjectNew[0].id)
                console.log("resp", resp)
                if (resp) {
                    if (resp.data && resp.data.message) {
                        toastSuccess(resp.data.message)
                    }
                    else {
                        toastError(resp.data.error)
                    }
                }
                getEnrolledSubjects()
            }





            // setNewSubject(subjectList)
        }
        else {
            toastError("Select Subject to Enroll")
        }


    }
    const handleChange = (val) => {
        console.log("selected subject", val)
        setValue(val)
        setSelectedSubject(val)
    }
    useEffect(() => {
        getSubjects()


    }, [])
    useEffect(() => {
        getEnrolledSubjects()
    }, [])
    const getEnrolledSubjects = async () => {
        let resp = await StudentEnrollment.view_enrolled_subjects()
        if (resp?.data) {
            setSubjectList(resp.data)
            // setSelectedSubject(resp.data)
            console.log("dataaaa", resp.data)
        }
    }
    const getSubjects = async () => {
        try {


            let resp = await StudentEnrollment.view_subjects()
            // if (resp?.data) {
            console.log("dataaaa", resp.data)
            // let subjectcode = "";
            // let re = /\((.*)\)/;
            // let subjectname = "";
            // let newArray = []
            // console.log("resppppp", resp.data.length)
            // for (let i = 0; i < resp.data.length; i++) {
            //     let newObj = {}
            //     newObj.id = i + 1;
            //     newObj.code = resp.data[i].name.match(re)[1];
            //     newObj.name = resp.data[i].name.replace(/ *\([^)]*\) */g, "");
            //     newArray.push(newObj)
            //     console.log("new obj", newObj)

            // }
            // setSubjectList(resp.data)
            setAnimal(resp.data)
            // console.log("response", newArray)
            // }
        }
        catch (e) {

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
                                        handleChange={handleChange}
                                    />
                                    {/* <div className='col-2'><BiDownArrowAlt></BiDownArrowAlt></div> */}

                                </div>

                            </form>
                        </div>
                        <div className='col-lg-2  col-sm-12 col-md-4' ><button className="btn btn-outline-primary" onClick={handleAddSubject}><span>Add Subject</span></button></div>
                    </div>
                    <div className='row  mt-4 '>

                        <h4 className='mb-3'>Existing Subjects</h4>
                        <div className=''>
                            {subjectList.length > 0 ? <>
                                <table className='table table-bordered border vertical  '>
                                    <thead>
                                        <tr >
                                            <th scope="col" className='p-3'>#</th>
                                            <th scope='col' className='p-3'>
                                                Subject name
                                            </th>
                                            <th scope='col' className='p-3'>
                                                Subject Code
                                            </th>
                                            <th scope='col' className='p-3'>
                                                Instructor
                                            </th>

                                        </tr>
                                    </thead>

                                    <tbody>

                                        {subjectList.map((item, index) => {
                                            return (
                                                <>
                                                    <tr className='' key={index}>
                                                        <td className='p-4'>{index + 1}</td>
                                                        <td className='p-4'>{item.name} </td>

                                                        <td className='p-4'>{item.subject_code} </td>
                                                        <td className='p-4'>{item.details} </td>

                                                    </tr>
                                                </>
                                            )

                                        })}


                                    </tbody>


                                </table>
                            </>
                                : <p className='text-center'>No Subjects Found in Enrolment</p>}
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