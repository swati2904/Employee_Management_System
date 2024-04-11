import React, { useState } from 'react';
import CustomInput from '../common/Input';
import CustomButton from '../common/Button';

const SignupForm = ({ onSignup }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call the onSignup callback with the form data
    onSignup(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CustomInput
        type='email'
        name='email'
        placeholder='Email'
        value={formData.email}
        onChange={handleChange}
        // required
      />
      <CustomInput
        type='password'
        name='password'
        placeholder='Password'
        value={formData.password}
        onChange={handleChange}
        // required
      />
      <CustomInput
        type='password'
        name='confirmPassword'
        placeholder='Confirm Password'
        value={formData.confirmPassword}
        onChange={handleChange}
        // required
      />
      <CustomButton type='submit'>Signup</CustomButton>
    </form>
  );
};

export default SignupForm;
