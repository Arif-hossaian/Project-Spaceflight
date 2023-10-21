import React from 'react';
import LoadingSpinner from './LoadingSpinner';

const CenterLoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <LoadingSpinner />
    </div>
  );
};

export default CenterLoadingSpinner;
