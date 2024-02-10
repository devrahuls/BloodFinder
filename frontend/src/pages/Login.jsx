import   { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState(''); // Only use email instead of formData
  const [password, setPassword] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Replace with your actual backend API call
    fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Login response:', data);
        // Handle successful login (e.g., redirect to dashboard)
      })
      .catch((error) => {
        console.error('Login error:', error);
        // Handle login error (e.g., display error message)
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={password} onChange={handleChange} required />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
