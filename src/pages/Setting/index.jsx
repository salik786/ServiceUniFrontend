import React, { useState } from 'react';


function Settings() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        rememberMe: false,
    });



    return (
        <>
            <div class="container light-style flex-grow-1 container-p-y">

                <h4 class="font-weight-bold py-3 mb-4">
                    Account settings
                </h4>

                <div class=" overflow-hidden bg-white">
                    <div class="row no-gutters row-bordered row-border-light">

                        <div class="col-md-12">
                            <div class="tab-content">
                                <div class="tab-pane fade active show" id="account-general">

                                    <div class="card-body media align-items-center">
                                        <div class="media-body ml-4">
                                            <label class="btn btn-outline-primary">
                                                Upload new photo
                                                <input type="file" class="account-settings-fileinput" />
                                            </label> &nbsp;
                                            <button type="button" class="btn btn-default md-btn-flat">Reset</button>

                                            <div class="text-light small mt-1">Allowed JPG, GIF or PNG. Max size of 800K</div>
                                        </div>
                                    </div>
                                    <hr class="border-light m-0" />

                                    <div class="card-body">
                                        <div class="form-group mb-4">
                                            <label class="form-label ml-1">Username</label>
                                            <input type="text" class="form-control mb-1 border" value="nmaxwell" />
                                        </div>
                                        <div class="form-group  mb-4">
                                            <label class="form-label ml-1">Name</label>
                                            <input type="text" class="form-control border" value="Nelle Maxwell" />
                                        </div>
                                        <div class="form-group  mb-4">
                                            <label class="form-label ml-1">E-mail</label>
                                            <input type="text" class="form-control mb-1 border" value="nmaxwell@mail.com" />

                                        </div>
                                        <div class="form-group  mb-4">
                                            <label class="form-label ml-1">Student ID</label>
                                            <input type="text" class="form-control border" value="Company Ltd." />
                                        </div>
                                        <div class="d-flex justify-content-end mt-4 mb-3 ml-3">
                                            <button type="button" class="btn btn-primary">Save changes</button>&nbsp;
                                            <button type="button" class="btn border-secondary">Cancel</button>
                                        </div>
                                    </div>

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
