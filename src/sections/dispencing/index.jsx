import React, { useState, useEffect } from 'react';
import { Link, NavLink, Navigate } from "react-router-dom"
import { Pharmacy } from '../../api/pharmacy';
import Breadcrumbs from '../../components/breadcrumb';
import { toast } from 'react-toastify';

function Dispensing() {

    const [medicineList, setMedicine] = useState([

    ])
    const [cartLen, setCartLen] = useState(0)
    const [fullList, setFullList] = useState([

    ])
    const [cart, setCart] = useState([])
    const [searchField, setSearchField] = useState("")
    const handleChange = e => {
        setSearchField(e.target.value);


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
    const handleCart = async (item) => {
        console.log("item", item)
        setCart((cart) => [...cart, item]);
        setCartLen(cart.length + 1)
        // let data = { cart_id: Math.floor(Math.random() * (1000 - 1 + 1) + 1), medicine_id: item.id }    

        // try {
        //     let response = await Pharmacy.add_to_cart(data)
        //     console.log("register api call response", response)
        //     if (response.error) {
        //         for (let item in response.data) {
        //             if (item.length == 0) {
        //                 toast.error(response.data[0])
        //             }
        //             console.log(response.data[item][0])
        //             toast.error(response.data[item])
        //         }
        //     }
        //     else {
        //         toast.success("Item Successfully Added to Cart")

        //     }
        // }
        // catch (e) {
        //     console.log("error-->>", e)
        // }
    }
    console.log("cartttttt", cart)
    const fetchMedicines = async () => {
        let medicines = await Pharmacy.get_all_medicines();
        console.log(medicines.data)
        if (medicines.data.length > 0) {

            setMedicine(medicines.data);
            setFullList(medicines.data)
        }
        else {
            setMedicine([])
        }
    }
    useEffect(() => {
        fetchMedicines()

    }, [])
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

                                    <Link to="/viewcart" state={{ data: cart }}
                                    ><button type="button" class="btn py-2 px-4 btn-primary btn-sm" >View Cart ({cartLen})<i class="fa fa-shopping-cart"></i></button></Link>
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
                                                                    {/* <img src="/images/panadol.png" alt="" width="70" class="img-fluid rounded shadow-sm" /> */}
                                                                    <div class="ms-3 d-inline-block align-middle">
                                                                        <h6 class="mb-0"><a href="#" class="text-dark d-inline-block">{item.name}</a></h6><span class="text-muted font-weight-normal font-italic">{item.price}$</span>
                                                                    </div>
                                                                </div>
                                                            </td>

                                                            <td class="px-3"></td>
                                                            <td class="align-middle">
                                                                {/* <a href="#" tabindex="-1" role="button" aria-disabled="true"> */}
                                                                <p class=" py-2 px-4">{item.description}</p>
                                                                {/* </a> */}
                                                            </td>


                                                            <td class="align-middle"><a href="#" class="text-dark">
                                                                <button type="button" class="btn btn-outline-primary py-2 px-4" onClick={() => { handleCart(item) }}>Add to cart</button>
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
