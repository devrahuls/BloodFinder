import { useState } from 'react';

const SignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setPasswordError("Passwords don't match");
      return;
    }

    // Reset password error if it was previously set
    setPasswordError('');

    // Add backend registration logic here
    try {
      // Example: Send a POST request to the registration API
      const response = await fetch('your_backend_registration_endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          bloodType,
          password,
          confirmPassword,
          mobileNumber,
          otp,
        }),
      });

      const data = await response.json();
      console.log(data); // handle the response from the server
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  const handleSendOtp = () => {
    // Add logic to send OTP to the user's mobile number
    console.log('OTP sent to', mobileNumber);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
          First Name:
        </label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          className="mt-1 p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
          Last Name:
        </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          className="mt-1 p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Blood Type:</label>
        <div>
          <label className="inline-flex items-center mr-4">
            <input
              type="radio"
              value="O+"
              checked={bloodType === 'O+'}
              onChange={() => setBloodType('O+')}
              className="form-radio"
            />
            <span className="ml-2">O+</span>
          </label>
          <label className="inline-flex items-center mr-4">
            <input
              type="radio"
              value="O-"
              checked={bloodType === 'O-'}
              onChange={() => setBloodType('O-')}
              className="form-radio"
            />
            <span className="ml-2">O-</span>
          </label>

          <label className="inline-flex items-center mr-4">
            <input
              type="radio"
              value="A+"
              checked={bloodType === 'A+'}
              onChange={() => setBloodType('A+')}
              className="form-radio"
            />
            <span className="ml-2">A+</span>
          </label>

          <label className="inline-flex items-center mr-4">
            <input
              type="radio"
              value="A-"
              checked={bloodType === 'A-'}
              onChange={() => setBloodType('A-')}
              className="form-radio"
            />
            <span className="ml-2">A-</span>
          </label>
          <label className="inline-flex items-center mr-4">
            <input
              type="radio"
              value="B+"
              checked={bloodType === 'B+'}
              onChange={() => setBloodType('B+')}
              className="form-radio"
            />
            <span className="ml-2">B+</span>
          </label>
          <label className="inline-flex items-center mr-4">
            <input
              type="radio"
              value="B-"
              checked={bloodType === 'B-'}
              onChange={() => setBloodType('B-')}
              className="form-radio"
            />
            <span className="ml-2">B-</span>
          </label>
          <label className="inline-flex items-center mr-4">
            <input
              type="radio"
              value="AB+"
              checked={bloodType === 'AB+'}
              onChange={() => setBloodType('AB+')}
              className="form-radio"
            />
            <span className="ml-2">AB+</span>
          </label>
          <label className="inline-flex items-center mr-4">
            <input
              type="radio"
              value="AB-"
              checked={bloodType === 'AB-'}
              onChange={() => setBloodType('AB-')}
              className="form-radio"
            />
            <span className="ml-2">AB-</span>
          </label>
        
        </div>
      </div>
      {/* ... Other form fields ... */}

      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-600">
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-1 p-2 border rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">
          Confirm Password:
        </label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="mt-1 p-2 border rounded w-full"
        />
        {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-600">
          Mobile Number:
        </label>
        <div className="flex items-center">
          <input
            type="text"
            id="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
            className="mt-1 p-2 border rounded w-full"
          />
          <button
            type="button"
            className="ml-2 bg-blue-500 text-white px-3 py-1 rounded"
            onClick={handleSendOtp}
          >
            Send OTP
          </button>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="otp" className="block text-sm font-medium text-gray-600">
          OTP:
        </label>
        <input
          type="text"
          id="otp"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
          className="mt-1 p-2 border rounded w-full"
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400">
        Register
      </button>
    </form>
  );
};

export default SignUpForm;
