import React, { useState } from 'react';
import "./style.css";
function SignupPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        studentID: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({
        firstName: 'first name is mandatory *',
        lastName: '',
        email: 'email is mandatory *',
        studentID: 'student id is mandatory *',
        password: 'password is mandatory *',
        confirmPassword: '',
      });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: '',
          });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can access form data in the `formData` state
        const validationErrors = {};
        if (!formData.email) {
            validationErrors.email = 'Email is required';
          }
      
          // Perform other validation checks for other fields
          // ...
      
          // If there are errors, update the error state and prevent submission
          if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
          }
        console.log(formData);
        // Perform further actions (e.g., validation, API calls)
    };


    return (
        <>
            <section class="" style={{ backgroundColor: "#eee" }}>
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-xl-10">

                            <div class="card rounded-3 text-black">

                                <div class="row g-0">


                                    <div class="col-lg-6 d-flex gradient-custom-2">

                                        <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                                            <button type="button" class="btn btn-primary rounded-0">Service uni
                                                <span class="text-info " style={{ fontWeight: "bolder" }}>.</span>
                                            </button>
                                            <div class="text-bottom   ">
                                                <h2 style={{ fontWeight: "600!important" }}>
                                                    Lorem ipsum dolor sit amet consecteturit sit purus fames sit....
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--Right side --> */}
                                    <div class="col-lg-6">
                                        <div class="card-body p-md-5 mx-md-4">

                                            <h5 style={{ fontWeight: "600" }}>Get Started</h5>
                                            <p style={{ fontSize: "14px !important; " }} class="text-muted lh-lg">Create your account now.</p>

                                            <form>


                                                <div class="form-outline mb-4">
                                                    <label for="exampleInputEmail1" class="form-label "  >First Name</label>
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        id="FirstName"
                                                        name="firstName"
                                                        value={formData.firstName}
                                                        onChange={handleInputChange}
                                                        placeholder="John"
                                                    />
                                                      {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
        
                                                </div>

                                                <div class="form-outline mb-4">
                                                    <label for="exampleInputEmail1" class="form-label"  >Last Name</label>
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        id="LastName"
                                                        name="lastName"
                                                        value={formData.lastName}
                                                        onChange={handleInputChange}
                                                        placeholder="Doe"
                                                    />
                                                      {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
       
                                                </div>
                                                <div class="form-outline mb-4">
                                                    <label for="exampleInputEmail1" class="form-label"  >Email </label>
                                                    <input
                                                        type="email"
                                                        class="form-control"
                                                        id="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        placeholder="johndoe@gmail.com"
                                                    />
                                                      {errors.email && <div className="text-danger">{errors.email}</div>}
       
                                                </div>
                                                <div class="form-outline mb-4">
                                                    <label for="exampleInputpassword" class="form-label"  >Student ID</label>
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        id="studentID"
                                                        name="studentID"
                                                        value={formData.studentID}
                                                        onChange={handleInputChange}
                                                        placeholder="EM167543"
                                                    />
                                                      {errors.studentID && <div className="text-danger">{errors.studentID}</div>}
       
                                                </div>
                                                <div class="form-outline mb-4">
                                                    <label for="exampleCpassword" class="form-label"  >Password</label>
                                                    <input
                                                        type="password"
                                                        class="form-control"
                                                        id="password"
                                                        name="password"
                                                        value={formData.password}
                                                        onChange={handleInputChange}
                                                    />
                                                      {errors.password && <div className="text-danger">{errors.password}</div>}
       
                                                </div>

                                                <div class="form-outline mb-4">
                                                    <label for="exampleInputEmail1" class="form-label fs-6"  >Confirm Password</label>
                                                    <input
                                                        type="password"
                                                        class="form-control"
                                                        id="confirmPassword"
                                                        name="confirmPassword"
                                                        value={formData.confirmPassword}
                                                        onChange={handleInputChange}
                                                    />
                                                      {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
       
                                                </div>

                                                <div class="text-center pt-1 mb-5 pb-1">
                                                    <button type="button" class="btn btn-outline-secondary px-5 btn-lg" style={{ fontSize: '14px' }}>Cancel</button>
                                                    <button type="button" class="btn btn-primary px-5 btn-lg" style={{ fontSize: '14px' }} onClick={handleSubmit}>Submit</button>

                                                </div>

                                                <div class="d-flex align-items-center justify-content-center pb-4">
                                                    <p class="mb-0 me-2 text-muted">Alraedy have an account ?</p>
                                                    <button type="button" class="btn btn-outline-primary">Sign in</button>
                                                </div>

                                            </form>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SignupPage;
