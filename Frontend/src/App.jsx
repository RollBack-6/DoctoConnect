
import { useState } from 'react';
import "./App.css";
import Selection from "./Components/LeftColumn/Selection";
import RegistrationForm from
"./Components/Right_Column/registerPatient/registerPatient.jsx";
import SearchBar from "./Components/Right_Column/Overview/SearchBar.jsx";
import Appointment from './Components/Right_Column/Appointment/Appointment.jsx';
import Doctor from "./Components/Right_Column/Doctor/Doctor.jsx";
import { BrowserRouter,Routes, Route } from 'react-router-dom';


function App() {
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

  return (
    <>
      <div className="row">
        <div className="column left">
          <Selection
            toggleRegistrationForm={toggleRegistrationForm}
            toggleOverview={toggleOverview}
            toggleAppointment={toggleAppointment}
            toggleDoctor={toggleDoctor}
          />
        </div>
        <div className="column right">
          {showRegistrationForm && <RegistrationForm/>}
          {/* {<LoginPage/>} */}
          {showOverview && <SearchBar/>}
          {showAppointment && <Appointment/>}
          {showDoctor && <Doctor/>}
        </div>
      </div>
    </>
  );
}

export default App;
