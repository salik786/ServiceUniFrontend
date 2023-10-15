import React, { useState } from 'react';
import { Link, Navigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserGraduate, faBars, faCircleUser, faBell, faVolleyball, faBuilding, faBook, faRightFromBracket, faCapsules } from '@fortawesome/free-solid-svg-icons'
import { BsSearch, BsBell } from "react-icons/bs"
import ProfileDropdown from '../profiledropdown';

function TopBar() {
    const [formData, setFormData] = useState({
        username: '',
        rememberMe: false,
    });
    return (
        <>

            <nav class="navbar navbar-white bg-white  p-2" >
                <div class="container-fluid">
                    <form class="d-flex w-50 ">

                        <div class="w-10 bg-white text-dark ml-5 ">
                            <a type="submit" class=" " ><BsSearch color='black' /></a>
                        </div>
                        <input class="form-control mr-sm-2" type="search" placeholder="Search Something...." aria-label="Search" />
                    </form>
                    <div class="left_pro">



                        <ProfileDropdown />



                    </div>

                </div>
            </nav>


        </>
    );
}

export default TopBar;