import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import SingleSpaceFlightCard from './SingleSpaceFlightCard';
import Pagination from '../Pagination';
import CenterLoadingSpinner from '../../shared/loader/CenterLoadingSpinner';

const DisplaySpaceFlight = () => {
  const { dataList, finalDataList, loading, page, selectPageHandler, error } =
    useContext(DataContext);

  if (loading) return <CenterLoadingSpinner />;
  if (error)
    return (
      <p className="mt-20 text-center text-2xl font-semibold text-red-500">
        Server Error
      </p>
    );

  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-9 mt-16 mb-9">
        {finalDataList.length > 0
          ? finalDataList
              .slice(page * 9 - 9, page * 9)
              .map((content: any, _id: number) => (
                <SingleSpaceFlightCard key={_id} content={content} />
              ))
          : dataList
              .slice(page * 9 - 9, page * 9)
              .map((content: any, _id: number) => (
                <SingleSpaceFlightCard key={_id} content={content} />
              ))}
      </div>
      <div className="">
        {finalDataList.length > 0 ? (
          <Pagination
            list={finalDataList}
            page={page}
            selectPageHandler={selectPageHandler}
          />
        ) : (
          <Pagination
            list={dataList}
            page={page}
            selectPageHandler={selectPageHandler}
          />
        )}
      </div>
    </div>
  );
};

export default DisplaySpaceFlight;
