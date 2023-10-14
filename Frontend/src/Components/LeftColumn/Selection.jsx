import "./selection.css";

function Selection(){
    return(
        <>
         <div className="Logo">
            <img className="img" src="./images/LOGO.png" alt="Logo" width="80" height="80"/>
            <h2 className="hearder">DoctoConnect</h2>
          </div>
          {/* Button Start */}
          <div className="Button_aligment">
            <img className="image" src="./images/image 1.png" alt="Overview" />
            <button className="btn" id="Overview">Overview</button>
          </div>

          <div className="Button_aligment">
            <img
              className="image"
              src="./images/Appointments.png"
              alt="Appointment"
            />
            <button className="btn">Appointment</button>
          </div>

          <div className="Button_aligment">
            <img
              className="image"
              src="./images/Departments.png"
              alt="Department"
            />
            <button className="btn">Department</button>
          </div>

          <div className="Button_aligment">
            <img className="image" src="./images/Doctors.png" alt="Doctor" />
            <button className="btn"> Doctor</button>
          </div>

          <div className="Button_aligment">
            <img className="image" src="./images/patient.png" alt="Patient" />
            <button className="btn"> Patient</button>
          </div>

          <div className="Button_aligment">
            <img
              className="image"
              src="./images/Register Patient.png"
              alt="Register Patient"
            />
            <button className="btn"> Register Patient</button>
          </div>

          <div className="Button_aligment">
            <img
              className="image"
              src="./images/Emergency.png"
              alt="emergency"
            />
            <button className="btn">Emergency</button>
          </div>

          <div className="Button_aligment">
            <img className="image" src="./images/Logout.png" alt="Logout" />
            <button className="btn">Log Out</button>
          </div>
        </>
    )
}
export default Selection