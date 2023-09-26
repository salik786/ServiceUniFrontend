import React, { useState } from 'react';
import { Link, Navigate } from "react-router-dom"
import PageIcon from '@rsuite/icons/Page';
import { BiUserCircle } from "react-icons/bi"
import { Dropdown } from 'rsuite';
import "./style.css"
function ProfileDropdown() {
    const [formData, setFormData] = useState({
        username: '',
        rememberMe: false,
    });
    const items = [
        <Dropdown.Item key={1} icon={<PageIcon />}>New File</Dropdown.Item>,
        <Dropdown.Item key={2}>New File with Current Profile</Dropdown.Item>,
        <Dropdown.Item key={3}>Download As...</Dropdown.Item>,
        <Dropdown.Item key={4}>Export PDF</Dropdown.Item>,
        <Dropdown.Item key={5}>Export HTML</Dropdown.Item>,
        <Dropdown.Item key={6}>Settings</Dropdown.Item>,
        <Dropdown.Item key={7}>About</Dropdown.Item>
    ];
    return (
        <>

            <Dropdown title="Saleem salik" placement="bottomEnd" icon={<BiUserCircle size={24} />}>
                {items}
            </Dropdown>


        </>
    );
}

export default ProfileDropdown;