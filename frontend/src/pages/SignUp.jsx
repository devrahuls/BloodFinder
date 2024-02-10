import { useState } from 'react';

const RegistrationForm = () => {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [location, setLocation] = useState('');
  const [contactDetails, setContactDetails] = useState('');
  const [medicalInfo, setMedicalInfo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle form submission here
    // e.g., send data to server using fetch or axios
    console.log(
      'Profile photo:', profilePhoto,
      'Full name:', fullName,
      'Email:', email,
      'Password:', password,
      'Blood type:', bloodType,
      'Location:', location,
      'Contact details:', contactDetails,
      'Medical information:', medicalInfo
    );

    // Reset form after submission (optional)
    setProfilePhoto(null);
    setFullName('');
    setEmail('');
    setPassword('');
    setBloodType('');
    setLocation('');
    setContactDetails('');
    setMedicalInfo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration Form</h2>
      <div className="form-group">
        <label htmlFor="profilePhoto">Profile Photo:</label>
        <input
          type="file"
          id="profilePhoto"
          onChange={(e) => setProfilePhoto(e.target.files[0])}
        />
      </div>
      <div className="form-group">
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="bloodType">Blood Type:</label>
        <input
          type="text"
          id="bloodType"
          value={bloodType}
          onChange={(e) => setBloodType(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="contactDetails">Contact Details:</label>
        <input
          type="text"
          id="contactDetails"
          value={contactDetails}
          onChange={(e) => setContactDetails(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="medicalInfo">Medical Information (Optional):</label>
        <textarea
          id="medicalInfo"
          value={medicalInfo}
          onChange={(e) => setMedicalInfo(e.target.value)}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
