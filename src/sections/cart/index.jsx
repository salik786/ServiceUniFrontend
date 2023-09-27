import React, { useState } from 'react';
import { Link, Navigate } from "react-router-dom"

import Breadcrumbs from '../../components/breadcrumb';

function ViewCart() {

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
    const [fullList, setFullList] = useState([
        {
            id: 1, name: "Panadol CF", quantity: 5, price: 20.10
        },
        {
            id: 2, name: "Dicloran", quantity: 2, price: 2
        }, {
            id: 3, name: "Nimz 500", quantity: 5, price: 10.00
        }
    ])
    const [cart, setCart] = useState([])
    const [searchField, setSearchField] = useState("")
    const handleChange = e => {
        setSearchField(e.target.value);
        console.log("etargte", e.target.value)

        const filterMedicine = fullList.filter(
            item => {
                return (item.name.toLowerCase().includes(searchField.toLowerCase()));
            })
        if (e.target.value == "") {
            setMedicine(fullList)
        }
        else {
            setMedicine(filterMedicine)



        }


    };


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

                                                    <th scope='col' className='p-3'>
                                                        Name
                                                    </th>
                                                    <th scope='col' className='p-3'>
                                                        Quantity
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
                                                                        <img src="/images/panadol.png" alt="" width="70" class="img-fluid rounded shadow-sm" />
                                                                        <div class="ms-3 d-inline-block align-middle">
                                                                            <h6 class="mb-0"><a href="#" class="text-dark d-inline-block">{item.name}</a></h6>
                                                                        </div>
                                                                    </div>
                                                                </td>

                                                                <td class="px-3"></td>



                                                                <td class="align-middle"><a href="#" class="text-dark">
                                                                    <button type="button" class="btn btn-outline-primary py-2 px-4">{item.quantity}</button>
                                                                </a>
                                                                </td>
                                                                <td class="align-middle"><a href="#" class="text-dark">
                                                                    <span type="button" class="text-secondary py-2 px-4">{item.price}</span>
                                                                </a>
                                                                </td>
                                                                <td class="align-middle"><a href="#" class="text-dark">
                                                                    <button type="button" class="btn btn-outline-danger py-2 px-4">X</button>
                                                                </a>
                                                                </td>
                                                            </tr>



                                                        </>)
                                                    })}



                                            </tbody>
                                        </table>
                                    </div> : <><div className='text-center border-none mb-4'>No Medicine Found</div></>}
                                <div className='text-end'><span>
                                    Total Price:
                                </span>
                                    <span>0</span>

                                </div>
                                <div className='text-end'>
                                    <button className='btn btn-outline-primary'>Buy Now</button>
                                    <button className='btn btn-secondary'>Cancel</button>
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
