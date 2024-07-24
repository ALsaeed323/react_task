import React,{useState} from 'react';
import SigninForm from './SigninForm/SigninForm';
import Illustration from '../Illustration/Illustration';
import Logo from '../Logo';
import '../Signup/Signup.css';

function Signin() {
    const [successMessage, setSuccessMessage] = useState('');
  function signInHandler(userData) {

    fetch('https://react-5053d-default-rtdb.firebaseio.com/users.json', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (response.ok) {
            setSuccessMessage('User signed in successfully!');
          console.log('User signed in successfully!');
          // Handle further actions like navigation or state updates
        } else {
          throw new Error('Failed to sign in user');
        }
      })
      .catch(error => {
        console.error('Error signing in:', error);
        // Handle error state or display an error message to the user
      });
  }

  return (
    <div className="signup-container">
      <Logo />
      <div className="signup-left">
        <h1>Sign In</h1>
        <p>Enter your credentials to continue</p>
        <SigninForm onSignIn={signInHandler} />
      {successMessage && <p>{successMessage}</p>}

      </div>
      <div className="signup-right">
        <Illustration />
      </div>
    </div>
  );
}

export default Signin;
