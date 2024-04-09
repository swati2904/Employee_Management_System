import React, { useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';

const SignUpForm = ({ onSignUp }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    // Call the onSignUp callback with the form data
    onSignUp(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type='email'
        name='email'
        placeholder='Email'
        value={formData.email}
        onChange={handleChange}
        required
      />
      <Input
        type='password'
        name='password'
        placeholder='Password'
        value={formData.password}
        onChange={handleChange}
        required
      />
      <Input
        type='password'
        name='confirmPassword'
        placeholder='Confirm Password'
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />
      <Button type='submit'>Sign Up</Button>
    </form>
  );
};

export default SignUpForm;
