import "./SearchBar.css";
import Statistics from "./Stats";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import DateDisplay from "./Date.jsx";
import { useState } from "react";

import AppointmentTable from "./AppointmentTable";

function SearchBar() {


  return (
    <>
      <div className="Onavbar">
        <div className="Page-name">
          <h2>Overview</h2>
        </div>
        <DateDisplay/>

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

