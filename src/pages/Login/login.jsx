import React, { useState } from 'react';
import { Link, NavLink, Navigate, useNavigate, redirect } from "react-router-dom"
import "./style.css";
import { toast } from "react-toastify"

import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { User } from '../../api/usermanage';
function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',

  });
  const [errors, setErrors] = useState({

    email: '',
    password: ""
  });
  const [user, setUser] = useState({ user: "" })

  const [showPassword2, setShowPassword2] = useState(false);

  const toggleConfirmPasswordVisibility = () => {
    setShowPassword2(!showPassword2);
  };
  const handleChange = (e) => {
    // const { name, value, type, checked } = e.target;
    // setFormData((prevData) => ({
    //   ...prevData,
    //   [name]: type === 'checkbox' ? checked : value,
    // }));
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



  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can access form data in the `formData` state
    if (Object.keys(errors).length > 0) {
      const validationErrors = {};
      if (!formData.email) {
        validationErrors.email = 'email is required';
      }

      if (!formData.password) {
        validationErrors.password = 'password is required';
      }


      setErrors(validationErrors);
      return;
    }
    try {
      let responce = await User.login(formData)
      console.log("register api call response", responce)
      if (responce.error) {
        for (let item in responce.data) {
          if (item.length == 0) {
            toast.error(responce.data[0])
          }
          console.log(responce.data[item][0])
          toast.error(responce.data[item])
        }
      }
      else {
        toast.success("You are successfully login")
        console.log(responce)
        sessionStorage.setItem("user", JSON.stringify(responce.data))
        // return redirect('/dashboard');
        navigate("/dashboard");
        // setUser({ ...user, user: "salik" });
        // // Access formData.email, formData.password, and formData.rememberMe for your login logic.

      }
    }
    catch (e) {
      console.log("error-->>", e)
    }

  };


  return (
    <>
      {user.user && (
        <Navigate to="/dashboard" replace={true} />
      )}

      <section class="" style={{ backgroundColor: "#eee" }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-10">

              <div class=" rounded-3 text-black bg-white">

                <div class="row g-0">


                  <div class="col-lg-6 d-flex gradient-custom-2 ">

                    <div class="text-white px-3 py-4 p-md-5 mx-md-4  ">
                      <button type="button" class="btn btn-primary rounded-0">Service uni
                        <span class="text-info " style={{ fontWeight: "bolder" }}>.</span>
                      </button>
                      <div class="text-bottom   ">
                        <h2 style={{ fontWeight: "400 !important", letterSpacing: "1px" }}>
                          <span> UNIVERSITY</span> OF WOLLONGONG
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="card-body p-md-5 mx-md-4 d-flex flex-column justify-content-center h-100">
                      <div class="text-start mb-4" style={{ marginTop: "100px !important" }}>

                        <h2>Welcome Here</h2>
                        <p style={{ fontSize: "14px !important" }} class="text-muted ">Please enter your details</p>
                      </div>
                      <form className='mt-4'>
                        <div class="form-outline mb-4">
                          <label for="email" class="form-label" style={{ fontWeight: "500 !important" }}>Email</label>
                          <input type="text" class="form-control border" id="email" name="email" aria-describedby="Userhelp" value={formData.email} onChange={handleChange} />
                          {errors.email && <div className="text-danger">{errors.email}</div>}
                        </div>

                        <div class="form-outline mb-4">
                          <label for="exampleInputPassword1" class="form-label" style={{ fontWeight: "500 !important" }}>Password</label>

                          <div class="form-group">

                            <div class="" id="show_hide_password">
                              <div className="password-input-container d-flex align-items-center">
                                <input class="form-control border " type={showPassword2 ? 'text' : 'password'} name="password" id="password" value={formData.password} onChange={handleChange} />
                                <div className="password-icon" onClick={toggleConfirmPasswordVisibility} style={{ marginLeft: "-25px", marginBottom: "10px", flex: 1 }}>
                                  {showPassword2 ? <FaEyeSlash /> : <FaEye />}
                                </div>
                              </div>

                            </div>
                          </div>
                          {errors.password && <div className="text-danger">{errors.password}</div>}
                        </div>

                        <div class="flex-sb-m w-full p-b-48 d-flex justify-content-between" >
                          <div class="contact100-form-checkbox d-flex gap-1">
                            <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                            <label class="label-checkbox100 " for="ckb1" style={{ fontSize: "12px! important" }}>
                              Remember me
                            </label>
                          </div>
                          <div style={{ fontSize: "12px" }}>
                            <a href="#" class="txt3" style={{
                              textDecoration: "none",
                              fontWeight: "800"
                            }}>
                              Forgot Password?
                            </a>
                          </div>
                        </div>
                        <div class="mt-4 w-100">
                          <button class="btn btn-primary w-100" onClick={handleSubmit}>
                            Login
                          </button>
                        </div>

                        <div class="d-flex align-items-center justify-content-center pb-4 mt-5">
                          <p class="mb-0 me-2 text-muted">Didn't have an account? </p>
                          <NavLink to="/Signup" > <button class="btn btn-outline-primary ">Sign Up</button></NavLink>
                        </div>

                      </form>

                    </div>
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

export default LoginPage;
