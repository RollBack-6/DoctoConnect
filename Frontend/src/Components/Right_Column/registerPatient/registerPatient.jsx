import React, { useState } from 'react';
import "./registerPatient.css";

const RegistrationForm = () => {
  // Define state variables for form fields
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    bloodGroup: '',
    gender: '',
    phoneNumber: '',
    address: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className='registrationForm'>
      <div className='container'>
        <div className='header'>
          <h2>Patient Registration</h2>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className='fullName'>
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Blood Group */}
          <div className='bloodGroup'>
            <label htmlFor="bloodGroup">Blood Group:</label>
            <input
              type="text"
              id="bloodGroup"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              required
            />
          </div>

          {/* Gender */}
          <div className='gender'>
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Phone Number */}
          <div className='phoneNumber'>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          {/* Address */}
          <div className='address'>
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className='email'>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* symptoms */}
          <div className='symptoms'>
            <label htmlFor="symptoms">Symptoms:</label>
            <input
              type="symptoms"
              id="symptoms"
              name="symptoms"
              value={formData.symptoms}
              onChange={handleChange}
              required
            />
          </div>

          {/* specification */}
          <div className='specification'>
            <label htmlFor="specification">Specification:</label>
            <input
              type="specification"
              id="specification"
              name="specification"
              value={formData.specification}
              onChange={handleChange}
              required
            />
          </div>
          {/* doctorName */}
          <div className='doctorName'>
            <label htmlFor="doctorName">Doctor Name:</label>
            <input
              type="doctorName"
              id="doctorName"
              name="doctorName"
              value={formData.doctorName}
              onChange={handleChange}
              required
            />
          </div>

          {/* appointmentTime */}
          <div className='appointmentTime'>
            <label htmlFor="appointmentTime">Appointment Time:</label>
            <select
              id="appointmentTime"
              name="appointmentTime"
              value={formData.appointmentTime}
              onChange={handleChange}
              required
            >
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>
          </div>
          <div className='divButton'>
            <button type="submit" className='submitButton'>Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
