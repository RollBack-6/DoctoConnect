import React from "react";
import Calendar from "./Calendar";
import Accordion from "./Accordion";
import "./Accordion.css";
function Patient() {
  return (
    <>
      <div className="nav">
        <h2>Patient</h2>
         <div >
           <Calendar />
          </div>
      </div>
      <div className="App">
        <Accordion />
        {/* You can use multiple instances of AccordionTable if needed */}
      </div>
    </>
  );
}

export default Patient;
