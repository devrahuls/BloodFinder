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
    <div className="container">
      <h1>Get The Info About Your Blood</h1>
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'O' ? 'active' : ''}`}
          onClick={() => handleTabChange('O')}
        >
          O
        </button>
        <button
          className={`tab ${activeTab === 'A' ? 'active' : ''}`}
          onClick={() => handleTabChange('A')}
        >
          A
        </button>
        <button
          className={`tab ${activeTab === 'B' ? 'active' : ''}`}
          onClick={() => handleTabChange('B')}
        >
          B
        </button>
        <button
          className={`tab ${activeTab === 'AB' ? 'active' : ''}`}
          onClick={() => handleTabChange('AB')}
        >
          AB
        </button>
      </div>
      <div className="description">
        <h2>{bloodGroupDescriptions[activeTab].title}</h2>
        {bloodGroupDescriptions[activeTab].description}
      </div>
    </div>
  );
};

export default BloodGroupInfo;
