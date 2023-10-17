import React, { useEffect, useState } from "react";
import "./Header.css";
import Searchbar from "../NavSearch/SearchBar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

let doctor_data = [
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

function Header() {
  return (
    <>
      <div className="navbar-doctor">
        <div className="heading">
          <h2>Doctor</h2>
        </div>
        <Searchbar />
      </div>

      <div className="blankline1"></div>

      <div className="doctor-navbar2">
        <div className="doctor-checkbox">
          <label>
            <input type="checkbox" />
            Available Doctors
          </label>
          <label className="unavailable">
            <input type="checkbox" />
            Unavailable Doctors
          </label>
        </div>
        <div className="speciality-dropdown">
          <div className="speciality-label">
            <p>Speciality: </p>
          </div>
          <div className="dropdowncontent">
            <select>
              <option value="None">None </option>
              <option value="Physician">Physician</option>
              <option value="Dentist">Dentist</option>
              <option value="Dental">Dental</option>
            </select>
          </div>
        </div>
      </div>

      <div className="blankline1"></div>

      <div className="doctor-table">
        <DataTable value={doctor_data}>
          <Column field="doctor_id" header="Doctor Id" />
          <Column field="doctor_name" header="Doctor Name" />
          <Column field="gender" header="Gender" />
          <Column field="speciality" header="Speciality" />
          <Column field="phone_no" header="Phone Number" />
          <Column field="email" header="Email ID" />
          <Column field="status" header="Status" />
        </DataTable>
      </div>
    </>
  );
}

export default Header;
