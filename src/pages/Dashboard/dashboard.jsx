import React, { useState } from 'react';
import { Link, Navigate, Routes,Route } from "react-router-dom"
import "./style.css"
import Sidebar from '../../components/sidebar/sidebar';
import RSidebar from '../../components/rsidebar/rsidebar';
import Pharmacy from '../Pharmacy/pharmacy';
import TopBar from '../../components/topbar/topbar';
import Appointment from '../../components/consultation/consultation';
import Consultation from '../../components/consultation/consultation';
import ViewAppointment from '../../components/viewappointment';
import BookAppointment from '../../components/bookappointment';
import Enrollment from '../../components/studentenrollment';
import Settings from '../Setting';
function Dashboard() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        rememberMe: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };


    const linkStyle = {
        textDecoration: 'none', // Remove underline
        color: '', // Change the link text color
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        // Access formData.username, formData.password, and formData.rememberMe for your login logic.
    };

    return (
        <>
            <div class="wrapper d-flex align-items-stretch">



                <Sidebar />
                <div id="content" class="" style={{ color: "rgb(241 244 253) !important" }}>
               
                <TopBar />
                <Routes>
               
               <Route path="/Dashboard" element={<RSidebar />} />

                   <Route path="/enrollment" element={<Enrollment />} />
                   <Route path="/settings" element={<Settings />} />
                   <Route path="/studentcentral" element={<Enrollment />} />
                   <Route path="/pharmacy" element={<Pharmacy />} />
                   <Route path="/appointment" element={<Consultation />} />
                   <Route path="/bookappointment" element={<BookAppointment />} />
                   <Route path="/viewappointment" element={<ViewAppointment />} />
               </Routes>
            </div>
               
                
                
               
            </div>


         

        </>
    );
}

export default Dashboard;