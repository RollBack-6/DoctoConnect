import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Checkbox } from "primereact/checkbox";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { TabView, TabPanel } from "primereact/tabview";

const AccordionTable = () => {
  const [filters, setFilters] = useState({
    global: { value: null, FilterMatchMode: FilterMatchMode.CONTAINS },
  });
  const [accordion1Visible, setAccordion1Visible] = useState(false);
  const [accordion2Visible, setAccordion2Visible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null); // Store the selected date
  const [filteredData, setFilteredData] = useState([]);

  const handleDateSelect = (date) => {
    setSelectedDate(date); // Update the selected date
    filterDataByDate(date); // Filter data based on the selected date
  };
  const filterDataByDate = (date) => {
    if (date) {
      // Filter the data based on the selected date
      const filtered = data.filter((item) => item.date === date);
      setFilteredData(filtered);
    } else {
      // If no date is selected, show all data
      setFilteredData(data);
    }
  };


  const [data, setData] = useState([
    {
      appt_id: 123456,
      patient_name: "Pratham Gaikwad",
      phone_number: "9856231456",
      doctor: "Pratiksha Patil",
      date: "11/10/2023",
      time: "9:00 am",
      checkin: false,
    },
    {
      appt_id: 123457,
      patient_name: "Tanishka Chavan",
      phone_number: "8833665589",
      doctor: "Pratiksha Patil",
      date: "11/10/2023",
      time: "10:00 am",
      checkin: false,
    },
    {
      appt_id: 123458,
      patient_name: "Shubham Asbe",
      phone_number: "8956214589",
      doctor: "Pratiksha Patil",
      date: "11/10/2023",
      time: "12:00 pm",
      checkin: false,
    },
    {
      appt_id: 123459,
      patient_name: "Pratham Gaikwad",
      phone_number: "9856231456",
      doctor: "Pratiksha Patil",
      date: "11/10/2023",
      time: "9:00 am",
      checkin: false,
    },
  ]);

  const [dataAccordion2, setDataAccordion2] = useState([
    {
      appt_id: 123569,
      patient_name: "Rina Shah",
      phone_number: "7845896521",
      doctor: "Dr.Ravi Shastri",
      date: "11/15/2023",
      time: "2:00 pm",
      status: "Completed",
    },
    {
      appt_id: 14523658,
      patient_name: "Rutuj Kumar",
      phone_number: "9856451235",
      doctor: "Dr.Ravi Shastri",
      date: "11/15/2023",
      time: "2:00 pm",
      status: "Completed",
    },
    {
      appt_id: 12563256,
      patient_name: "Yogesh Suryavanshi",
      phone_number: "8956451230",
      doctor: "Dr.Ravi Shastri",
      date: "11/15/2023",
      time: "2:00 pm",
      status: "Completed",
    },
    {
      appt_id: 154565,
      patient_name: "Trisha Gaikwad",
      phone_number: "7845896521",
      doctor: "Dr.Ravi Shastri",
      date: "11/15/2023",
      time: "2:00 pm",
      status: "Cancelled",
    },
    {
      appt_id: 134568,
      patient_name: "Shruti Mehtre",
      phone_number: "7845896521",
      doctor: "Dr.Ravi Shastri",
      date: "11/15/2023",
      time: "2:00 pm",
      status: "Upcoming",
    },
    {
      appt_id: 152345,
      patient_name: "Naman Gupta",
      phone_number: "7845896521",
      doctor: "Dr.Ravi Shastri",
      date: "11/15/2023",
      time: "2:00 pm",
      status: "Completed",
    },
    {
      appt_id: 165689,
      patient_name: "Sunny Bagul",
      phone_number: "9153567898",
      doctor: "Dr.Ravi Shastri",
      date: "11/15/2023",
      time: "2:00 pm",
      status: "Cancelled",
    },
    {
      appt_id: 134568,
      patient_name: "Shruti Mehtre",
      phone_number: "7845896521",
      doctor: "Dr.Ravi Shastri",
      date: "11/15/2023",
      time: "2:00 pm",
      status: "Upcoming",
    },
    // Add more data entries for the second accordion
  ]);

  const toggleAccordion1 = () => {
    setAccordion1Visible(!accordion1Visible);
    if (accordion2Visible) {
      setAccordion2Visible(false);
    }
  };

  const toggleAccordion2 = () => {
    setAccordion2Visible(!accordion2Visible);
    if (accordion1Visible) {
      setAccordion1Visible(false);
    }
  };

  const handleCheckboxChange = (rowData) => {
    const updatedData = data.map((item) => {
      if (item.appt_id === rowData.appt_id) {
        return { ...item, checkin: !item.checkin };
      }
      return item;
    });
    setData(updatedData);
  };

  return (
    <div>
      <div className="accordion">
        <div className="accordion-header" onClick={toggleAccordion1}>
          CheckIn
          <img className="drpbottom" src="./SVG_Images/dropdown.svg" />
        </div>
        {accordion1Visible && (
          <div className="accordion-content">
            <div className="table">
              <InputText
                className="input"
                onInput={(e) =>
                  setFilters({
                    global: { value: e.target.value, matchMode: FilterMatchMode.CONTAINS },
                  })
                }
              />
              <DataTable
                value={data}
                filters={filters}
                paginator
                rows={4}
                totalRecords={data.length}
              >
                <Column field="appt_id" header="Appointment Id" />
                <Column field="patient_name" header="Patient Name" />
                <Column field="phone_number" header="Phone Number" />
                <Column field="doctor" header="Doctor Name" />
                <Column field="date" header="Date" />
                <Column field="time" header="Time" />
                <Column
                  header="Check-In"
                  body={(rowData) => (
                    <Checkbox
                      checked={rowData.checkin}
                      onChange={() => handleCheckboxChange(rowData)}
                    />
                  )}
                />
              </DataTable>
            </div>
          </div>
        )}
      </div>

      <div className="accordion">
        <div className="accordion-header" onClick={toggleAccordion2}>
          Appointment
          <img className="drpbottom" src="./SVG_Images/dropdown.svg" />
        </div>
        {accordion2Visible && (
          <div className="accordion-content">
            <div className="table">
              <TabView>
                <TabPanel header="Upcoming">
                  <DataTable
                    value={dataAccordion2.filter((item) => item.status === "Upcoming")}
                    paginator
                    rows={4}
                  
                    totalRecords={dataAccordion2.filter((item) => item.status === "Upcoming").length}
                  >
                    <Column field="appt_id" header="Appointment Id" />
                    <Column field="patient_name" header="Patient Name" />
                    <Column field="phone_number" header="Phone Number" />
                    <Column field="doctor" header="Doctor Name" />
                    <Column field="date" header="Date" />
                    <Column field="time" header="Time" />
                    <Column field="status" header="Status"/>
                  </DataTable>
                </TabPanel>
                <TabPanel header="Completed">
                  <DataTable
                    value={dataAccordion2.filter((item) => item.status === "Completed")}
                    paginator
                    rows={4}
                    
                    totalRecords={dataAccordion2.filter((item) => item.status === "Completed").length}
                  >
                    <Column field="appt_id" header="Appointment Id" />
                    <Column field="patient_name" header="Patient Name" />
                    <Column field="phone_number" header="Phone Number" />
                    <Column field="doctor" header="Doctor Name" />
                    <Column field="date" header="Date" />
                    <Column field="time" header="Time" />
                    <Column field="status" header="Status"/>
                  </DataTable>
                </TabPanel>
                <TabPanel header="Cancelled">
                  <DataTable
                    value={dataAccordion2.filter((item) => item.status === "Cancelled")}
                    paginator
                    rows={4}
                    
                    totalRecords={dataAccordion2.filter((item) => item.status === "Cancelled").length}
                  >
                    <Column field="appt_id" header="Appointment Id" />
                    <Column field="patient_name" header="Patient Name" />
                    <Column field="phone_number" header="Phone Number" />
                    <Column field="doctor" header="Doctor Name" />
                    <Column field="date" header="Date" />
                    <Column field="time" header="Time" />
                    <Column field="status" header="Status"/>
                  </DataTable>
                </TabPanel>
              </TabView>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccordionTable;
