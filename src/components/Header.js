import React from 'react';
import { Link } from 'react-router-dom';

// Header component
const Header = () => {
  return (
    <header className="bg-blue-900 text-white py-4">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold">
          <Link to="/" className="text-white hover:text-gray-300">
            NASA's API Explorer
          </Link>
        </h1>
      </div>
    </header>
  );
};

// Export the Header component
export default Header;
