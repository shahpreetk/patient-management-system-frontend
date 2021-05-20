import { UserAddIcon, SortAscendingIcon, UsersIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import * as ROUTES from "../constants/routes";

const SearchComponent = () => {
  return (
    <>
      <div className="bg-blueGray-200 p-5 rounded-md">
        <div className="flex items-end justify-between flex-wrap content-between space-y-2">
          <div className="flex-auto">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Search patients
            </label>
            <div className="mt-1 flex rounded-md">
              <div className="relative flex items-stretch focus-within:z-10">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UsersIcon className="h-5 w-5 text-blueGray-500" aria-hidden="true" />
                </div>
                <input
                  type="search"
                  name="name"
                  id="name"
                  className="block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-none focus:outline-none bg-white"
                  placeholder="John Doe"
                />
              </div>
              <button className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-r-md text-blueGray-700 bg-blueGray-600 hover:bg-blueGray-600 focus:outline-none">
                <SortAscendingIcon className="h-5 w-5 text-gray-50" aria-hidden="true" />
                <span className="text-gray-50">Sort</span>
              </button>
            </div>
          </div>
          <div className="content-end items-end">
            <Link to={ROUTES.ADD_DATA}>
              <button
                aria-label="Add New Patient"
                title="Add New Patient"
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Add New
            <UserAddIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchComponent;
