import React, { useState } from 'react';
import "./App.css";
import Selection from "./Components/LeftColumn/Selection";
import RegistrationForm from "./Components/Right_Column/registerPatient/registerPatient.jsx";
import SearchBar from "./Components/Right_Column/Overview/SearchBar.jsx";
import Patient from "./Components/Right_Column/Patient/Patient.jsx"
import Doctor from "./Components/Right_Column/Doctor/Doctor.jsx";

function App() {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [showOverview, setShowOverview] = useState(true);
  const [showPatient, setShowPatient] = useState(false);
  const [showDoctor, setShowDoctor] = useState(false); // Set initial state to true

  const toggleRegistrationForm = () => {
    setShowRegistrationForm(true);
    setShowOverview(false);
    setShowPatient(false);
    setShowDoctor(false);
  };

  const toggleOverview = () => {
    setShowRegistrationForm(false);
    setShowOverview(true);
    setShowPatient(false);
    setShowDoctor(false);
  };

  const togglePatient = () => {
    setShowRegistrationForm(false);
    setShowOverview(false);
    setShowPatient(true);
    setShowDoctor(false);
  };

  const toggleDoctor = () => {
    setShowRegistrationForm(false);
    setShowOverview(false);
    setShowPatient(false);
    setShowDoctor(true);
  };

  return (
    <>
      <div className="row">
        <div className="column left">
          <Selection 
            toggleRegistrationForm={toggleRegistrationForm}
            toggleOverview={toggleOverview}
            togglePatient={togglePatient}
            toggleDoctor={toggleDoctor}
          />
        </div>
        <div className="column right">
          {showRegistrationForm && <RegistrationForm/>}
          {showOverview && <SearchBar/>}
          {showPatient && <Patient/>}
          {showDoctor && <Doctor/>}
        </div>
      </div>
    </>
  );
}

export default App;