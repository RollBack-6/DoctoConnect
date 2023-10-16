// import React, { Component, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

// class AccordionTable extends Component {
//   const [checkinDisplay, setCheckinDisplay] = useState(false);
//   constructor(props) {
//     super(props);
//     this.state = {
//       isExpanded: false,
//     };
//     this.data = [
//       {
//         appt_id:123456,
//         patient_name :"Pratham Gaikwad",
//         phone_number:"9856231456",
//         doctor:"Pratiksha Patil",
//         date : '11/10/2023',
//         time:"9:00 am"
//       },
//       {
//         appt_id:123457,
//         patient_name :"Tanishka Chavan",
//         phone_number:"8833665589",
//         doctor:"Pratiksha Patil",
//         date : '11/10/2023',
//         time:"10:00 am"
//       },
//       {
//         appt_id:123458,
//         patient_name :"Shubham Asbe",
//         phone_number:"8956214589",
//         doctor:"Pratiksha Patil",
//         date : '11/10/2023',
//         time:"12:00 pm"
//       },
//       {
//         appt_id:123459,
//         patient_name :"Pratham Gaikwad",
//         phone_number:"9856231456",
//         doctor:"Pratiksha Patil",
//         date : '11/10/2023',
//         time:"9:00 am"
//       },
//     ];
//   }

//   toggleAccordion = () => {
//     this.setState({ isExpanded: !this.state.isExpanded });
//   };

//   render() {
//     return (
//       <div className="accordion">
//         <div className="accordion-header" onClick={this.toggleAccordion}>
//           {this.state.isExpanded ? "Check-In" : "Check-In"}
//         </div>
//         {this.state.isExpanded && (
//           <div className="accordion-content">
//             <div className="table">
//               <DataTable value = {data}>
//                 <Column field="appt_id" header = "Appointment Id"/>
//                 <Column field="patient_name" header = "Patient Name"/>
//                 <Column field="phone_number" header = "Phone Number"/>
//                 <Column field="doctor" header = "Doctor Name"/>
//                 <Column field="date" header = "Date"/>
//                 <Column field="time" header = "Time"/>
//                 <Column field="checkin" header = "Check-In"/>
//               </DataTable>
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default AccordionTable;

import React, { useState } from "react";

const AccordionTable = () => {
  const [checkinDisplay, setCheckinDisplay] = useState(false);
  let data = [
    {
      appt_id: 123456,
      patient_name: "Pratham Gaikwad",
      phone_number: "9856231456",
      doctor: "Pratiksha Patil",
      date: "11/10/2023",
      time: "9:00 am",
    },
    {
      appt_id: 123457,
      patient_name: "Tanishka Chavan",
      phone_number: "8833665589",
      doctor: "Pratiksha Patil",
      date: "11/10/2023",
      time: "10:00 am",
    },
    {
      appt_id: 123458,
      patient_name: "Shubham Asbe",
      phone_number: "8956214589",
      doctor: "Pratiksha Patil",
      date: "11/10/2023",
      time: "12:00 pm",
    },
    {
      appt_id: 123459,
      patient_name: "Pratham Gaikwad",
      phone_number: "9856231456",
      doctor: "Pratiksha Patil",
      date: "11/10/2023",
      time: "9:00 am",
    },
  ];
  return (
    <div>
      <div className="accordion">
        <div className="accordion-header" onClick={setCheckinDisplay(!checkinDisplay)}>
          {checkinDisplay ? "Check-In" : "Check-In"}
        </div>
        { checkinDisplay && (
          <div className="accordion-content">
            <div className="table">
              <DataTable value={data}>
                <Column field="appt_id" header="Appointment Id" />
                <Column field="patient_name" header="Patient Name" />
                <Column field="phone_number" header="Phone Number" />
                <Column field="doctor" header="Doctor Name" />
                <Column field="date" header="Date" />
                <Column field="time" header="Time" />
                <Column field="checkin" header="Check-In" />
              </DataTable>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccordionTable;
