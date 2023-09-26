import React, { useState } from 'react';
import { Link, NavLink, Navigate, useNavigate,useLocation } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faBars, faGraduationCap, faCapsules, faBook, faVolleyball, faBuilding, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { LuLayoutDashboard } from "react-icons/lu"
import { GiMedicines } from "react-icons/gi"
import { PiStudentBold } from "react-icons/pi"
import { FiBookOpen } from "react-icons/fi"
import { BsBuildingFillCheck } from "react-icons/bs"
import { MdSportsVolleyball } from "react-icons/md"

// import{PiStudentBold } from "react-icons/pi"
function ToggleNavbar({handleToggle}) {
    const navigate = useNavigate();
    const location = useLocation()
    const [formData, setFormData] = useState({
        username: '',
        rememberMe: false,
    });
    const fontSize=18;
    
    const menu = [
        {
            path: "/dashboard", name: 'Dashboard', show: false, icon: <LuLayoutDashboard fontSize={fontSize}/>
        },
        { path: "/pharmacy", name: 'Pharmacy', show: false, icon: <GiMedicines  fontSize={fontSize}/> },
        { path: "/studentcentral", name: 'StudentCentral', show: false, icon: <PiStudentBold  fontSize={fontSize}/> },
        { path: "/library", name: 'Library', show: false, icon: <FiBookOpen  fontSize={fontSize}/> },
        { path: "/accomodation", name: 'Accomodation', show: false, icon: < BsBuildingFillCheck  fontSize={fontSize}/> },
        { path: "/sports", name: 'Sports', show: false, icon: <MdSportsVolleyball  fontSize={fontSize}/> }
    ];
    const handleLogout = (e) => {

        sessionStorage.removeItem("user")
        navigate("/Login");

        // Access formData.username, formData.password, and formData.rememberMe for your login logic.
    };
    return (
        <>
            <nav id="sidebar" style={{minWidth:"0px !important",width:"100px !important",display:"none !important"}}>
              
                 
                <div class="text-white mt-3 mb-4 text-center logo-nav">
                    <div class="w-10 bg-white ml-5 toggle-nav">
                                <a type="submit" class="mt-2 " ><FontAwesomeIcon icon={faBars} color='black' fontSize={24} onClick={handleToggle}/></a>
                            </div>
                </div>

                <ul class="list-unstyled components mb-5 ">

                    {
                        menu.map((item, index) => {
                            return <li >
                                <NavLink to={item.path} key={index} className={`link justify-content-center ${location.pathname == item.path ? "active-nav" : "inactive-nav"}`} activeclassName="active-nav">
                                <span  className='nav_icon'>{item.icon}</span>

                                    
                                </NavLink>
                            </li>

                        })
                    }
                    {/* <li >
                        <Link to="/dashboard"> <span><FontAwesomeIcon icon={faUser} /></span> Dashboard</Link>
                    </li>
                */}



                    <li style={{ marginTop: "200px" }}>
                        <a href="#"><span class=" mr-3">
                            <FontAwesomeIcon icon={faGear} />
                        </span></a>
                    </li>

                    <li onClick={handleLogout}>
                        <a href="#"><span class=" mr-3">
                            <FontAwesomeIcon icon={faRightFromBracket} />
                        </span></a>
                    </li>
                </ul>
               
            </nav>
        </>
    );
}

export default ToggleNavbar;