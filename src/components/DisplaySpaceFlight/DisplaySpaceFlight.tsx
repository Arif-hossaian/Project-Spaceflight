import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import SingleSpaceFlightCard from './SingleSpaceFlightCard';

const DisplaySpaceFlight = () => {
  const { dataList, finalDataList, loading } = useContext(DataContext);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-16 mb-10">
      {finalDataList.length > 0
        ? finalDataList.map((content: any, _id: any) => (
            <SingleSpaceFlightCard key={_id} content={content} />
          ))
        : dataList.map((content: any, _id: any) => (
            <SingleSpaceFlightCard key={_id} content={content} />
          ))}
    </div>
  );
};

export default DisplaySpaceFlight;
