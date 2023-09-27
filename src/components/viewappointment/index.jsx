import React, { useEffect, useState } from 'react';
import { Link, Navigate, Routes, Route, useLocation, NavLink } from "react-router-dom"

import Breadcrumbs from '../breadcrumb';
function ViewAppointment() {


  const [appointmentList, setAppointmentList] = useState([{
    id: 1,
    gp: "Lorem ipsum dolor sit amet consecteturit sit purus fames sit.",
    date: "12 Sep 2023 12:22 pm"
  }, {
    id: 2,
    gp: "Lorem ipsum dolor sit amet consecteturit sit purus fames sit.",
    date: "14 Oct 2023 08:00 pm"
  }, {
    id: 3,
    gp: "Lorem ipsum dolor sit amet consecteturit sit purus fames sit.",
    date: "25 Dec 2023 11:00 am"
  }, {
    id: 4,
    gp: "Lorem ipsum dolor sit amet consecteturit sit purus fames sit.",
    date: "20 Dec 2023 01:00 pm"
  }, {
    id: 5,
    gp: "Lorem ipsum dolor sit amet consecteturit sit purus fames sit.",
    date: "19 Jan 2023 03:00 pm"
  },])




  return (

    <>
      <Breadcrumbs links={[{ name: "Pharmacy", path: "/pharmacy" }, { name: "Consultation", path: "/consultation" }, { name: "View Appointment", path: "/viewappointment" }]} />

      <div class="container-fluid bg-white m-4">
        <div class="table-responsive rounded">
          <h4 className='m-3'>
            List of Appointments
          </h4>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th class="fs-6 p-4" scope="col">#</th>
                <th class="fs-6 p-4" scope="col">GP Name </th>
                <th scope="col" className='p-4'>Date</th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {
                appointmentList.map((item, index) => {
                  return (<>
                    <tr className='p-4'>
                      <td class="fs-6 " className='p-4'>{index + 1}</td>
                      <td class="fs-6 " className='p-4'>{item.gp}</td>
                      <td className='p-4'>{item.date}</td>
                      <td></td>
                      <td ><button type="button" class="btn btn-outline-danger">Cancel</button></td>
                      <td colspan="2"><button type="button" class="btn btn-outline-success">Reschedule</button></td>
                    </tr>

                  </>)
                })
              }










            </tbody>
          </table>
        </div>


      </div>



    </>
  );
}

export default ViewAppointment;