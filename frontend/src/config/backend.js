const BASE_URL = 'http://localhost:3001';

export const loginUser = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    return await response.json();
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

export const signupUser = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    return await response.json();
  } catch (error) {
    console.error('Signup failed:', error);
    throw error;
  }
};
