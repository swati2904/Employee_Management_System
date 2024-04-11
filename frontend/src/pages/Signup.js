import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import SignupForm from '../components/auth/SignupForm';
import { signupUser } from '../config/backend'; // Import signup API function

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = async (formData) => {
    console.log('click');
    try {
      const data = await signupUser(formData);
      console.log(data); // Log response from backend
      if (data && data.success) {
        navigate('/dashboard');
      } else {
        // Handle signup error
      }
    } catch (error) {
      console.error('Signup failed:', error);
      // Handle signup error
    }
  };

  return (
    <div className='container'>
      <div className='form-container'>
        <h2>Sign Up</h2>
        <SignupForm onSignUp={handleSignup} />
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
