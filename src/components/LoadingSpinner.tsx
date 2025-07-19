import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-16">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-emerald-200 border-solid rounded-full"></div>
        <div className="w-16 h-16 border-4 border-emerald-600 border-solid rounded-full border-t-transparent animate-spin absolute top-0 left-0"></div>
      </div>
      <span className="ml-4 text-lg text-gray-600">Loading opportunities...</span>
    </div>
  );
};

export default LoadingSpinner;