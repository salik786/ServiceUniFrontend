import React, { useState } from 'react';

import "./style.css"
import Uploader from '../../components/uploader';
import { useEffect } from 'react';
function Settings() {
    const [formData, setFormData] = useState({
        first_name: '',
        email: '',
        last_name: false,

    });


    useEffect(() => {
        if (sessionStorage.getItem("user")) {
            setFormData(JSON.parse(sessionStorage.getItem("user")))



        }
    }, [])

    return (
        <>

            <div class="container light-style flex-grow-1 container-p-y m-4">

                <h4 class="font-weight-bold  mb-4 text-dark">
                    Account settings
                </h4>

                <div class=" overflow-hidden bg-white mr-4">
                    <div class="row no-gutters row-bordered row-border-light">

                        <div class="col-md-12">
                            <div class="tab-content">
                                <div class="tab-pane fade active show" id="account-general">
                                    <div className='row mt-4' >

                                        <div className='col-lg-2 col-md-3 col-sm-12'>
                                            <div class="card-body media align-items-center">
                                                <div class="media-body">
                                                    <div id="avatar"></div>

                                                    {/* <Uploader /> */}

                                                    <div class="text-light small mt-1">Allowed JPG, GIF or PNG. Max size of 800K</div>
                                                </div>
                                                <div className='' style={{ marginLeft: "20px" }} >
                                                    <button type="button" class="btn btn-outline-primary md-btn-flat">Upload</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-9'>
                                            <div class="card-body">
                                                <div class="form-group mb-4">
                                                    <label class="form-label ml-1">First name</label>
                                                    <input type="text" class="form-control mb-1 border" value={formData.first_name} />
                                                </div>
                                                <div class="form-group  mb-4">
                                                    <label class="form-label ml-1">Last Name</label>
                                                    <input type="text" class="form-control border" value={formData.last_name} />
                                                </div>
                                                <div class="form-group  mb-4">
                                                    <label class="form-label ml-1">E-mail</label>
                                                    <input type="text" class="form-control mb-1 border" value={formData.email} />

                                                </div>
                                                {/* <div class="form-group  mb-4">
                                                    <label class="form-label ml-1">Student ID</label>
                                                    <input type="text" class="form-control border" value="Company Ltd." />
                                                </div> */}
                                                <div class="d-flex justify-content-end mt-4 mb-3 ml-3">
                                                    <button type="button" class="btn btn-primary">Save changes</button>&nbsp;
                                                    <button type="button" class="btn border-secondary">Cancel</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <hr class="border-light m-0" />



                                </div>


                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </>
    );
}

export default Settings;
