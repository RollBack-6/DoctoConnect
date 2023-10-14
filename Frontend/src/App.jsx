import React, { useState } from 'react';
import "./App.css";
import Selection from "./Components/LeftColumn/Selection";
<<<<<<< HEAD
import Patient from "./Components/Right_Column/Patient/Patient";
=======
import RegistrationForm from "./Components/Right_Column/registerPatient/registerPatient.jsx";
import SearchBar from "./Components/Right_Column/Overview/SearchBar.jsx";
>>>>>>> 142fadad8f97be2e21082619f91bece2f92eeda2

function App() {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [showOverview, setShowOverview] = useState(true); // Set initial state to true

  const toggleRegistrationForm = () => {
    setShowRegistrationForm(true);
    setShowOverview(false);
  };

  const toggleOverview = () => {
    setShowRegistrationForm(false);
    setShowOverview(true);
  };

  return (
    <>
      <div className="row">
        <div className="column left">
          <Selection 
            toggleRegistrationForm={toggleRegistrationForm}
            toggleOverview={toggleOverview}
          />
        </div>
        <div className="column right">
<<<<<<< HEAD
          <Patient />
=======
          {showRegistrationForm && <RegistrationForm/>}
          {showOverview && <SearchBar/>}
>>>>>>> 142fadad8f97be2e21082619f91bece2f92eeda2
        </div>
      </div>
    </>
  );
}

export default App;
