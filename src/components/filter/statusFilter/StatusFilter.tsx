import React, { useContext } from 'react';
import { DataContext } from '../../../context/DataContext';

const StatusFilter = () => {
  const { handleSelectStatus, filterSelectedStatus } = useContext(DataContext);
  const handleSelectChange = (e: any) => {
    handleSelectStatus(e);
    filterSelectedStatus();
  };
  return (
    <div className="w-80 mr-0 mt-3 lg:mt-0 md:mt-0 md:mr-2 lg:mr-2">
      <select
        onChange={handleSelectChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option>By Launch Status</option>
        <option value="true">Success</option>
        <option value="false">Failure</option>
      </select>
    </div>
  );
};

export default StatusFilter;
