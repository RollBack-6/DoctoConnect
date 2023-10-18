import "./selection.css";
import { useNavigate } from "react-router-dom";

function Selection() {
  const navigate = useNavigate();

  return (
    <>
      <div className="selection">
        <div className="Logo">
          <img
            className="img"
            src="./images/LOGO.png"
            alt="Logo"
            width="80"
            height="80"
          />
          <h2 className="hearder">DoctoConnect</h2>
        </div>

        <div className="Button_aligment">
          <img className="image" src="./images/image 1.png" alt="Overview" />
          <button className="btn" onClick={() => navigate("/Overview")}>
            Overview
          </button>
        </div>

        <div className="Button_aligment">
          <img
            className="image"
            src="./images/Appointments.png"
            alt="Appointment"
          />
          <button className="btn" onClick={() => navigate("/Appoinment")}>
            Appointment
          </button>
        </div>

        <div className="Button_aligment">
          <img
            className="image"
            src="./images/Departments.png"
            alt="Department"
          />
          <button className="btn" onClick={() => navigate("/Department")}>
            Department
          </button>
        </div>

        <div className="Button_aligment">
          <img className="image" src="./images/Doctors.png" alt="Doctor" />
          <button className="btn" onClick={() => navigate("/Doctor")}>
            {" "}
            Doctor
          </button>
        </div>

        <div className="Button_aligment">
          <img className="image" src="./images/patient.png" alt="Patient" />
          <button className="btn" onClick={() => navigate("/Patient")}>
            Patient
          </button>
        </div>

        <div className="Button_aligment">
          <img
            className="image"
            src="./images/Register Patient.png"
            alt="Register Patient"
          />
          <button className="btn" onClick={() => navigate("/Register-Patient")}>
            {" "}
            Register Patient
          </button>
        </div>

        <div className="Button_aligment">
          <img className="image" src="./images/Emergency.png" alt="emergency" />
          <button className="btn">Emergency</button>
        </div>

        <div className="Button_aligment">
          <img className="image" src="./images/Logout.png" alt="Logout" />
          <button className="btn">Log Out</button>
        </div>
      </div>
    </>
  );
}

export default Selection;
