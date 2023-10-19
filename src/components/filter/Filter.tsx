import React from 'react';
import SearchBar from './search/SearchBar';

const Filter = () => {
  return (
    <div className="container mt-24">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="w-1/2">
          <SearchBar />
        </div>
        <div className="flex flex-col md:flex-row justify-start items-center">
          <div className='w-full mr-10'>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option>By Launch Status</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          <div className="w-full">
          <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option>By Launch Date</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
