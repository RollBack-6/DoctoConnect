import "./selection.css";
import {useNavigate} from 'react-router-dom';

function Selection() {
  const navigate = useNavigate();

  return (
    <>
      <div className='selection'>
        <div className="Logo">
          <img className="img" src="./SVG_Images/Logo.svg" alt="Logo" width="80" height="80" />
          <h2 className="hearder">DoctoConnect</h2>
        </div>

        <div className="Button_aligment">
          <img className="image" src="./SVG_Images/overview.svg" alt="Overview" />
          <button className="btn" onClick={()=>navigate('/Overview')} >Overview</button>
        </div>

        <div className="Button_aligment">
          <img className="image" src="./SVG_Images/appointment.svg" alt="Appointment" />
          <button className="btn" onClick={()=>navigate('/Appointment')}>Appointment</button>
        </div>

        <div className="Button_aligment">
          <img className="image" src="./SVG_Images/Doctor.svg" alt="Doctor" />
          <button className="btn" onClick={()=>navigate('/Doctor')} > Doctor</button>
        </div>

        <div className="Button_aligment">
          <img className="image" src="./SVG_Images/Patient.svg" alt="Patient" />
          <button className="btn" onClick={()=>navigate('/Patient')}>Patient</button>
        </div>

        <div className="Button_aligment">
          <img className="image" src="./SVG_Images/Register.svg" alt="Register Patient" />
          <button className="btn" onClick={()=>navigate('/Register-Patient')}> Register Patient</button>
        </div>

        <div className="Button_aligment">
          <img className="image" src="./SVG_Images/Emergency.svg" alt="emergency" />
          <button className="btn" onClick={()=>navigate('/Emergency')}> Emergency</button>
        </div>

        <div className="Button_aligment">
          <img className="image" src="./SVG_Images/logout.svg" alt="Logout" />
          <button className="btn">Log Out</button>
        </div>
      </div>
    </>
  );
}

export default Selection;