import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./Calendar.css"; // You can create a CSS file for styling

function Calendar() {
    const [selectedDate, setSelectedDate] = useState(null);
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
      onDateSelect(date);
    };
  
    return (
      <div className="calendar">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          placeholderText="Select a date"
          dateFormat="dd/MM/yyyy" // Customize date format as needed
        />
        <img className="icon" src = "./SVG_Images/calendar.svg" height="20px" width="20px"/>

      </div>
    );
  }
  
  export default Calendar;
  