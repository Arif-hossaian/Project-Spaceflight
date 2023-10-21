import React, { useContext } from 'react';
import { DataContext } from '../../../context/DataContext';

const SearchBar = () => {
  const { searchInput, setSearchInput, handleSearchSubmit } =
    useContext(DataContext);

  return (
    <form onSubmit={handleSearchSubmit}>
      <div className="flex mt-16 md:mt-0 lg:mt-0">
        <div className="relative w-full mx-2 md:w-2/3 lg:w-2/3">
          <input
            type="search"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Search..."
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
