import { useState } from 'react';

function BloodRequestForm({ onSubmit }) {
  const [urgency, setUrgency] = useState('');
  const [location, setLocation] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form data
    if (!urgency || !location || !contactName || !contactPhone || !contactEmail) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    // Prepare request data
    const requestData = {
      urgency,
      location,
      contactName,
      contactPhone,
      contactEmail,
    };

    // Submit request to backend
    onSubmit(requestData)
      .then(() => {
        // Handle successful submission (e.g., clear form, show success message)
        setErrorMessage('');
        setFormValues('#'); // Replace with your method to clear form data
      })
      .catch((error) => {
        // Handle errors (e.g., display error message)
        setErrorMessage(error.message || 'An error occurred. Please try again later.');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Post a Blood Request</h2>
      <div className="mb-4">
        <label htmlFor="urgency" className="block text-gray-700 text-sm font-bold mb-2">
          Urgency Level:
        </label>
        <select
          id="urgency"
          value={urgency}
          onChange={(e) => setUrgency(e.target.value)}
          className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">
          Location:
        </label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="contactName" className="block text-gray-700 text-sm font-bold mb-2">
          Contact Name:
        </label>
        <input
          type="text"
          id="contactName"
          value={contactName}
          onChange={(e) => setContactName(e.target.value)}
          required
          className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="contactPhone" className="block text-gray-700 text-sm font-bold mb-2">
          Contact Phone:
        </label>
        <input
          type="tel"
          id="contactPhone"
          value={contactPhone}
          onChange={(e) => setContactPhone(e.target.value)}
          required
          className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="contactEmail" className="block text-gray-700 text-sm font-bold mb-2">
          Contact Email:
        </label>
        <input
          type="email"
          id="contactEmail"
          value={contactEmail}
          onChange={(e) => setContactEmail(e.target.value)}
          required
          className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
      <button onSubmit={handleSubmit}>Post</button>
      </form>
  )
}
        
export default BloodRequestForm