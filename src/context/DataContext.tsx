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
  const [finalDataList, setFinalDataList] = useState([]);

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

  return (
    <DataContext.Provider
      value={{
        dataList,
        searchInput,
        setSearchInput,
        finalDataList,
        setFinalDataList,
        handleSearchSubmit,
        isLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
