import  { useState } from 'react';

const ProfilePage = () => {
  // Sample user data
  const [userData, setUserData] = useState({
    fullName: 'John Doe',
    phoneNumber: '123-456-7890',
    bloodType: 'O+',
    healthInformation: 'No known health issues',
    password: 'password123', // Sample password
  });

  // State to manage edit mode
  const [isEditMode, setIsEditMode] = useState(false);

  // State for password change
  const [newPassword, setNewPassword] = useState('');

  // Function to handle form submission when editing
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add logic to update user data and password in the database or state
    setUserData((prevData) => ({
      ...prevData,
      password: newPassword || prevData.password, // Update password only if a new one is provided
    }));
    setIsEditMode(false);
  };

  // Function to handle input changes when editing
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle password input change
  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  // Function to handle logout
  const handleLogout = () => {
    // Add logic for logging out the user
    console.log('User logged out');
  };

  return (
    <div>
      <h1>Profile Page</h1>

      {isEditMode ? (
        <form onSubmit={handleFormSubmit}>
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={userData.fullName}
              onChange={handleInputChange}
            />
          </label>

          <br />

          <label>
            Phone Number:
            <input
              type="text"
              name="phoneNumber"
              value={userData.phoneNumber}
              onChange={handleInputChange}
            />
          </label>

          <br />

          <label>
            Blood Type:
            <input
              type="text"
              name="bloodType"
              value={userData.bloodType}
              onChange={handleInputChange}
            />
          </label>

          <br />

          <label>
            Health Information:
            <textarea
              name="healthInformation"
              value={userData.healthInformation}
              onChange={handleInputChange}
            />
          </label>

          <br />

          <label>
            New Password:
            <input
              type="password"
              name="newPassword"
              value={newPassword}
              onChange={handlePasswordChange}
            />
          </label>

          <br />

          <button type="submit">Save Changes</button>
        </form>
      ) : (
        <div>
          <p>
            <strong>Full Name:</strong> {userData.fullName}
          </p>
          <p>
            <strong>Phone Number:</strong> {userData.phoneNumber}
          </p>
          <p>
            <strong>Blood Type:</strong> {userData.bloodType}
          </p>
          <p>
            <strong>Health Information:</strong> {userData.healthInformation}
          </p>
          <button onClick={() => setIsEditMode(true)}>Edit Profile</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
