import React from 'react';
import SignUpForm from '../components/auth/SignupForm';
import { Link } from 'react-router-dom'; // Add import for Link

const Signup = () => {
  const handleSignUp = (formData) => {
    // Implement sign-up logic here
    console.log('Sign up:', formData);
  };

  return (
    <div className='container'>
      <div className='form-container'>
        <h2>Sign Up</h2>
        <SignUpForm onSignUp={handleSignUp} />
        <div className='button-container'>
          <span>
            Already have an account? <Link to='/login'>Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
