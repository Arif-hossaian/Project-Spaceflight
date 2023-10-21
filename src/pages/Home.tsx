import React from 'react';
import Header from '../components/Header/Header';
import Filter from '../components/filter/Filter';
import DisplaySpaceFlight from '../components/DisplaySpaceFlight/DisplaySpaceFlight';
import UpcomingFilter from '../components/filter/upcomingFilter/UpcomingFilter';

const Home = () => {
  return (
    <div>
      <Header />
      <UpcomingFilter />
      <Filter />
      <DisplaySpaceFlight />
    </div>
  );
};

export default Home;
