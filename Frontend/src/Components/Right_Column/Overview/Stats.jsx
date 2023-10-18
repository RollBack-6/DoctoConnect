import "./Stats.css";

function Statistics() {
  return (
    <>
      <div className="Stat-cointainer">
        <div className="Appoinment-stat">
            <img className="stat-img" src="./Images/statCal.png" alt="Calander" />
            <p>
                <strong>Number <br /></strong>
                Appointments
            </p>
        </div>
        <div className="Appoinment-stat">
        <img className="stat-img" src="./Images/statOp.png" alt="Operations" />
            <p>
                <strong>Number <br /></strong>
                Operations 
            </p>
        </div>
        <div className="Appoinment-stat">
        <img className="stat-img" src="./Images/statPat.png" alt="New Patient" />
            <p>
                <strong>Number <br /></strong>
                New Patient
            </p>
        </div>
          <div className="Appoinment-stat">
          <img className="stat-img" src="./Images/statDoct.png" alt="Doctors" />
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
