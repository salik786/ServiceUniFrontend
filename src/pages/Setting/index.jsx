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

                <div class="card overflow-hidden">
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
                                        <div class="form-group">
                                            <label class="form-label">Username</label>
                                            <input type="text" class="form-control mb-1" value="nmaxwell" />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label">Name</label>
                                            <input type="text" class="form-control" value="Nelle Maxwell" />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label">E-mail</label>
                                            <input type="text" class="form-control mb-1" value="nmaxwell@mail.com" />

                                        </div>
                                        <div class="form-group">
                                            <label class="form-label">Company</label>
                                            <input type="text" class="form-control" value="Company Ltd." />
                                        </div>
                                    </div>

                                </div>
                                <div class="tab-pane fade" id="account-change-password">
                                    <div class="card-body pb-2">



                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-right mt-3">
                    <button type="button" class="btn btn-primary">Save changes</button>&nbsp;
                    <button type="button" class="btn btn-default">Cancel</button>
                </div>

            </div>
        </>
    );
}

export default Settings;
