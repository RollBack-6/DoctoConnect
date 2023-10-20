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
            <h3>{this.state.currentDate.toDateString()}</h3>
          </div>
        </strong>
      </div>
    );
  }
}

export default DateDisplay;
