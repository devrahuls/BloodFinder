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
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-10 flex flex-col space-y-4 ">
  <h2 className="text-4xl font-bold text-center">Become A Donor Now !</h2>
  <div className="flex flex-col">
    <label htmlFor="bloodType" className="text-gray-700 mb-2">Blood Type:</label>
    <input 
      type="text"
      id="bloodType"
      value={bloodType}
      onChange={(e) => setBloodType(e.target.value)}
      required
      className="rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
    />
  </div>
  <div className="flex flex-col">
    <label htmlFor="location" className="text-gray-700 mb-2">Location:</label>
    <input
      type="text"
      id="location"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
      required
      className="rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
    />
  </div>
  <button type="submit" className="w-full py-2 bg-black hover:bg-gray-800 text-white font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
    Submit
  </button>
</form>

  );
};

export default BloodGroupForm;
