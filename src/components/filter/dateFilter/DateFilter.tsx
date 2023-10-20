import React, { useContext } from 'react';
import { DataContext } from '../../../context/DataContext';

const DateFilter = () => {
  const { handleSelectStatus, filterSelectedStatus } = useContext(DataContext);
  const handleSelectChange = (e: any) => {
    handleSelectStatus(e);
    filterSelectedStatus();
  };
  return (
    <div className="w-full">
      <select
        onChange={handleSelectChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option>By Launch Date</option>
        <option value="true">Last week</option>
        <option value="false">Last month</option>
        <option value="true">Last week</option>
      </select>
    </div>
  );
};

export default DateFilter;
