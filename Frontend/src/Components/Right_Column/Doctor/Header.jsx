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
      doctor_gender: "Female",
      speciality: "General Physician",
      doctor_phone_no: "7218866759",
      doctor_email: "pratikshap2404@gmail.com",
      status: "Available",
    },
    {
      doctor_id: "102",
      doctor_name: "Shaurya Jadhav",
      doctor_gender: "Male",
      speciality: "Neurologist",
      doctor_phone_no: "7067457473",
      doctor_email: "shauryajadhav@gmail.com",
      status: "Unavailable",
    },
    {
      doctor_id: "103",
      doctor_name: "Shruti Shinde",
      doctor_gender: "Female",
      speciality: "Paediatrician",
      doctor_phone_no: "9503426578",
      doctor_email: "shrutishinde@gmail.com",
      status: "Available",
    },
    {
      doctor_id: "104",
      doctor_name: "Riya Sharma",
      doctor_gender: "Female",
      speciality: "Gynaecologist",
      doctor_phone_no: "8567405231",
      doctor_email: "riyasharma@gmail.com",
      status: "Unavailable",
    },
    {
      doctor_id: "105",
      doctor_name: "Naman Gupta",
      doctor_gender: "Male",
      speciality: "Dentist",
      doctor_phone_no: "7621146006",
      doctor_email: "namangupta@gmail.com",
      status: "Available",
    },
    {
      doctor_id: "106",
      doctor_name: "Dev Thakur",
      doctor_gender: "Male",
      speciality: "Opthalmologist",
      doctor_phone_no: "6150654368",
      doctor_email: "devthakur@gmail.com",
      status: "Available",
    },
    {
      doctor_id: "107",
      doctor_name: "Preeti Deshmukh",
      doctor_gender: "Female",
      speciality: "Paediatrician",
      doctor_phone_no: "8974520234",
      doctor_email: "preetideshmukh@gmail.com",
      status: "Unavailable",
    },
    {
      doctor_id: "108",
      doctor_name: "Eknath Pawar",
      doctor_gender: "Male",
      speciality: "Dermatologist",
      doctor_phone_no: "6460315668",
      doctor_email: "eknathpawar@gmail.com",
      status: "Available",
    },
    {
      doctor_id: "109",
      doctor_name: "Aditi Deshpande",
      doctor_gender: "Female",
      speciality: "General Physician",
      doctor_phone_no: "9080645334",
      doctor_email: "aditideshpande@gmail.com",
      status: "Unavailable",
    },
    {
      doctor_id: "110",
      doctor_name: "Rutuj Shah",
      doctor_gender: "Male",
      speciality: "Neurologist",
      doctor_phone_no: "7113240003",
      doctor_email: "rutujshah@gmail.com",
      status: "Available",
    },
  ];
  const filteredData = showAvailable
    ? doctor_data.filter((doctor) => doctor.status === "Available")
    : doctor_data;
  return (
    <>
      <div className="navbar-doctor">
          <h2>Doctor</h2>
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
          <Column field="doctor_email" header="Email ID" />
          <Column field="status" header="Status" />
        </DataTable>
      </div>
    </>
  );
}

export default Header;
