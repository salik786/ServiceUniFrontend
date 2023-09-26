
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import LoginPage from './pages/Login/login.jsx';
import SignupPage from './pages/SignUp/signup.jsx';
import Dashboard from './pages/Dashboard/dashboard.jsx';
import Pharmacy from './pages/Pharmacy/pharmacy.jsx';


function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<SignupPage />} />
      <Route path="/*" element={<Dashboard />} />
      
      <Route path="/Signup" element={<SignupPage />} />
      <Route path="/Login" element={<LoginPage />} />

      </Routes>

    </>
  );
}

export default App;
