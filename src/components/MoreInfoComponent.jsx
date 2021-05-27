// @ts-check
import { MailIcon, PhoneIcon } from '@heroicons/react/solid';

const MoreInfoComponent = () => {
  return (
    <>
      <h1 className="my-5 text-2xl">Work in Progress... </h1>
      <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6 rounded-md">
        <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
          <div className="ml-4 mt-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {/* Initials, Name, Case Number */}
                <div className="group w-full h-full rounded-full overflow-hidden shadow-sm text-center bg-indigo-600">
                  <p className="text-white font-bold align-middle px-5 py-5">JD</p>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">John Doe</h3>
                <p className="text-sm text-gray-500">
                  <p>Case Number: 3636bd2181e</p>
                </p>
              </div>
            </div>
          </div>
          {/* Phone/Mobile Number, Email */}
          <div className="ml-4 mt-4 flex-shrink-0 flex">
            <button
              type="button"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <PhoneIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
              <span>Mobile</span>
            </button>
            <button
              type="button"
              className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {/* <MailIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
              <span>AB+ve</span>
            </button>
          </div>
        </div>
        {/* Height, Weight, Gender */}
        <div className="mt-4 ml-0">
          <dl className="mt-2 grid grid-cols-3 gap-4 sm:grid-cols-3 ml-0">
            <div className="bg-white shadow-none rounded-lg overflow-hidden sm:pl-20 ml-0">
              <dt className="text-sm font-medium text-gray-500 truncate">Gender</dt>
              <dd className="mt-1 text-lg font-semibold text-gray-900">Male</dd>
            </div>
            <div className="bg-white shadow-none rounded-lg overflow-hidden sm:pl-20">
              <dt className="text-sm font-medium text-gray-500 truncate">Height</dt>
              <dd className="mt-1 text-lg font-semibold text-gray-900">5.7 ft</dd>
            </div>
            <div className="bg-white shadow-none rounded-lg overflow-hidden sm:pl-20">
              <dt className="text-sm font-medium text-gray-500 truncate">Weight</dt>
              <dd className="mt-1 text-lg font-semibold text-gray-900">65 kgs</dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
};

export default MoreInfoComponent;
