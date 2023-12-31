import React, { useContext } from 'react';
import { DataContext } from '../../../context/DataContext';

const UpcomingFilter = () => {
  const { handleSetCheckbox, checkUpcoming } = useContext(DataContext);
  return (
    <div className="container">
      <div className="hidden sm:flex justify-end items-center mb-4 mt-16">
        <input
          type="checkbox"
          value={checkUpcoming}
          onChange={handleSetCheckbox}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label className="ml-2 text-sm font-medium text-gray-600">
          Show upcoming only
        </label>
      </div>
    </div>
  );
};

export default UpcomingFilter;
