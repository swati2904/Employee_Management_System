import React, { useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';

const LoginForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onLogin callback with the form data
    onLogin(formData);
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
      <Button type='submit'>Login</Button>
    </form>
  );
};

export default LoginForm;
