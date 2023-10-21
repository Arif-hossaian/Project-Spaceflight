import React, { useContext } from 'react';
import { DataContext } from '../../../context/DataContext';

const DateFilter = () => {
  const { handleSelectDate } = useContext(DataContext);
  const handleSelectChange = (e: any) => {
    handleSelectDate(e);
    //filterDateRange();
  };
  return (
    <div className="w-80 mt-3 lg:mt-0 md:mt-0">
      <select
        onChange={handleSelectChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value="all">By Launch Date</option>
        <option value="week">Last week</option>
        <option value="month">Last month</option>
        <option value="year">Last year</option>
      </select>
    </div>
  );
};

export default DateFilter;
