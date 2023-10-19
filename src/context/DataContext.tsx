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
    const [dataList, setDataList] = useState<LaunchData[] | any>([]);

    const fetchData = async() => {
      await axios.get('https://api.spacexdata.com/v3/launches').then((res) => {
        console.log(res.data, 'res')
        setDataList(res.data)
      }).catch((err) => {console.log(err)})
    }
  
    useEffect(() => {
     fetchData()
    }, []);
  
    return (
      <DataContext.Provider value={dataList}>{children}</DataContext.Provider>
    );
  }
  