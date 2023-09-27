import React, { useState } from 'react';
import { Link, NavLink, Navigate } from "react-router-dom"

import Breadcrumbs from '../../components/breadcrumb';

function Dispensing() {

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
                <Breadcrumbs links={[{ name: "Pharmacy", path: "/pharmacy" }, { name: "Dispencing", path: "/dispencing" }]} />
            </div>
            <section>
                <div class="main-content w-100 h-100 px-5">
                    <nav aria-label="breadcrumb">

                    </nav>
                    <div class="content">
                        <div class="container-fluid pt-5 bg-white p-4">
                            <div class="row height d-flex justify-content-center mb-4 align-items-center">

                                <div class="col-md-10 col-lg-10 col-sm-12  ">

                                    <div class="search">
                                        <i class="fa fa-search"></i>
                                        <div className="dropdown w-100" >
                                            <div className="control w-100">
                                                <div className="selected-value">
                                                    <input type="text" class=" py-2" placeholder="Search Something" onChange={handleChange} /></div>

                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div class="col-lg-2 col-md-12 col-sm-12 col-xm-12 py-4 text-md-center text-sm-center  ">

                                    <NavLink to="/viewcart"><button type="button" class="btn py-2 px-4 btn-primary btn-sm" >View Cart<i class="fa fa-shopping-cart"></i></button></NavLink>
                                </div>


                            </div>

                            {medicineList.length > 0 ?
                                <div class="table-responsive">
                                    <table class="table table-bordered border vertical ">

                                        <tbody>
                                            {
                                                medicineList.map((item, index) => {
                                                    return (<>
                                                        <tr key={index}>
                                                            <td>
                                                                <div class="p-2">
                                                                    <img src="/images/panadol.png" alt="" width="70" class="img-fluid rounded shadow-sm" />
                                                                    <div class="ms-3 d-inline-block align-middle">
                                                                        <h6 class="mb-0"><a href="#" class="text-dark d-inline-block">{item.name}</a></h6><span class="text-muted font-weight-normal font-italic">{item.price}$</span>
                                                                    </div>
                                                                </div>
                                                            </td>

                                                            <td class="px-3"></td>
                                                            <td class="align-middle">
                                                                <a href="#" tabindex="-1" role="button" aria-disabled="true">
                                                                    <button type="button" class="btn btn-outline-secondary py-2 px-4">{item.quantity}</button>
                                                                </a>
                                                            </td>


                                                            <td class="align-middle"><a href="#" class="text-dark">
                                                                <button type="button" class="btn btn-outline-primary py-2 px-4">Add to cart</button>
                                                            </a>
                                                            </td>
                                                        </tr>



                                                    </>)
                                                })}



                                        </tbody>
                                    </table>
                                </div> : <><div className='text-center border-none mb-4'>No Medicine Found</div></>}


                        </div>

                    </div>


                </div>

            </section >




        </>
    );
}

export default Dispensing;
