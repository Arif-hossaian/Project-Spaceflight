import SearchBar from './search/SearchBar';
import StatusFilter from './statusFilter/StatusFilter';
import DateFilter from './dateFilter/DateFilter';

const Filter = () => {
  return (
    <div className="container mt-1">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 lg:w-1/2">
          <SearchBar />
        </div>
        <div className="flex flex-col md:flex-row justify-start items-center">
          <StatusFilter />
          <DateFilter />
        </div>
      </div>
    </div>
  );
};

export default Filter;
