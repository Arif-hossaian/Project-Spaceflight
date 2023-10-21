/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  createContext,
  ReactNode,
  useState,
  useEffect,
  FormEvent,
  ChangeEvent,
} from 'react';
import axios from 'axios';
import ToasterMessage from '../shared/alert/Toaster';
import { baseURL } from '../api/baseURL';

export const DataContext = createContext<any>(undefined);

interface DataContextProviderProps {
  children: ReactNode;
}

export function DataContextProvider({ children }: DataContextProviderProps) {
  const [dataList, setDataList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [checkUpcoming, setCheckUpcoming] = useState(false);
  const [selectStatus, setSelectStatus] = useState<string | null>(null);
  const [dateFilter, setDateFilter] = useState('all');
  const [page, setPage] = useState(1);
  const [finalDataList, setFinalDataList] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    await axios
      .get(`${baseURL}/v3/launches`)
      .then((res) => {
        setDataList(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setError(true);
          setDataList([]);
          setIsLoading(false);
        }
      });
  };

  useEffect(() => {
    const savedPage = sessionStorage.getItem('currentPage');
    if (savedPage) {
      setPage(parseInt(savedPage));
    }
    fetchData();
  }, []);

  useEffect(() => {
    sessionStorage.setItem('currentPage', page.toString());
  }, [page]);

  const selectPageHandler = (selectedPage: number) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= dataList.length / 9 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    const filteredItems = dataList.filter(
      (item: any) =>
        item.rocket.rocket_name.toLowerCase() === searchInput.toLowerCase()
    );
    if (filteredItems.length === 0) {
      ToasterMessage('No data found', 'warning');
      setFinalDataList([]);
    } else {
      ToasterMessage('Data found successfully');
      setFinalDataList(filteredItems);
    }
    //console.log(filteredItems, 'filter array');
  };

  const handleSetCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    //console.log(checked);
    setCheckUpcoming(checked);
  };

  const handleCheckboxFilter = () => {
    if (checkUpcoming === true) {
      const filterItems = dataList.filter(
        (item: any) => item.upcoming === true
      );
      ToasterMessage('Displaying data as upcoming true');
      setFinalDataList(filterItems);
    } else if (checkUpcoming === false) {
      const filterItems = dataList.filter(
        (item: any) => item.upcoming === false
      );
      //console.log(filterItems);
      setFinalDataList(filterItems);
    } else {
      setFinalDataList(dataList);
    }
  };

  useEffect(() => {
    handleCheckboxFilter();
  }, [checkUpcoming]);
  //console.log(finalDataList, 'fil;ter data');
  const handleSelectStatus = (e: ChangeEvent<HTMLSelectElement>) => {
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
      //console.log(filterItems);
      ToasterMessage('Displaying data as launch status failed');
      setFinalDataList(filterItems);
    } else {
      setFinalDataList(dataList);
    }
  };

  const handleSelectDate = (e: any) => {
    const { value } = e.target;
    //console.log(value, 'select value');
    setDateFilter(value);
  };

  const filterDateRange = () => {
    if (dateFilter === 'all') {
      setFinalDataList(dataList);
    } else {
      const now = new Date();
      const filteredLaunches = dataList.filter((launch: any) => {
        const launchDate = new Date(launch.launch_date_utc);
        switch (dateFilter) {
          case 'week':
            const oneWeekAgo = new Date(now);
            oneWeekAgo.setUTCDate(now.getUTCDate() - 7);
            return launchDate > oneWeekAgo;
          case 'month':
            const oneMonthAgo = new Date(now);
            oneMonthAgo.setUTCMonth(now.getUTCMonth() - 1);
            return launchDate > oneMonthAgo;
          case 'year':
            const oneYearAgo = new Date(now);
            oneYearAgo.setUTCFullYear(now.getUTCFullYear() - 1);
            return launchDate > oneYearAgo;
          default:
            return true;
        }
      });
      console.log(filteredLaunches);
      setFinalDataList(filteredLaunches);
    }
  };

  useEffect(() => {
    filterDateRange();
  }, [dateFilter, dataList]);

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
        handleSelectDate,
        filterDateRange,
        checkUpcoming,
        handleSetCheckbox,
        page,
        selectPageHandler,
        error,
        isLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
