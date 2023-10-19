<<<<<<< HEAD

import { useState } from 'react';
=======
import { Routes, Route } from "react-router-dom";

>>>>>>> f34e8a86858e40c7e260613acf01fac5340a2f34
import "./App.css";
import Selection from "./Components/LeftColumn/Selection";
import RegistrationForm from
"./Components/Right_Column/registerPatient/registerPatient.jsx";
import SearchBar from "./Components/Right_Column/Overview/SearchBar.jsx";
import Appointment from "./Components/Right_Column/Appointment/Appointment.jsx";
import Doctor from "./Components/Right_Column/Doctor/Doctor.jsx";
import Patient from "./Components/Right_Column/Patient/Patient.jsx";

function App() {
<<<<<<< HEAD
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [showOverview, setShowOverview] = useState(true);
  const [showAppointment, setShowAppointment] = useState(false);
  const [showDoctor, setShowDoctor] = useState(false); 


  const toggleRegistrationForm = () => {
    setShowRegistrationForm(true);
    setShowOverview(false);
    setShowAppointment(false);
    setShowDoctor(false);
  };

  const toggleOverview = () => {
    setShowRegistrationForm(false);
    setShowOverview(true);
    setShowAppointment(false);
    setShowDoctor(false);
  };

  const toggleAppointment = () => {
    setShowRegistrationForm(false);
    setShowOverview(false);
    setShowAppointment(true);
    setShowDoctor(false);
  };

  const toggleDoctor = () => {
    setShowRegistrationForm(false);
    setShowOverview(false);
    setShowAppointment(false);
    setShowDoctor(true);
  };

=======
>>>>>>> f34e8a86858e40c7e260613acf01fac5340a2f34
  return (
    <>
      <div className="row">
        <div className="column left">
<<<<<<< HEAD
          <Selection
            toggleRegistrationForm={toggleRegistrationForm}
            toggleOverview={toggleOverview}
            toggleAppointment={toggleAppointment}
            toggleDoctor={toggleDoctor}
          />
=======
          <Selection />
>>>>>>> f34e8a86858e40c7e260613acf01fac5340a2f34
        </div>
        <div className="column right">
          <Routes>
            <Route path="Overview" element={<SearchBar />} />
            <Route path="Appointment" element={<Appointment />} />
            <Route path="Doctor" element={<Doctor />} />
            <Route path="Patient" element={<Patient />} />
            <Route path="Register-Patient" element={<RegistrationForm />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
