import React, { useState } from 'react';
import "./App.css";
import Selection from "./Components/LeftColumn/Selection";
import RegistrationForm from "./Components/Right_Column/registerPatient/registerPatient.jsx";
import SearchBar from "./Components/Right_Column/Overview/SearchBar.jsx";

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
          {showRegistrationForm && <RegistrationForm/>}
          {showOverview && <SearchBar/>}
           <SearchBar/>
        </div>
      </div>
    </>
  );
}

export default App;
