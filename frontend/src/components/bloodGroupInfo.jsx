import  { useState } from 'react';

const BloodGroupInfo = () => {
  const [activeTab, setActiveTab] = useState('O');

  const bloodGroupDescriptions = {
    'O': {
      title: 'Universal Donor',
      description: (
        <p>
          People with O blood group have neither A nor B antigens on their red blood cells. 
          Therefore, their red blood cells can be safely transfused to people with any blood group, 
          making them universal donors. However, they can only receive O blood themselves.
        </p>
      ),
    },
    'A': {
      title: 'A Positive or A Negative',
      description: (
        <p>
          People with A blood group have A antigens on their red blood cells. 
          They can receive blood from A and O groups but can only donate to A and AB groups.
        </p>
      ),
    },
    'B': {
      title: 'B Positive or B Negative',
      description: (
        <p>
          People with B blood group have B antigens on their red blood cells. 
          They can receive blood from B and O groups but can only donate to B and AB groups.
        </p>
      ),
    },
    'AB': {
      title: 'Universal Recipient',
      description: (
        <p>
          People with AB blood group have both A and B antigens on their red blood cells. 
          They can receive blood from all blood groups but can only donate to AB group.
        </p>
      ),
    },
  };

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
  };

  return (
    <div className="container rounded-lg p-4 mb-8 md:p-16">
      {/* Title */}
      <h1 className="text-4xl font-bold mt-5 mb-5 text-center md:text-6xl justify-center flex items-center">
        Know More About Your Blood
      </h1>

      {/* Tabs */}
      <div className="tabs flex flex-wrap justify-around border-b border-gray-200 md:justify-between">
        <button
          className={`tab text-center py-2 rounded hover:bg-gray-200 text-gray-700 md:px-40 ${
            activeTab === 'O' ? 'active bg-gray-200 text-red-600' : ''
          }`}
          onClick={() => handleTabChange('O')}
        >
          O
        </button>
        <button
          className={`tab text-center py-2 rounded hover:bg-gray-200 text-gray-700 md:px-40 ${
            activeTab === 'A' ? 'active bg-gray-200 text-red-600' : ''
          }`}
          onClick={() => handleTabChange('A')}
        >
          A
        </button>
        <button
          className={`tab text-center py-2 rounded hover:bg-gray-200 text-gray-700 md:px-40 ${
            activeTab === 'B' ? 'active bg-gray-200 text-red-600' : ''
          }`}
          onClick={() => handleTabChange('B')}
        >
          B
        </button>
        <button
          className={`tab text-center py-2 rounded hover:bg-gray-200 text-gray-700 md:px-40 ${
            activeTab === 'AB' ? 'active bg-gray-200 text-red-600' : ''
          }`}
          onClick={() => handleTabChange('AB')}
        >
          AB
        </button>
      </div>

      {/* Description */}
      <div className="description w-full pt-4">
        <h2 className="text-2xl font-bold text-center md:text-3xl mb-4">
          {bloodGroupDescriptions[activeTab].title}
        </h2>
        <p className="text-lg w-full text-center md:text-lg md:ml-6">
          {bloodGroupDescriptions[activeTab].description}
        </p>
      </div>
    </div>

  );
};

export default BloodGroupInfo;
