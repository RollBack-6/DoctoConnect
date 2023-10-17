import React from "react";
import Calendar from "./Calendar";

import "./Accordion.css";
import { Accordion } from "primereact/accordion";
import AccordionTable from "./Accordion";
function Appointment() {
  return (
    <>
      <div className="nav">
        <h2>Appointment</h2>
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
