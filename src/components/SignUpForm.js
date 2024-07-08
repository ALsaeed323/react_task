import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SignupForm.css";

function SignupForm(props) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [termsChecked, setTermsChecked] = useState(false); // State for checkbox
  const [passwordStrength, setPasswordStrength] = useState(""); // State for password strength

  function submitHandler(event) {
    event.preventDefault();
    console.log("Submit Handler Called");

    // Check if terms are agreed upon
    if (!termsChecked) {
      alert("Please agree to terms and conditions.");
      return;
    }

    const { firstName, lastName, email, password } = formData;

    const userData = {
      firstName,
      lastName,
      email,
      password,
    };

    props.onAddUser(userData);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleCheckboxChange(event) {
    setTermsChecked(event.target.checked);
  }

  const determinePasswordStrength = (password) => {
    if (password.length < 6) {
      return "Weak";
    } else if (password.length >= 6 && password.length < 10) {
      return "Moderate";
    } else {
      return "Strong";
    }
  };

  useEffect(() => {
    setPasswordStrength(determinePasswordStrength(formData.password));
  }, [formData.password]);

  return (
    <form className="signup-form" onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          required
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
          value={formData.lastName}
          onChange={handleInputChange}
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        value={formData.email}
        onChange={handleInputChange}
      />
      <div className="password-group">
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={formData.password}
          onChange={handleInputChange}
        />
        <div className="password-strength" style={ { marginRight: "340px",}}>
          <div
            style={{
              width: "100%",
              height: "5px",
              backgroundColor:
                passwordStrength === "Weak"
                  ? "red"
                  : passwordStrength === "Moderate"
                  ? "orange"
                  : "green",
              marginTop: "50px",
              marginRight: "50px",
            }}
          ></div>
          <span>{passwordStrength}</span>
        </div>
      </div>

      <div className="checkbox-group">
        <input
          type="checkbox"
          id="terms"
          className="form-checkbox"
          checked={termsChecked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="terms">Agree with Terms &amp; Conditions</label>
      </div>

      <button type="submit" className="signup-btn">
        Sign Up
      </button>
      <div className="or-divider"></div>
      <Link to="/signin" style={{ textDecoration: "none" }}>
        <h4>Already have an account?</h4>
      </Link>
    </form>
  );
}

export default SignupForm;
