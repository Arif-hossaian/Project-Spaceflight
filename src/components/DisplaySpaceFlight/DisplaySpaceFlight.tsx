import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import { Card } from '../Card';

const DisplaySpaceFlight = () => {
  const data = useContext(DataContext);
  console.log(data);
  return (
    <div className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-16 mb-10">
      {data.map((content: any, _id: any) => (
        <Card key={_id} className="hover:shadow-2xl">
          <div className="h-36 w-36 mx-auto max-w-screen-sm flex items-center justify-center">
            <img src={content.links.mission_patch} alt="" className="" />
          </div>
          <h1 className="mt-6 text-2xl text-semibold text-center text-[#22292f]">
            {content.mission_name}
          </h1>
        </Card>
      ))}
    </div>
  );
};

export default DisplaySpaceFlight;
