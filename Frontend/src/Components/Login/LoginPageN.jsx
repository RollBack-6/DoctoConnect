import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import validator from "validator";
import "./LoginPageN.css";

function LoginPageN() {
  const [EmailIn, setEmail] = useState("");
  const [passwordData, setPasswordData] = useState("");
  const [message, setmessage] = useState("");
  const [messages, setmessages] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handlepass = (e) => {
    setPasswordData(e.target.value);
  };

  const handleemail = (e) => {
    const emailvalue = e.target.value.toLowerCase();
    setEmail(emailvalue);
  };

  const handleRememberMe = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleValidation = (e) => {
    e.preventDefault();
    //PASSWORD VALIDATION
    const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;

    if (passwordData == "") {
      setmessage("Please enter password");
    } else if (regExp.test(passwordData)) {
      setmessage("");
    } else if (!regExp.test(passwordData)) {
      setmessage("Password at least 8 characters");
    } else {
      setmessage("");
    }

    // Email validation
    if (!validator.isEmail(EmailIn)) {
      setmessages("Please enter a valid email address");
      return; // Return to stop further execution
    } else {
      setmessages(""); // Reset the error message if email is valid
    }

    /// VALIDATE BOTH
    if (regExp.test(passwordData) && validator.isEmail(EmailIn)) {
      if (rememberMe) {
        // Store user login information in localStorage
        localStorage.setItem(
          "rememberedUser",
          JSON.stringify({ email: EmailIn, password: passwordData })
        );
      }
      alert("You are logged in");
      window.location.href = "./Overview";
    }
  };

  const handleShowPassowrd = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="Loginbody">
      {/* left side */}
      <div className="Logincurvecontainer">
        <div className="Loginleftpanel">
          <img className="Loginsndimg" src="../SVG_Images/RollBAck.svg" alt="" />
        </div>
      </div>
      {/* right container */}
      <div className="LoginContainer">
        <div className="LoginHeader">
          <h2> Login </h2>
        </div>
        <form>
          {/* Email field */}
          <div className="LoginInput">
            <input
              type="Email or text"
              value={EmailIn}
              onChange={handleemail}
              required
            />
            <label>Email</label>
          </div>
          <p className="Loginmsg">{messages}</p>

          {/* Password field */}
          <div className="LoginInput">
            <input
              name="password"
              value={passwordData}
              onChange={handlepass}
              type={showPassword ? "text" : "password"}
              required
            />
            <label>Password</label>
            <span>
              {showPassword ? (
                <BsEyeSlash onClick={handleShowPassowrd} />
              ) : (
                <BsEye onClick={handleShowPassowrd} />
              )}
            </span>
          </div>
          <p className="Loginmsg">{message}</p>

          {/* forgot button */}
          <div className="LoginForget">
            <label htmlFor="Loginremember">
              <input
                type="checkbox"
                id="remember"
                onChange={handleRememberMe}
                checked={rememberMe}
              />
              <p>Remember me</p>
            </label>
            <a href="#">Forgot password?</a>
          </div>

          {/* Sumbit button */}
          <div className="LoginButton">
          <button type="submit" onClick={handleValidation}>
            Log In
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPageN;
