import { Routes, Route } from "react-router-dom";

import "./App.css";
import Selection from "./Components/LeftColumn/Selection";
import RegistrationForm from "./Components/Right_Column/registerPatient/registerPatient.jsx";
import SearchBar from "./Components/Right_Column/Overview/SearchBar.jsx";
import Appointment from "./Components/Right_Column/Appointment/Appointment.jsx";
import Doctor from "./Components/Right_Column/Doctor/Doctor.jsx";
import Patient from "./Components/Right_Column/Patient/Patient.jsx";
import Emergency from "./Components/Right_Column/Emergency/Emergency.jsx";
import LoginPageN from "./Components/Login/LoginPageN";

function App() {
  return (
    <>
      <div className="row">
        <div className="column left">
          <Selection />
        </div>
        <div className="column right">
          <Routes>
            <Route path="Overview" element={<SearchBar />} />
            <Route path="Appointment" element={<Appointment />} />
            <Route path="Doctor" element={<Doctor />} />
            <Route path="Patient" element={<Patient />} />
            <Route path="Register-Patient" element={<RegistrationForm />} />
            <Route path="Emergency" element={<Emergency />} />
            <Route path="Login" element={<LoginPageN/>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
