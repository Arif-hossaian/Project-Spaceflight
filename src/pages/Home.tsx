import React from 'react';
import Header from '../components/Header/Header';
import Filter from '../components/filter/Filter';
import DisplaySpaceFlight from '../components/DisplaySpaceFlight/DisplaySpaceFlight';

const Home = () => {
  return (
    <>
      <Header />
      <Filter />
      <DisplaySpaceFlight />
    </>
  );
};

export default Home;
