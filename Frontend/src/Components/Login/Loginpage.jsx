import React, { useState } from "react";
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import "./Loginpage.css";

function LoginPage(){

  const [PhoneNumber,setphoneNumber] =useState("")
  const [passwordData, setPasswordData] = useState("");
  const [message, setmessage] = useState("");
  const [messages, setmessages] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleInput = (e) => {
    setPasswordData(e.target.value);  
  };

  const phno = (e) => {
    setphoneNumber(e.target.value);
  }

  const handleValidation = (e) =>{
      
    e.preventDefault();

      const regNum = /^\d{10,10}$/
      if(regNum.test(PhoneNumber)){
        setmessages("Number is valid")
      } else if(!regNum.test(PhoneNumber)){
        setmessages("Number is not valid")
      } else {
        setmessage("")
      }

      
      const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/
      
      if(passwordData === ""){
        setmessages("Please enter password")
      } else if(regExp.test(passwordData)){
        setmessage("Password is Valid")
      } else if(!regExp.test(passwordData)){
        setmessage("password is not valid")
      } else {
        setmessage("")
      }

      if (regExp.test(passwordData) && regNum.test(PhoneNumber)) {
        alert('You are logged in');
        window.location.reload();
      }
    }

  const handleShowPassowrd = () => {
    setShowPassword(!showPassword);
  };

return(
  <body>
  <div class="wrapper">
    <form>
      <h2>Sign-In</h2>
        <div class="input-field">
        <input type="tel" value={PhoneNumber} onChange={phno} required />
        <label>PhoneNumber</label>
      </div>
      <p>{messages}</p>
      <div class="input-field">
      <input name="password" value={passwordData} onChange={handleInput} type={showPassword ? "text" : "password"} required />
        <label>Password</label>
        <span>{showPassword ? <BsEyeSlash onClick={handleShowPassowrd} /> : <BsEye onClick={handleShowPassowrd} />}</span>
      </div>
      <p>{message}</p>
      <div class="forget">
        <label for="remember">
          <input type="checkbox" id="remember" />
          <p>Remember me</p>
        </label>
        <a href="#">Forgot password?</a>
      </div>
      <button type="submit" onClick={handleValidation}>Log In</button>
      <div class="register">
        <p>Don't have an account? <a href="#">Sign-Up</a></p>
      </div>
    </form>
  </div>
</body>
);
}

export default LoginPage;