import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-[#5cfafa] text-[#4a2f23] p-8"
    >
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold mb-4">
          <i className="fas fa-exclamation-triangle text-orange-500 mr-2"></i>
          404: Page Not Found
        </h1>
        <p className="text-lg mb-6">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Link
          to="/"
          className="px-6 py-3 rounded-lg text-white font-medium"
          style={{ backgroundColor: '#ff5722' }}
        >
          <i className="fas fa-home mr-2"></i> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
