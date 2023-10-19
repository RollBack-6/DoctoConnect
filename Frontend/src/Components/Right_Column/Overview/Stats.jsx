import "./Stats.css";

function Statistics() {
  return (
    <>
      <div className="Stat-cointainer">
        <div className="Appoinment-stat">
            <img className="stat-img" src="./SVG_Images/appointment.svg" alt="Calander" />
            <p>
                <strong>Number <br /></strong>
                Appointments
            </p>
        </div>
        <div className="Appoinment-stat">
        <img className="stat-img" src="./SVG_Images/operation.svg" alt="Operations" />
            <p>
                <strong>Number <br /></strong>
                Operations 
            </p>
        </div>
        <div className="Appoinment-stat">
        <img className="stat-img" src="./SVG_Images/StatPatient.svg" alt="New Patient" />
            <p>
                <strong>Number <br /></strong>
                New Patient
            </p>
        </div>
          <div className="Appoinment-stat">
          <img className="stat-img" src="./SVG_Images/Doctor.svg" alt="Doctors" />
            <p>
                <strong>Number <br /></strong>
                Doctor
            </p> 
          </div>
        </div>
            </>
  );
}
export default Statistics;
