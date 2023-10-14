import React, { Component } from "react";

class AccordionTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
  }

  toggleAccordion = () => {
    this.setState({ isExpanded: !this.state.isExpanded });
  };

  render() {
    return (
      <div className="accordion">
        <div className="accordion-header" onClick={this.toggleAccordion}>
          {this.state.isExpanded ? "Check-In" : "Check-In"}
        </div>
        {this.state.isExpanded && (
          <div className="accordion-content">
            <div className="content">
            <p>
              The styles for the AccordionTable component are similar to what
              you provided earlier. We then apply additional styles for the
              table, table headers (th), and table data cells (td). Optional
              styles for table row hover effects and alternating row colors are
              included. You can place this CSS code in a separate CSS file
              (e.g., AccordionTable.css) if you prefer, or add it to your
              existing stylesheet. Just make sure that you import the CSS file
              within your AccordionTable.js file:
            </p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default AccordionTable;
