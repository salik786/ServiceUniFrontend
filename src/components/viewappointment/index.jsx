import React, { useEffect, useState } from 'react';

import moment from 'moment';
import Breadcrumbs from '../breadcrumb';
import { Pharmacy } from '../../api/pharmacy';
// import useToast from '../Toast';
function ViewAppointment() {
  // const [toastError, toastSuccess] = useToast()

  const [appointmentList, setAppointmentList] = useState([])
  const [dummyList, setDummyList] = useState([])



  function selectDistinctGp(data) {
    const distinctGpMap = new Map();

    data.forEach(item => {
      const gpId = item.gp.id;
      if (!distinctGpMap.has(gpId)) {
        distinctGpMap.set(gpId, item);
      }
    });

    const distinctGpData = Array.from(distinctGpMap.values());

    return distinctGpData;
  }


  useEffect(() => {
    getAppointment()
  }, [])
  const getAppointment = async () => {
    let resp = await Pharmacy.view_appointment();
    console.log("ressssss", resp.data)

    if (resp && resp.data) {
      const newArray = selectDistinctGp(resp.data)
      console.log(newArray, "newArray")
      setDummyList(newArray)
      handleApiResponse(newArray)
    }






    // if (resp.data) {

    // }
  }

  const handleApiResponse = (data) => {

    if (data.length > 0) {
      console.log("time and date ", data[0].gp)

      let appArr = []
      let appointmentObj = {};
      const user = JSON.parse(sessionStorage.getItem("user"))
      for (let i = 0; i < data.length; i++) {

        let description_arr = JSON.parse(data[i].gp.description)
        const timeSlotsArray = description_arr.filter((item) => parseInt(item.userid) == parseInt(user.id))
        console.log(timeSlotsArray, "timeSlotsArray")
        timeSlotsArray.map((slot) => {
          appointmentObj = data[i].gp;
          appointmentObj.time = ` ${moment(slot.date).format('MMMM Do YYYY')} (${slot.timeStart} - ${slot.timeEnd})`
          appointmentObj.slotid = slot.slotid
          appArr.push(appointmentObj)

        })
      }
      console.log("apparr", appArr)
      setAppointmentList(appArr)



    }

  }
  const handleRemove = (item) => {
    console.log("Item", item)

    const user2 = JSON.parse(sessionStorage.getItem("user"))
    let newArr;
    console.log("dummmmmmmmmy", dummyList)
    // for (let i = 0; i < dummyList.length; i++) {

    let newDataList = dummyList.filter((appList) => appList.gp.name == item.name)
    console.log("new data list", newDataList)
    let description_arr = JSON.parse(newDataList[0].gp.description)
    newArr = description_arr.filter((desItem) => parseInt(desItem.userid) == parseInt(user2.id))
    console.log(newArr, "newArr")
    // console.log("timesLOTESSS", timeSlotsArray2)


    // }
    console.log("newArr", newArr)
    // if (newArr) {
    const updatedTimeSlots = [...newArr];
    const bookedSlotIndex = updatedTimeSlots.findIndex((newItem) => parseInt(newItem.slotid) == parseInt(item.slotid));
    console.log(updatedTimeSlots, "updatedTimeSlots")
    if (updatedTimeSlots.length > 0) {
      updatedTimeSlots[bookedSlotIndex].userid = "";
      console.log("updatedTimeSlotsupdatedTimeSlots", updatedTimeSlots)
      let newData = { description: JSON.stringify(updatedTimeSlots) }

      const update_gp_resp = Pharmacy.update_gp(newData, item.id).then(resp2 => {

        console.log(resp2, "update_gp_resp")

        // toastSuccess("Appointment Cancel Successfully")
        console.log("Successfuly deleted ")
        getAppointment()
        // window.location.reload()
      }).catch(e => {
        console.log("error in Update Description GP")
      })
    }
    // }






    // console.log(description_arr2, "descriptionarrr")
    // const updatedTimeSlots = [...description_arr2];

    // // // Find and remove the booked slot
    // const bookedSlotIndex = updatedTimeSlots.findIndex((item2) => parseInt(item2.slotid) == parseInt(item.slotid));

    // console.log(updatedTimeSlots, "updatedTimeSlots")
    // updatedTimeSlots[bookedSlotIndex].userid = "";

    // // let doubleQuoteArr = convertSingleQuotesToDoubleQuotes(updatedTimeSlots)
    // // console.log(doubleQuoteArr, "updatedTimeSlots")
    // let newData = { description: JSON.stringify(updatedTimeSlots) }
    // console.log(updatedTimeSlots, "updatedtimeslots")
    // const update_gp_resp = Pharmacy.update_gp(newData, selectedGP[0].id).then(resp2 => {

    //   console.log(resp2, "update_gp_resp")

    // toastSuccess("Appointment Book Successfully")

    // window.location.reload()
    // }).catch(e => {
    //   console.log("error in Update Description GP")
    // })




  }
  return (

    <>
      <Breadcrumbs links={[{ name: "Pharmacy", path: "/pharmacy" }, { name: "Consultation", path: "/consultation" }, { name: "View Appointment", path: "/viewappointment" }]} />

      <div class="container-fluid bg-white m-4">
        <div class="table-responsive rounded">
          <h4 className='m-3'>
            List of Appointments
          </h4>

          <table class="table table-bordered">
            {appointmentList.length > 0 ? <>

              <thead>
                <tr>
                  <th class="fs-6 p-4" scope="col">#</th>
                  <th class="fs-6 p-4" scope="col">GP Name </th>
                  <th scope="col" className='p-4'>Date</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  {/* <th scope="col"></th> */}
                </tr>
              </thead>
              <tbody>
                {appointmentList.map((item, index) => {
                  return (<>
                    <tr className='p-4'>
                      <td class="fs-6 " className='p-4'>{index + 1}</td>
                      <td class="fs-6 " className='p-4'>{item.name}</td>
                      <td className='p-4'>{item.time}</td>
                      <td></td>
                      <td ><button type="button" class="btn btn-outline-danger" onClick={() => handleRemove(item)}>Remove Appointment</button></td>
                      {/* <td colspan="2"><button type="button" class="btn btn-outline-success">Reschedule</button></td> */}
                    </tr>

                  </>)
                })
                }










              </tbody>
            </> : <p className='text-center'>No Appointment Booked</p>}
          </table>
        </div>


      </div>



    </>
  );
}

export default ViewAppointment;