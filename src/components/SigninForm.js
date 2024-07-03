import React, { useRef } from 'react';

function SigninForm({ onSignIn }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    // Simulate sign-in logic (replace with Firebase Authentication)
    const userData = {
      email: enteredEmail,
      password: enteredPassword,
    };

    // Call the prop function to handle sign-in
    onSignIn(userData);
  }

  return (
    <form onSubmit={submitHandler}>
      
      <div>
        
        <div className="password-group">
        <div>
        <label>Email:</label>
        <input type="email" placeholder="Email Address" required ref={emailRef} />
      </div>
      <label>Password:</label>
        <input
          type="password"
          placeholder="Password"
          required
          ref={passwordRef}
        />
      </div>
      </div>
      <button type="submit" className="signup-btn">
      Sign In
      </button>
    </form>
  );
}

export default SigninForm;
