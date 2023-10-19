import "./selection.css";
import {useNavigate} from 'react-router-dom';

function Selection() {
  const navigate = useNavigate();

  return (
    <>
      <div className='selection'>
        <div className="Logo">
          <img className="img" src="./SVG_Images/LogoGroup.svg" alt="Logo" width="800" height="800" />
        </div>

        <div className="Button_aligment">
          <img className="image" src="./SVG_Images/overview.svg" alt="Overview" width="40" height="40" />
          <button className="btn" onClick={()=>navigate('/Overview')} >Overview</button>
        </div>

        <div className="Button_aligment">
          <img className="image" src="./SVG_Images/appointment.svg" alt="Appointment" width="40" height="40"/>
          <button className="btn" onClick={()=>navigate('/Appointment')}>Appointment</button>
        </div>

        <div className="Button_aligment">
          <img className="image" src="./SVG_Images/Doctor.svg" alt="Doctor"width="40" height="40" />
          <button className="btn" onClick={()=>navigate('/Doctor')} > Doctor</button>
        </div>

        <div className="Button_aligment">
          <img className="image" src="./SVG_Images/Patient.svg" alt="Patient" width="40" height="40"/>
          <button className="btn" onClick={()=>navigate('/Patient')}>Patient</button>
        </div>

        <div className="Button_aligment">
          <img className="image" src="./SVG_Images/Register.svg" alt="Register Patient" width="40" height="40"/>
          <button className="btn" onClick={()=>navigate('/Register-Patient')}> Register Patient</button>
        </div>

        <div className="Button_aligment">
          <img className="image" src="./SVG_Images/Emergency.svg" alt="emergency" width="40" height="40" />
          <button className="btn" onClick={()=>navigate('/Emergency')}> Emergency</button>
        </div>

        <div className="Button_aligment">
          <img className="image" src="./SVG_Images/logout.svg" alt="Logout" />
          <button className="btn" onClick={()=>navigate('/Login')}>Log Out</button>
        </div>
      </div>
    </>
  );
}

export default Selection;