import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded p-4">
      {children}
    </div>
  );
};

export default Card;
