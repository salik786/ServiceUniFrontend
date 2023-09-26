import React, { useEffect, useState } from 'react';
import { Link, Navigate, Routes, Route, useLocation, NavLink } from "react-router-dom"
import TopBar from '../topbar/topbar';
import CenterDashboard from '../centerdashboard/centerdashboard';
import Pharmacy from '../../pages/Pharmacy/pharmacy';
import Breadcrumbs from '../breadcrumb';
function ViewAppointment() {
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
        <Breadcrumbs   links={[{name:"Pharmacy",path:"/pharmacy"},{name:"Consultation",path:"/consultation"},{name:"View Appointment",path:"/viewappointment"}]}/>
       
            <div class="container-fluid bg-white m-4">     
              <div class="table-responsive rounded">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th class="fs-6"scope="col">List of Appointment</th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>                  
                      <td class="fs-6">Lorem ipsum dolor sit amet consecteturit sit purus fames sit.</td>
                      <td></td>
                      <td></td>
                      <td ><button type="button" class="btn btn-outline-danger">Cancel</button></td>
                      <td colspan="2"><button type="button" class="btn btn-outline-success">Reschedule</button></td>
                    </tr>
                    <tr>        
                      <td class="fs-6">Lorem ipsum dolor sit amet consecteturit sit purus fames sit.</td>
                      <td></td>
                      <td></td>
                      <td ><button type="button" class="btn btn-outline-danger">Cancel</button></td>
                      <td colspan="2"><button type="button" class="btn btn-outline-success">Reschedule</button></td>
                    </tr>
                    <tr>                  
                      <td class="fs-6">Lorem ipsum dolor sit amet consecteturit sit purus fames sit.</td>
                      <td></td>
                      <td></td>
                      <td ><button type="button" class="btn btn-outline-danger">Cancel</button></td>
                      <td colspan="2"><button type="button" class="btn btn-outline-success">Reschedule</button></td>
                    </tr>
                    <tr>
                                           
                      <td class="fs-6">Lorem ipsum dolor sit amet consecteturit sit purus fames sit.</td>
                      <td></td>
                      <td></td>
                      <td ><button type="button" class="btn btn-outline-danger">Cancel</button></td>
                      <td colspan="2"><button type="button" class="btn btn-outline-success">Reschedule</button></td>
                    </tr>
                    <tr>
                                           
                      <td class="fs-6">Lorem ipsum dolor sit amet consecteturit sit purus fames sit.</td>
                      <td></td>
                      <td></td>
                      <td ><button type="button" class="btn btn-outline-danger">Cancel</button></td>
                      <td colspan="2"><button type="button" class="btn btn-outline-success">Reschedule</button></td>
                    </tr>
                    <tr>
                                           
                      <td class="fs-6">Lorem ipsum dolor sit amet consecteturit sit purus fames sit.</td>
                      <td></td>
                      <td></td>
                      <td ><button type="button" class="btn btn-outline-danger">Cancel</button></td>
                      <td colspan="2"><button type="button" class="btn btn-outline-success">Reschedule</button></td>
                    </tr>
                    
                  
                    
                    
                    
                  </tbody>
                </table>
              </div>
        
        
            </div>
        
        

        </>
    );
}

export default ViewAppointment;