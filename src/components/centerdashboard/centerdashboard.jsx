import React, { useState } from 'react';
import { Link, Navigate ,NavLink} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faUserGraduate,faBars,faCircleUser,faBell,faVolleyball,faBuilding,faBook,faRightFromBracket,faCapsules } from '@fortawesome/free-solid-svg-icons'
import { GiMedicines } from "react-icons/gi"
import { PiStudentLight,PiBooksLight } from "react-icons/pi"
import { BsBuildingCheck } from "react-icons/bs"
import { LiaBriefcaseMedicalSolid } from "react-icons/lia"
import { MdOutlineSportsBaseball } from "react-icons/md"
import Breadcrumbs from '../breadcrumb';
// import ToggleNavbar from './toggleNavbar';÷
function CenterDashboard() {
    const [formData, setFormData] = useState({
        username: '',
        rememberMe: false,
    });
    return (
        <>
  
            <div id="content" class=" ">
                <div class="main-content w-100 h-100 px-5">
                <Breadcrumbs links={[{name:"Dashboard",path:"/dashboard"}]}/>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-sm-12 py-sm-3 ">
                            <NavLink to="/enrollment">
                                <div class="card" >
                                    <div class="card-body text-center ">
                                   <span><PiStudentLight size={45}></PiStudentLight></span>
                                        <p class="main_text">
                                            Student Central
                                        </p>
                                    </div>
                                </div>
                                </NavLink>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-12 py-sm-3 ">
                                <NavLink to="/pharmacy">
                                    <div class="card" >
                                    <div class="card-body text-center ">
                                    <span><LiaBriefcaseMedicalSolid size={45}></LiaBriefcaseMedicalSolid></span>

                                        <p class="main_text">
                                            Pharmacy
                                        </p>
                                    </div>
                                </div>
                                </NavLink>

                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-12 py-md-3 py-sm-3">
                                <div class="card" >
                                    <div class="card-body text-center ">
                                    <span><PiBooksLight size={45}></PiBooksLight></span>
                                        <p class="main_text">
                                            Library
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div class="row py-5">
                            <div class="col-lg-4 col-md-6 col-sm-12 col-xl-4 ">
                                <div class="card" >
                                    <div class="card-body text-center ">
                                    <span><MdOutlineSportsBaseball size={45}></MdOutlineSportsBaseball></span>
                                        <p class="main_text">
                                            Sports Hub
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-12  ">
                                <div class="card" >
                                    <div class="card-body text-center ">
                                    <span><BsBuildingCheck size={45}></BsBuildingCheck></span>
                                        <p class="main_text">
                                            Accommdation
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CenterDashboard;