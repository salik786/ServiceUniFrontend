import React, { useEffect, useState } from 'react';
import { Link, NavLink, Navigate, useLocation, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBars, faGraduationCap, faCapsules, faBook, faVolleyball, faBuilding, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { LuLayoutDashboard } from "react-icons/lu"
import { GiMedicines } from "react-icons/gi"
import { PiStudentBold } from "react-icons/pi"
import { FiBookOpen, FiSettings } from "react-icons/fi"
import { BsBuildingFillCheck } from "react-icons/bs"
import { MdSportsVolleyball } from "react-icons/md"
import ToggleNavbar from './toggleNavbar';

// import{PiStudentBold } from "react-icons/pi"
function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation()


    const [isOpen, setIsOpen] = useState(true)
    const fontSize = 21;
    const menu = [
        {
            path: "/dashboard", name: 'Dashboard', show: false, icon: <LuLayoutDashboard fontSize={fontSize} />
        },
        { path: "/pharmacy", name: 'Pharmacy', show: false, icon: <GiMedicines fontSize={fontSize} /> },
        { path: "/studentcentral", name: 'Student Central', show: false, icon: <PiStudentBold fontSize={fontSize} /> },
        { path: "/library", name: 'Library', show: false, icon: <FiBookOpen fontSize={20} /> },
        { path: "/accomodation", name: 'Accomodation', show: false, icon: < BsBuildingFillCheck fontSize={fontSize} /> },
        { path: "/sports", name: 'Sports', show: false, icon: <MdSportsVolleyball fontSize={fontSize} /> }
    ];
    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        console.log("location", location.pathname)
    }, [location.pathname])
    console.log("menu", menu)

    const handleLogout = (e) => {

        sessionStorage.removeItem("user")
        navigate("/Login");

        // Access formData.username, formData.password, and formData.rememberMe for your login logic.
    };
    return (
        <>{isOpen ?
            <nav id="sidebar" style={{ minWidth: "250px" }}>


                <div class="text-white mt-3 mb-4 text-center logo-nav">
                    <button type="button" class="btn btn-primary rounded-0 py-2">Service uni
                        <span class="text-info " style={{ fontWeight: "bolder" }}>.</span>
                    </button>
                    <div class="w-10 bg-white ml-5 toggle-nav" onClick={handleToggle}>
                        <a type="submit" class="mt-2 " ><FontAwesomeIcon icon={faBars} color='black' /></a>
                    </div>
                </div>

                <ul class="list-unstyled components mb-5 ">

                    {
                        menu.map((item, index) => {

                            return <li>
                                <NavLink to={item.path} key={index} className={`link ${location.pathname == item.path ? "active-nav" : "inactive-nav"}`} >
                                    <span className='nav_icon'>{item.icon}</span>

                                    <span className='nav_text'>{item.name}</span>
                                </NavLink>
                            </li>


                        })
                    }
                    {/* <li >
                        <Link to="/dashboard"> <span><FontAwesomeIcon icon={faUser} /></span> Dashboard</Link>
                    </li>
                */}



                    <li style={{ marginTop: "200px" }}>
                        <NavLink to={"/settings"} className={`link ${location.pathname == "/settings" ? "active-nav" : "inactive-nav"}`}>
                            <span className='nav_icon'><FiSettings fontSize={fontSize} /></span>
                            <span className='nav_text'>Settings</span></NavLink>
                    </li>

                    <li onClick={handleLogout}>
                        <a href="#"><span class=" mr-3">
                            <FontAwesomeIcon icon={faRightFromBracket} />
                        </span>Logout</a>
                    </li>
                </ul>



            </nav> : <> <ToggleNavbar handleToggle={handleToggle} /></>}
        </>
    );
}

export default Sidebar;