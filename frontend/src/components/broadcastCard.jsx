import { useNavigate } from 'react-router-dom';

function DonorCard({ profilePicture, name, bloodType, chatId }) {
  const navigate = useNavigate();

  const handleDonateClick = () => {
    navigate(`/chat/${chatId}`); // Replace with your chat route
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img className="w-20 h-20 rounded-full mx-auto mt-3" src={profilePicture} alt={`${name}'s profile picture`} />
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-700">{name}</h3>
        <p className="text-sm text-gray-500">Blood Type: {bloodType}</p>
        <button
          onClick={handleDonateClick}
          className="inline-flex items-center px-3 py-2 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Donate
        </button>
      </div>
    </div>
  );
}

export default DonorCard;
