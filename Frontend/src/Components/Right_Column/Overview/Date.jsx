import React from "react";
import "./Date.css";

class DateDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      currentDate: new Date(),
    };
  }

  render() {
    return (
      <div className="navDate">
        <strong>
          <p>{this.state.currentDate.toDateString()}</p>
        </strong>
      </div>
    );
  }
}

export default DateDisplay;
