import React, { useState } from 'react';
import "./style.css";
import { Link } from 'react-router-dom';
import { User } from '../../api/usermanage';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { useToast } from "../../components/toast/index"
function SignupPage() {

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        id: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        first_name: '',
        last_name: '',
        email: '',
        id: '',
        password: '',
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
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const toggleConfirmPasswordVisibility = () => {
        setShowPassword2(!showPassword2);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        // You can access form data in the `formData` state
        if (Object.keys(errors).length > 0) {
            const validationErrors = {};
            if (!formData.first_name) {
                validationErrors.first_name = 'first name is required';
            }

            if (!formData.last_name) {
                validationErrors.last_name = 'last name is required';
            }
            if (!formData.email) {
                validationErrors.email = 'email is required';
            }

            if (!formData.id) {
                validationErrors.id = 'student id is required';
            }
            if (!formData.password) {
                validationErrors.password = 'password is required';
            }
            if (!formData.confirmPassword) {
                validationErrors.confirmPassword = 'confirm password is required';
            }
            if (formData.password !== formData.confirmPassword) {
                validationErrors.confirmPassword = 'password and confirm password should be same';
            }

            setErrors(validationErrors);
            return;
        }
        try {
            let responce = await User.register(formData)
            console.log("register api call response", responce)
            if (responce.error) {
                for (let item in responce.data) {
                    console.log(responce.data[item][0])
                    toast.error(responce.data[item][0])
                }
            }
            else {
                toast.success("You are successfully registered , go to Login page ")
            }
        }
        catch (e) {
            console.log("error-->>", e)
        }

    };


    return (
        <>
            <section class="" style={{ backgroundColor: "#eee" }}>
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-xl-10">

                            <div class="rounded-3 text-black bg-white">

                                <div class="row g-0">


                                    <div class="col-lg-6 d-flex gradient-custom-2">

                                        <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                                            <button type="button" class="btn btn-primary rounded-0">Service uni
                                                <span class="text-info " style={{ fontWeight: "bolder" }}>.</span>
                                            </button>
                                            <div class="text-bottom   ">
                                                <h2 style={{ fontWeight: "600!important" }}>
                                                    UNIVERSITY OF WOLLONGONG
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--Right side --> */}
                                    <div class="col-lg-6">
                                        <div class="card-body p-md-5 mx-md-4">
                                            <div className='mb-4'>
                                                <h2>Get Started</h2>
                                                <p style={{ fontSize: "15px !important; " }} class="text-muted lh-lg">Create your account now.</p>
                                            </div>
                                            <form>


                                                <div class="form-outline mb-4">
                                                    <label for="exampleInputEmail1" class="form-label "  >First Name*</label>
                                                    <input
                                                        type="text"
                                                        class="form-control border"
                                                        id="first_name"
                                                        name="first_name"
                                                        value={formData.first_name}
                                                        onChange={handleInputChange}
                                                        placeholder="John"
                                                    />
                                                    {errors.first_name && <div className="text-danger">{errors.first_name}</div>}

                                                </div>

                                                <div class="form-outline mb-4">
                                                    <label for="exampleInputEmail1" class="form-label"  >Last Name</label>
                                                    <input
                                                        type="text"
                                                        class="form-control border"
                                                        id="last_name"
                                                        name="last_name"
                                                        value={formData.last_name}
                                                        onChange={handleInputChange}
                                                        placeholder="Doe"
                                                    />
                                                    {errors.last_name && <div className="text-danger">{errors.last_name}</div>}

                                                </div>
                                                <div class="form-outline mb-4">
                                                    <label for="exampleInputEmail1" class="form-label"  >Email </label>
                                                    <input
                                                        type="email"
                                                        class="form-control border"
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
                                                        class="form-control border"
                                                        id="id"
                                                        name="id"
                                                        value={formData.id}
                                                        onChange={handleInputChange}
                                                        placeholder="EM167543"
                                                    />
                                                    {errors.id && <div className="text-danger">{errors.id}</div>}

                                                </div>
                                                <div class="form-outline mb-4">
                                                    <label for="exampleCpassword" class="form-label"  >Password</label>
                                                    <div className="password-input-container d-flex align-items-center">
                                                        <input
                                                            type={showPassword ? 'text' : 'password'}
                                                            class="form-control border"
                                                            id="password"
                                                            name="password"
                                                            placeholder='**************'
                                                            value={formData.password}
                                                            onChange={handleInputChange}
                                                        />
                                                        <div className="password-icon" onClick={togglePasswordVisibility} style={{ marginLeft: "-25px", marginBottom: "10px", flex: 1 }}>
                                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                                        </div>
                                                    </div>
                                                    {errors.password && <div className="text-danger">{errors.password}</div>}

                                                </div>

                                                <div class="form-outline mb-4">
                                                    <label for="exampleInputEmail1" class="form-label fs-6"  >Confirm Password</label>
                                                    <div className="password-input-container d-flex align-items-center">
                                                        <input
                                                            type={showPassword2 ? 'text' : 'password'}
                                                            class="form-control border"
                                                            placeholder='**************'
                                                            id="confirmPassword"
                                                            name="confirmPassword"
                                                            value={formData.confirmPassword}
                                                            onChange={handleInputChange}
                                                        />
                                                        <div className="password-icon" onClick={toggleConfirmPasswordVisibility} style={{ marginLeft: "-25px", marginBottom: "10px", flex: 1 }}>
                                                            {showPassword2 ? <FaEyeSlash /> : <FaEye />}
                                                        </div>
                                                    </div>
                                                    {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}

                                                </div>

                                                <div class="d-flex justify-content-end pt-1 mb-5 pb-1 mt-4">

                                                    <button type="button" class="btn btn-outline-primary px-5 btn-lg w-100 border-primary m" style={{ fontSize: '16px' }} onClick={handleSubmit}>Register</button>

                                                </div>

                                                <div class="d-flex align-items-center justify-content-center pb-4">
                                                    <p class="mb-0 me-2 text-muted">Alraedy have an account ?</p>
                                                    <Link to="/login"><button type="button" class="btn btn-outline-primary">Sign in</button></Link>
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
