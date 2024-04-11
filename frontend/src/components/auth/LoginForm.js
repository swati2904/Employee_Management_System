import React, { useState } from 'react';
import CustomInput from '../common/Input';
import CustomButton from '../common/Button';

const LoginForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call the onLogin callback with the form data
    onLogin(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CustomInput
        type='email'
        name='email'
        placeholder='Email'
        value={formData.email}
        onChange={handleChange}
        required
      />
      <CustomInput
        type='password'
        name='password'
        placeholder='Password'
        value={formData.password}
        onChange={handleChange}
        required
      />
      <CustomButton type='submit'>Login</CustomButton>
    </form>
  );
};

export default LoginForm;
