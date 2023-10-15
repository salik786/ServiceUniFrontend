import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from "react-router-dom"

import PageIcon from '@rsuite/icons/Page';
import { BiUserCircle } from "react-icons/bi"
import { Dropdown } from 'rsuite';
import "./style.css"
function ProfileDropdown() {

    const navigate = useNavigate()
    const [user, setUser] = useState("")

    useEffect(() => {
        const userNew = JSON.parse(sessionStorage.getItem("user"))
        setUser(userNew)
    }, [])
    const handleLogout = (e) => {

        sessionStorage.removeItem("user")
        navigate("/Login");


        // Access formData.username, formData.password, and formData.rememberMe for your login logic.
    };
    const items = [


        <Dropdown.Item key={6}>Settings</Dropdown.Item>,
        <Dropdown.Item key={6} onClick={handleLogout}>Logout</Dropdown.Item>

    ];
    return (
        <>

            <Dropdown className='bg-white' title={user.email} placement="bottomEnd" >
                <div className='d-flex flex-column '>
                    {items}
                </div>
            </Dropdown>


        </>
    );
}

export default ProfileDropdown;