import "./SearchBar.css";
import Statistics from "./Stats";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import DateDisplay from "./Date.jsx";

import AppointmentTable from "./AppointmentTable";

function SearchBar() {
  return (
    <>
      <div className="Onavbar">
        <div className="Page-name">
          <h2>Overview</h2>
          <button className="translate-btn">
            <img className="translate" src="./SVG_Images/translate.svg" />
          </button>
        </div>
        <div className="Hospital-name">
          <h3>Aditya Birla Hospital</h3>
          <DateDisplay />
        </div>
      </div>
      <Statistics />
      <div className="Charts">
        <div className="Line">
          <LineChart />
        </div>
        <div className="Bar">
          <BarChart />
        </div>
      </div>
      <div className="AppointmentTable">
        <AppointmentTable />
      </div>
    </>
  );
}
export default SearchBar;
