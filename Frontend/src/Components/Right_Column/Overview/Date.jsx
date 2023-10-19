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
        <strong >
          <div className="dateStyle">
            <p>{this.state.currentDate.toDateString()}</p>
          </div>
        </strong>
      </div>
    );
  }
}

export default DateDisplay;
