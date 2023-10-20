import React, { createContext, ReactNode, useState, useEffect } from 'react';
import axios from 'axios';
import ToasterMessage from '../components/Toaster';

interface LaunchData {}

export const DataContext = createContext<any>(undefined);

interface DataContextProviderProps {
  children: ReactNode;
}

export function DataContextProvider({ children }: DataContextProviderProps) {
  const [dataList, setDataList] = useState<LaunchData[] | any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [selectStatus, setSelectStatus] = useState(null);
  const [finalDataList, setFinalDataList] = useState(dataList);

  const fetchData = async () => {
    setIsLoading(true);
    await axios
      .get('https://api.spacexdata.com/v3/launches')
      .then((res) => {
        //console.log(res.data, 'res');
        setDataList(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearchSubmit = (e: any) => {
    e.preventDefault();
    const filteredItems = dataList.filter(
      (item: any) =>
        item.rocket.rocket_name.toLowerCase() === searchInput.toLowerCase()
    );
    if (filteredItems.length === 0) {
      ToasterMessage('No data found', 'warning');
      setFinalDataList([]);
    } else {
      ToasterMessage('Data successfully');
      setFinalDataList(filteredItems);
    }
    console.log(filteredItems, 'filter array');
  };

  //console.log(finalDataList, 'fil;ter data');
  const handleSelectStatus = (e: any) => {
    const { value } = e.target;
    setSelectStatus(value);
  };

  useEffect(() => {
    filterSelectedStatus();
  }, [selectStatus]);

  const filterSelectedStatus = () => {
    //console.log(selectStatus, 'filter status');
    if (selectStatus === 'true') {
      const filterItems = dataList.filter(
        (item: any) => item.launch_success === true
      );
      ToasterMessage('Displaying data as launch status success');
      setFinalDataList(filterItems);
    } else if (selectStatus === 'false') {
      const filterItems = dataList.filter(
        (item: any) => item.launch_success === false
      );
      ToasterMessage('Displaying data as launch status failed');
      setFinalDataList(filterItems);
    } else {
      setFinalDataList(dataList);
    }
  };

  return (
    <DataContext.Provider
      value={{
        dataList,
        searchInput,
        setSearchInput,
        finalDataList,
        setFinalDataList,
        handleSearchSubmit,
        handleSelectStatus,
        filterSelectedStatus,
        isLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
