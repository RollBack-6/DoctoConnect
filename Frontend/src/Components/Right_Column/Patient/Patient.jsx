import React from "react";
import Calendar from "./Calendar";

import "./Accordion.css";
function Patient() {
  return (
    <>
      <div className="nav">
        <h2>Patient</h2>
         <div>
           <Calendar />
          </div>
      </div>
      <div className="App">
       <AccordionTable/>
      </div>
    </>
  );
}

export default Patient;
