import React, { useState } from 'react';
import {Link,Navigate} from "react-router-dom"
import "./style.css";
function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  const [user,setUser]=useState({user:""})

  const linkStyle = {
    textDecoration: 'none', // Remove underline
    color: '', // Change the link text color
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user","salik")
   setUser({...user,user:"salik"});
    // Access formData.username, formData.password, and formData.rememberMe for your login logic.
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

              <div class="card rounded-3 text-black">

                <div class="row g-0">


                  <div class="col-lg-6 d-flex gradient-custom-2">

                    <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                      <button type="button" class="btn btn-primary rounded-0">Service uni
                        <span class="text-info " style={{ fontWeight: "bolder" }}>.</span>
                      </button>
                      <div class="text-bottom   ">
                        <h2 style={{ fontWeight: "600 !important" }}>
                          Lorem ipsum dolor sit amet consecteturit sit purus fames sit....
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="card-body p-md-5 mx-md-4">
                      <div class="text-start" style={{ marginTop: "100px !important" }}>
                        <h3 style={{ fontWeight: "600" }}>Welcome Back, John</h3>
                        <p style={{ fontSize: "14px !important" }} class="text-muted ">Please enter your details</p>
                      </div>
                      <form>
                        <div class="form-outline mb-4">
                          <label for="Username" class="form-label" style={{ fontWeight: "500 !important" }}>User Name</label>
                          <input type="text" class="form-control" id="Username" aria-describedby="Userhelp" />
                        </div>

                        <div class="form-outline mb-4">
                          <label for="exampleInputPassword1" class="form-label" style={{ fontWeight: "500 !important" }}>Password</label>
                          <div class="form-group">

                            <div class="input-group" id="show_hide_password">
                              <input class="form-control" type="password" />
                              <div class="input-group-addon">
                                <a href=""><i class="bi bi-eye-slash" id="togglePassword"></i></a>
                              </div>
                            </div>
                          </div>

                        </div>

                        <div class="flex-sb-m w-full p-b-48 d-flex justify-content-between" >
                          <div class="contact100-form-checkbox">
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
                        <div class="mt-4 ">
                          <button class="login100-form-btn" onClick={handleSubmit}>
                            Login
                          </button>
                        </div>

                        <div class="d-flex align-items-center justify-content-center pb-4 mt-5">
                          <p class="mb-0 me-2 text-muted">Didn't have an account? </p>
                          <button type="button" class="btn btn-outline-primary "><Link to="/Signup" style={linkStyle}>Sign in</Link></button>
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

export default LoginPage;
