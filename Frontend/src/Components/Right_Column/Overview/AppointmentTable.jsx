import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "./AppointmentTable.css";

const AppointmentTable = () => {
  let data = [
    {
      appt_id: 123456,
      patient_name: "Pratham Gaikwad",
      phone_number: "9856231456",
      doctor: "Pratiksha Patil",
      date: "11/10/2023",
      time: "9:00 am",
      status: "upcoming",
    },
    {
      appt_id: 123457,
      patient_name: "Tanishka Chavan",
      phone_number: "8833665589",
      doctor: "Pratiksha Patil",
      date: "11/10/2023",
      time: "10:00 am",
      status: "upcoming",
    },
    {
      appt_id: 123458,
      patient_name: "Shubham Asbe",
      phone_number: "8956214589",
      doctor: "Pratiksha Patil",
      date: "11/10/2023",
      time: "12:00 pm",
      status: "upcoming",
    },
    {
      appt_id: 123459,
      patient_name: "Pratham Gaikwad",
      phone_number: "9856231456",
      doctor: "Pratiksha Patil",
      date: "11/10/2023",
      time: "9:00 am",
      status: "upcoming",

    },
  ];

  return (
    <div>
              <DataTable className="app_Table" value={data}>
                <Column field="appt_id" header="Appointment Id" />
                <Column field="patient_name" header="Patient Name" />
                <Column field="phone_number" header="Phone Number" />
                <Column field="doctor" header="Doctor Name" />
                <Column field="date" header="Date" />
                <Column field="time" header="Time" />
                <Column field="status" header="Status" />
              </DataTable>
    </div>
  );
};

export default AppointmentTable;