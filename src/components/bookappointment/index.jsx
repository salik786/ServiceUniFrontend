import React, { useEffect, useState } from 'react';

import SearchableDropdown from '../search';
import 'react-dropdown/style.css';
import Breadcrumbs from '../breadcrumb';
import moment from "moment"
import useToast from '../Toast';
import { Pharmacy } from '../../api/pharmacy';
function BookAppointment() {

    const { toastSuccess, toastError } = useToast()
    // console.log("path÷name",pathname)
    const [value, setValue] = useState("");
    const [errors, setErrors] = useState({
        gp: "",
        timestamp: ""
    })
    const [timestamp, setTimestamp] = useState("")
    const [formattime, setformattime] = useState("")



    const [selectedGP, setSelectedGp] = useState({ id: "", name: "", description: "", slots: "" })



    //-------

    const [searchFields, setSearchFields] = useState({
        search: '',
        date: '',
        time: '',
        slotid: ""
    });





    const [GPS, setGps] = useState([
        { id: 1, name: "Graspus graspus" },
        { id: 2, name: "Grus rubicundus" },
        { id: 3, name: "Speothos vanaticus" },
        { id: 4, name: "Charadrius tricollaris" },
        { id: 5, name: "Sciurus vulgaris" },
        { id: 6, name: "Ateles paniscus" },
        { id: 7, name: "Bucorvus leadbeateri" }])

    useEffect(() => {
        GetGps()


    }, [])
    const GetGps = async () => {
        try {
            let response = await Pharmacy.get_all_gps();
            setGps(response.data)
            console.log(response)
        }
        catch (e) {
            console.log("error fetching data chec", e)
            toastError("There is problem in fetching data, check console for detail error")
        }
    }

    function convertSingleQuotesToDoubleQuotes(data) {
        // Use JSON.stringify to convert the array to a JSON string.
        const jsonString = JSON.stringify(data);

        // Use regular expressions to replace single quotes with double quotes.
        const convertedString = jsonString.replace(/'/g, '"');

        // Parse the modified JSON string back to an array of objects.
        const convertedData = JSON.parse(convertedString);

        return convertedData;
    }

    const BookAppointment = async () => {
        if (selectedGP.id == "") {
            toastError("GP is not selected");
            setErrors({ gp: "Select GP" })

        }
        else if (searchFields.slotid == "") {
            setErrors({ gp: "", timestamp: "Please Select Date" })

        }
        else {
            let user = JSON.parse(sessionStorage.getItem("user"))



            // ---------
            let selectedGP = GPS.filter((item) => item.name == searchFields.search)

            console.log(searchFields)
            if (selectedGP) {
                const { name, description, id } = selectedGP[0];
                //     console.log("gp description",)
                let description_arr = JSON.parse(description)
                console.log(description_arr)
                console.log(searchFields.slotid)
                let selectedslot = description_arr.filter((item) => parseInt(item.slotid) == parseInt(searchFields.slotid))

                let data = { user_id: user.id, gp_id: selectedGP[0].id, timestamp: selectedslot[0].date }


                try {
                    let responce = Pharmacy.book_appointment(data).then(responce => {
                        if (responce.error) {
                            for (let item in responce.data) {
                                console.log(responce.data[item])
                                toastError(responce.data[item])
                            }
                        }
                        else {
                            const updatedTimeSlots = [...description_arr];

                            // Find and remove the booked slot
                            const bookedSlotIndex = updatedTimeSlots.findIndex((item) => parseInt(item.slotid) == parseInt(searchFields.slotid));
                            console.log(updatedTimeSlots, "updatedTimeSlots")
                            updatedTimeSlots[bookedSlotIndex].userid = user.id;

                            let doubleQuoteArr = convertSingleQuotesToDoubleQuotes(updatedTimeSlots)
                            console.log(doubleQuoteArr, "updatedTimeSlots")
                            let newData = { description: JSON.stringify(doubleQuoteArr) }
                            const update_gp_resp = Pharmacy.update_gp(newData, selectedGP[0].id).then(resp2 => {

                                console.log(resp2, "update_gp_resp")

                                toastSuccess("Appointment Book Successfully")
                                setSearchFields({
                                    search: '',
                                    date: '',
                                    time: '',
                                    slotid: ""
                                })
                                window.location.reload()
                            }).catch(e => {
                                console.log("error in Update Description GP")
                            })


                        }
                    })
                    console.log("register api call response", responce)



                    // try {
                    // Create a copy of the selected doctor's timeSlots array

                }
                catch (e) {
                    console.log("error in updating GP data")
                }



                // }
                // catch (e) {
                //     console.log("error in Book appointment", e)
                // }




                // else {
                //     setErrors({ timestamp: "select time slot" })
                // }


            }

        }

    }


    const handleSlot = (time, slotid) => {

        setSearchFields({ ...searchFields, time: time, slotid: slotid })
        setErrors({ timestamp: "" })

        console.log(slotid)
    }

    const handleChange = (data) => {


        console.log("time and date ", data)
        let selectedGP = GPS.filter((item) => item.name == data)
        console.log(selectedGP[0])
        if (selectedGP) {
            const { name, description, id } = selectedGP[0];
            console.log("gp description",)
            let description_arr = JSON.parse(description)
            const timeSlots = description_arr.filter((item) => item.userid == "").map((slot) => ({
                slotid: slot.slotid,
                userid: "",
                date: slot.date,
                time: ` ${moment(slot.date).format('MMMM Do YYYY')} (${slot.timeStart} - ${slot.timeEnd})`,
            }));
            console.log("timeslotss", timeSlots)
            setSearchFields({
                search: name,
                date: '',
                time: '',
            });

            console.log("gpid", id)
            setSelectedGp({
                id
                , name,
                timeSlots,
            })

            setErrors({ gp: "" })

        }

    }

    console.log("selectedd", selectedGP)


    return (

        <>
            <Breadcrumbs links={[{ name: "Pharmacy", path: "/pharmacy" }, { name: "Consultation", path: "/appointment" }, { name: "Book an Appointment", path: "/bookappointment" }]} />
            <div>


                <div className="m-4"   >
                    <div className='bg-white p-4' style={{ height: "50vh" }}>
                        <div class="form-outline mb-4 d-flex w-100 row">
                            <div className='col-lg-2'>

                                <label for="Username" class="form-label bold text-black mr-4" style={{ fontWeight: "500 !important", marginRight: "20%" }}>GP</label>
                            </div>
                            <div className='col-lg-6'>
                                <SearchableDropdown
                                    options={GPS}
                                    label="name"
                                    class="w-100"
                                    id="id"
                                    selectedVal={selectedGP.name}
                                    handleChange={(data) => handleChange(data)}
                                />
                                <span style={{ color: "red" }}> {errors.gp}</span>
                            </div>

                        </div>

                        <div class="form-outline mb-4 d-flex w-100 row">
                            <div className='col-lg-2 col-md-12 col-sm-12'>
                                <label for="exampleInputPassword1" class="form-label text-black" style={{ fontWeight: "500 !important", marginRight: "18%" }} >Date</label>
                            </div>
                            <div className='col-lg-4 col-md-12 col-sm-12'>
                                <div class="form-group  w-100">

                                    <div class="input-group " id="show_hide_password">
                                        <select
                                            class="form-control border  w-50"
                                            value={searchFields.time}
                                            onChange={(e) => handleSlot(e.target.value, e.target.options[e.target.selectedIndex].getAttribute('data-slot-id'))}
                                        // onChange={(e) => setSearchFields({ ...searchFields, time: e.target.value })}
                                        >
                                            <option value="">Select a Date-Time</option>
                                            {selectedGP && selectedGP.name !== "" && selectedGP.timeSlots

                                                .map((slot) => (
                                                    <option key={slot.time} value={slot.time} data-slot-id={slot.slotid}>
                                                        {slot.time}
                                                    </option>
                                                ))
                                            }
                                        </select>


                                        {/* <input
                                            type="text"
                                            placeholder="Time"
                                            class="form-control border  w-50"
                                            value={searchFields.time}
                                            onChange={(e) => setSearchFields({ ...searchFields, time: e.target.value })}
                                        /> */}

                                        {/* <input class="form-control border  w-50" type="time" onChange={handleChange} /> */}

                                    </div>
                                    <span style={{ color: "red" }}> {errors.timestamp}</span>
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <div class="form-group  w-100">


                                </div>
                            </div>
                        </div>
                        <div class="form-outline mb-4 d-flex w-100 row">
                            {/* <div className='col-lg-2'>
                                <label for="exampleInputPassword1" class="form-label text-black" style={{ fontWeight: "500 !important", marginRight: "18%" }}>Description</label>
                            </div> */}
                            <div className='col-lg-4'>
                                <div class="form-group  w-100">

                                    {/* <div class="input-group " id="show_hide_password">
                                        <input class="form-control border  w-50" value={selectedGP.description} type="text" disabled />

                                    </div> */}
                                </div>
                            </div>

                        </div>

                        <div className='d-flex w-100 justify-content-end' style={{ marginTop: "10%" }}>
                            <div class="mt-4 " style={{ width: "150px", marginRight: "15px" }}>
                                <button class="btn btn-primary border border-primary w-100" onClick={BookAppointment}>
                                    Submit
                                </button>
                            </div>
                            <div class="mt-4 " style={{ width: "150px" }}>
                                <button class="btn btn-outline-secondary border border-secondary w-100" >
                                    Cancel
                                </button>
                            </div>

                        </div>

                    </div>



                </div>
            </div>


        </>
    );
}

export default BookAppointment;