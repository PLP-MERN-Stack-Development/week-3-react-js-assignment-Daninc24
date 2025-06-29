import React from 'react';

const variants = {
  primary: 'bg-blue-500 hover:bg-blue-600 text-white',
  secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
  danger: 'bg-red-500 hover:bg-red-600 text-white',
};

const Button = ({ children, variant = 'primary', ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;