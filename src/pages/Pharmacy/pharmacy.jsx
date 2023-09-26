import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faUserGraduate,faBars,faCircleUser,faBell,faVolleyball,faBuilding,faBook,faRightFromBracket,faCapsules } from '@fortawesome/free-solid-svg-icons'
import {AiOutlineMedicineBox} from "react-icons/ai"
import {BiInjection} from "react-icons/bi"
import {GiMedicines} from "react-icons/gi"

import { NavLink } from 'react-router-dom';
import Breadcrumbs from '../../components/breadcrumb';

function Pharmacy() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        rememberMe: false,
    });


    return (
        <>
      
            <div id="content" class=" ">
            
                <div class="main-content w-100 h-100 px-5">
                <Breadcrumbs links={[{name:"Pharmacy",path:"/pharmacy"}]}/>
                    
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-sm-12 py-sm-3 ">
                            <NavLink to="/appointment">
                                <div class="card" >

                                    <div class="card-body text-center ">
                                    <span><AiOutlineMedicineBox size={25}/></span>
                                        <p class="main_text">
                                            Consultation
                                        </p>
                                    </div>
                                </div>
                                </NavLink>

                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-12 py-sm-3 ">
                                <NavLink to="/dispencing">
                                <div class="card" >
                                    <div class="card-body text-center ">
                                    <span><GiMedicines size={25}/></span>

                                        <p class="main_text">
                                            Dispencing
                                        </p>
                                    </div>
                                </div>
                                </NavLink>

                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-12 py-md-3 py-sm-3">
                                <div class="card" >
                                    <div class="card-body text-center ">
                                    <span><BiInjection size={25}/></span>
                                        <p class="main_text">
                                            Immunization
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

export default Pharmacy;
