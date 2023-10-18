import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import Selection from "./Components/LeftColumn/Selection";
import RegistrationForm from "./Components/Right_Column/registerPatient/registerPatient.jsx";
import SearchBar from "./Components/Right_Column/Overview/SearchBar.jsx";
import Appointment from './Components/Right_Column/Appointment/Appointment.jsx';
import Doctor from "./Components/Right_Column/Doctor/Doctor.jsx";

function App() {
  return (
    <>
      <div className="row">
        <div className="column left">
          <Selection />
        </div>
        <div className="column right">
          <Routes>
            <Route path='/Overview' element={<SearchBar />} />
            <Route path='/Appointment' element={<Appointment />} />
            <Route path='/Doctor' element={<Doctor />} />
            <Route path='/Register-Patient' element={<RegistrationForm />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;