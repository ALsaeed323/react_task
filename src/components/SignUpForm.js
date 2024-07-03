import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./SignupForm.css";

function SignupForm(props) {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [termsChecked, setTermsChecked] = useState(false); // State for checkbox

  function submitHandler(event) {
    event.preventDefault();
    console.log("Submit Handler Called");

    // Check if terms are agreed upon
    if (!termsChecked) {
      alert("Please agree to terms and conditions.");
      return;
    }

    const enteredFirstName = firstNameRef.current.value;
    const enteredLastName = lastNameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    const userData = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      password: enteredPassword,
    };

    props.onAddUser(userData);
  }

  function handleCheckboxChange(event) {
    setTermsChecked(event.target.checked);
  }

  return (
    <form className="signup-form" onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          placeholder="First Name"
          required
          ref={firstNameRef}
        />
        <input type="text" placeholder="Last Name" required ref={lastNameRef} />
      </div>
      <input type="email" placeholder="Email Address" required ref={emailRef} />
      <div className="password-group">
        <input
          type="password"
          placeholder="Password"
          required
          ref={passwordRef}
        />
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
      <Link to="/signin" style={{ textDecoration: "none" }}>
        <h2>Already have an account?</h2>
      </Link>
    </form>
  );
}

export default SignupForm;
