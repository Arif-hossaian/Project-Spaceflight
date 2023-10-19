import React from 'react';

const Filter = () => {
  return (
   <div className='container'>
     <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="">
        <input type="text" placeholder="Search" />
      </div>
      <div className="flex flex-col md:flex-row justify-start items-center">
        <div>
          <select>
            <option>select status</option>
          </select>
        </div>
        <div className='ml-5'>
          <select>
            <option>select date</option>
          </select>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Filter;
