import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, redirect } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import LoginPage from './pages/Login/login.jsx';
import SignupPage from './pages/SignUp/signup.jsx';
import Dashboard from './pages/Dashboard/dashboard.jsx';
import Landing from './pages/Landing/index.jsx';


function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Signup" element={<SignupPage />} />
        <Route path="/Login" element={<LoginPage />} />

        <Route path="/*" element={<Dashboard />} />



      </Routes >

    </>
  );
}

export default App;
