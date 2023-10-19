import React, {
    createContext,
    ReactNode,
    useState,
    useEffect,
  } from 'react';
  import axios from 'axios';
  
  // Define the data structure that you expect from the API
  interface LaunchData {
    // Define your data structure here
  }
  
  export const DataContext = createContext<any>(undefined);
  
  // Define the props for the DataContextProvider
  interface DataContextProviderProps {
    children: ReactNode;
  }
  
  // Define the DataContextProvider component
  export function DataContextProvider({ children }: DataContextProviderProps) {
    const [dataList, setDataList] = useState<LaunchData[] | undefined>(undefined);
  
    useEffect(() => {
      // Fetch data from the SpaceX API
      async function fetchData() {
        try {
          const response = await axios.get('https://api.spacexdata.com/v3/launches');
          if (response.status === 200) {
            setDataList(response.data);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
  
      fetchData();
    }, []);
  
    return (
      <DataContext.Provider value={dataList}>{children}</DataContext.Provider>
    );
  }
  