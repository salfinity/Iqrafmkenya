import React from 'react';

interface Business {
  id: number;
  name: string;
  description: string;
  contact: string;
  location: string;
  image: string;
}

interface BusinessWindowProps {
  businesses: Business[];
}

const BusinessWindow: React.FC<BusinessWindowProps> = ({ businesses }) => {
  return (
    <div className="grid grid-cols-3 max-w-6xl items-center mt-3 gap-4">
      {businesses.map(business => (
        <div key={business.id} className="business-item">
          <img src={business.image} alt={business.name} />
          <h2>{business.name}</h2>
          <p>{business.description}</p>
          <p>Contact: {business.contact}</p>
          <p>Location: {business.location}</p>
        </div>
      ))}
    </div>
  );
};

export default BusinessWindow;
