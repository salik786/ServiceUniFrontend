import React, { useEffect, useState } from 'react';
import { Link, Navigate, useLocation } from "react-router-dom"

import Breadcrumbs from '../../components/breadcrumb';
import { toast } from 'react-toastify';

function ViewCart() {
    let location = useLocation()
    const [price, setPrice] = useState(0)
    console.log("locationssss", location)
    const [medicineList, setMedicine] = useState([
        {
            id: 1, name: "Panadol CF", quantity: 5, price: 20.10
        },
        {
            id: 2, name: "Dicloran", quantity: 2, price: 2
        }, {
            id: 3, name: "Nimz 500", quantity: 5, price: 10.00
        }
    ])

    const removeItem = (item) => {
        console.log("itemasdasd", item)
        let filtermedicines = medicineList.filter((data) => data.id != item.id)
        console.log("filter", filtermedicines)
        setMedicine(filtermedicines)
        updatePrice(filtermedicines)
    }

    const updatePrice = (list) => {
        let price = 0
        for (let item in list) {

            price += list[item].price;

        }
        setPrice(price)
        console.log("total amount ", price)
    }
    const BuyNow = () => {

        if (medicineList.length > 0 && price > 0) {
            toast.success("Item Successfully Purchased")
            setMedicine([])

        }
        else {
            toast.error("Cart is Empty")
        }
    }
    useEffect(() => {
        if (location.state && location.state.data) {
            setMedicine(location.state.data)
            updatePrice(location.state.data)
        }
        else {
            setMedicine([])
        }
    }, [])
    return (
        <>
            <div class="px-4">
                <Breadcrumbs links={[{ name: "Pharmacy", path: "/pharmacy" }, { name: "Dispencing", path: "/dispencing" }, { name: "View Cart", path: "/viewcart" }]} />
            </div>
            <section>
                <div class="main-content w-100 h-100 px-5">
                    <nav aria-label="breadcrumb">

                    </nav>
                    <div class="content">

                        <div class="container-fluid bg-white p-4">
                            <h4 className='mb-3'>Cart </h4>
                            <div>
                                {medicineList.length > 0 ?
                                    <div class="table-responsive">
                                        <table class="table table-bordered border vertical ">
                                            <thead>
                                                <tr >

                                                    <th className='p-3'>
                                                        Name
                                                    </th>
                                                    <th scope='col' className='p-3'>
                                                        Description
                                                    </th>
                                                    <th scope='col' className='p-3'>
                                                        Price
                                                    </th>
                                                    <th scope='col' className='p-3'>
                                                        Remove Items
                                                    </th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    medicineList.map((item, index) => {
                                                        return (<>
                                                            <tr key={index}>
                                                                <td>
                                                                    <div class="p-2">

                                                                        <div class="ms-3 d-inline-block align-middle">
                                                                            <h6 class="mb-0"><a href="#" class="text-dark d-inline-block">{item.name}</a></h6>
                                                                        </div>
                                                                    </div>
                                                                </td>





                                                                <td class="align-middle"><a href="#" class="text-dark">
                                                                    <p type="" class=" text-secondary py-2 px-4">{item.description}</p>
                                                                </a>
                                                                </td>
                                                                <td class="align-middle"><a href="#" class="text-dark">
                                                                    <p type="button" class="text-secondary py-2 px-4">{item.price}</p>
                                                                </a>
                                                                </td>
                                                                <td class="align-middle"><a href="#" class="text-dark">
                                                                    <button onClick={() => { removeItem(item) }} type="button" class="btn btn-outline-danger py-2 px-4">X</button>
                                                                </a>
                                                                </td>
                                                            </tr>



                                                        </>)
                                                    })}



                                            </tbody>
                                        </table>
                                    </div> : <><div className='text-center border-none mb-4'>Cart is Empty</div></>}
                                <div className='text-end' style={{ marginTop: "0" }}><span>
                                    <h6>Total Price:</h6>
                                </span>
                                    <span>{price}</span>

                                </div>




                                <div className='d-flex w-100 justify-content-end' style={{ marginTop: "10%" }}>
                                    <div class=" " style={{ width: "150px", marginRight: "15px" }}>
                                        <button class="btn btn-primary border border-primary w-100" onClick={BuyNow}>
                                            Buy
                                        </button>
                                    </div>
                                    <div class=" " style={{ width: "150px" }}>
                                        <button class="btn btn-outline-secondary border border-secondary w-100" >
                                            Cancel
                                        </button>
                                    </div>
                                </div>






                            </div>

                        </div>

                    </div>


                </div>

            </section >




        </>
    );
}

export default ViewCart;
