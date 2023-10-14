import React, { useState } from 'react';
import "./App.css";
import Selection from "./Components/LeftColumn/Selection";
import RegistrationForm from "./Components/Right_Column/registerPatient/registerPatient.jsx";
import SearchBar from "./Components/Right_Column/Overview/SearchBar.jsx";
import Patient from "./Components/Right_Column/Patient/Patient.jsx"

function App() {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [showOverview, setShowOverview] = useState(true);
  const [showPatient, setShowPatient] = useState(false); // Set initial state to true

  const toggleRegistrationForm = () => {
    setShowRegistrationForm(true);
    setShowOverview(false);
    setShowPatient(false);
  };

  const toggleOverview = () => {
    setShowRegistrationForm(false);
    setShowOverview(true);
    setShowPatient(false);
  };

  const togglePatient = () => {
    setShowRegistrationForm(false);
    setShowOverview(false);
    setShowPatient(true);
  };
  return (
    <>
      <div className="row">
        <div className="column left">
          <Selection 
            toggleRegistrationForm={toggleRegistrationForm}
            toggleOverview={toggleOverview}
            togglePatient={togglePatient}
          />
        </div>
        <div className="column right">
          {showRegistrationForm && <RegistrationForm/>}
          {showOverview && <SearchBar/>}
          {showPatient && <Patient/>}
        </div>
      </div>
    </>
  );
}

export default App;
