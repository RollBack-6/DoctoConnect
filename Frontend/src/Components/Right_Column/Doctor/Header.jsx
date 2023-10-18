import React, { useState } from "react";
import "./Header.css";
import Searchbar from "../NavSearch/SearchBar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";

function Header() {
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  const [showAvailable, setShowAvailable] = useState(false);

  const doctor_data = [
    {
      doctor_id: "101",
      doctor_name: "Pratiksha Patil",
      gender: "Female",
      speciality: "General Physician",
      phone_no: "7218866759",
      email: "pratikshap2404@gmail.com",
      status: "Available",
    },
    {
      doctor_id: "102",
      doctor_name: "Shaurya Jadhav",
      gender: "Male",
      speciality: "Neurologist",
      phone_no: "7067457473",
      email: "shauryajadhav@gmail.com",
      status: "Unavailable",
    },
    {
      doctor_id: "103",
      doctor_name: "Shruti Shinde",
      gender: "Female",
      speciality: "Paediatrician",
      phone_no: "9503426578",
      email: "shrutishinde@gmail.com",
      status: "Available",
    },
    {
      doctor_id: "104",
      doctor_name: "Riya Sharma",
      gender: "Female",
      speciality: "Gynaecologist",
      phone_no: "8567405231",
      email: "riyasharma@gmail.com",
      status: "Unavailable",
    },
    {
      doctor_id: "105",
      doctor_name: "Naman Gupta",
      gender: "Male",
      speciality: "Dentist",
      phone_no: "7621146006",
      email: "namangupta@gmail.com",
      status: "Available",
    },
    {
      doctor_id: "106",
      doctor_name: "Dev Thakur",
      gender: "Male",
      speciality: "Opthalmologist",
      phone_no: "6150654368",
      email: "devthakur@gmail.com",
      status: "Available",
    },
    {
      doctor_id: "107",
      doctor_name: "Preeti Deshmukh",
      gender: "Female",
      speciality: "Paediatrician",
      phone_no: "8974520234",
      email: "preetideshmukh@gmail.com",
      status: "Unavailable",
    },
    {
      doctor_id: "108",
      doctor_name: "Eknath Pawar",
      gender: "Male",
      speciality: "Dermatologist",
      phone_no: "6460315668",
      email: "eknathpawar@gmail.com",
      status: "Available",
    },
    {
      doctor_id: "109",
      doctor_name: "Aditi Deshpande",
      gender: "Female",
      speciality: "General Physician",
      phone_no: "9080645334",
      email: "aditideshpande@gmail.com",
      status: "Unavailable",
    },
    {
      doctor_id: "110",
      doctor_name: "Rutuj Shah",
      gender: "Male",
      speciality: "Neurologist",
      phone_no: "7113240003",
      email: "rutujshah@gmail.com",
      status: "Available",
    },
  ];
  const filteredData = showAvailable
    ? doctor_data.filter((doctor) => doctor.status === "Available")
    : doctor_data;
  return (
    <>
      <div className="navbar-doctor">
        <div className="heading">
          <h2>Doctor</h2>
        </div>
        <Searchbar />
      </div>

      <div className="doctor-navbar2">
        <InputText
          className="searchinputbar"
          placeholder="Search.."
          onInput={(e) =>
            setFilters({
              global: {
                value: e.target.value,
                matchMode: FilterMatchMode.CONTAINS,
              },
            })
          }
        />

        <div className="doctor-checkbox">
          <label>
            <input
              type="checkbox"
              value="available"
              onChange={() => setShowAvailable(!showAvailable)}
            />
            Available Doctors
          </label>
        </div>
      </div>

      <div className="doctor-table">
        <DataTable
          value={filteredData}
          filters={filters}
          paginator
          rows={5}
          totalRecords={filteredData.length}
        >
          <Column field="doctor_id" header="Doctor Id" />
          <Column field="doctor_name" header="Doctor Name" />
          <Column field="doctor_gender" header="Gender" />
          <Column field="speciality" header="Speciality" />
          <Column field="doctor_phone_no" header="Phone Number" />
          <Column field="patient_email" header="Email ID" />
          <Column field="status" header="Status" />
        </DataTable>
      </div>
    </>
  );
}

export default Header;
