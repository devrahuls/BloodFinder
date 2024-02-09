import { useState } from 'react';

const BloodGroupForm = () => {
  const [bloodType, setBloodType] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle form submission here
    // e.g., send data to server using fetch or axios
    console.log(`Blood type: ${bloodType}, Location: ${location}`);

    // Reset form after submission (optional)
    setBloodType('');
    setLocation('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Blood Group & Location Information</h2>
      <div className="form-group">
        <label htmlFor="bloodType">Blood Type:</label>
        <input
          type="text"
          id="bloodType"
          value={bloodType}
          onChange={(e) => setBloodType(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BloodGroupForm;
