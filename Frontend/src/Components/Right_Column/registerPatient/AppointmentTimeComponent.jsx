import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { setHours, setMinutes } from 'date-fns';
import "./AppointmentTimeComponent.css";

const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState(null);

  // Inline CSS for the placeholder text
  const placeholderStyle = {
    color: '#000', // Set your desired color for the placeholder text
  };

  return (
    <div className="datePickerWrapper">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        includeTimes={[
          setHours(setMinutes(new Date(), 0), 17),
          setHours(setMinutes(new Date(), 30), 18),
          setHours(setMinutes(new Date(), 30), 19),
          setHours(setMinutes(new Date(), 30), 17),
        ]}
        dateFormat="MMMM d, yyyy h:mm aa"
        className="datePicker"
        placeholderText="Select the date and time" // Set placeholder text
        style={placeholderStyle} // Apply the inline style
      />
    </div>
  );
};

export default DatePickerComponent;
