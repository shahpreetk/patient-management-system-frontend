// @ts-check
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DuplicateIcon, PhoneIcon, TrashIcon } from '@heroicons/react/solid';
import { FiEdit } from "react-icons/fi";
import DetailContext from "../../context/detail/detailContext";

const CustomTable = ({ details, loading }) => {
  const { deleteDetail, setCurrent } = useContext(DetailContext);
  const handleDeleteDetail = (id) => {
    const userFeedback = window.confirm(
      "Are you sure you want to delete this data?"
    );
    if (userFeedback) {
      deleteDetail(id);
    } else {
      return null;
    }
  };

  function handleCopy(mobileNumber) {
    navigator.clipboard.writeText(`${mobileNumber}`);
    window.alert(`Copied ${mobileNumber}`);
  }

  return (
    <>
      <div className="px-10 pt-10 pb-20">
        {/* <div className="mx-auto container bg-white dark:bg-gray-800 shadow rounded"> */}
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {details === null ? (
            <section>
              <div className="flex">
                <div className="m-auto">
                  <img
                    className=""
                    width="128px"
                    height="128px"
                    src="/images/loader.gif"
                    alt="loader"
                  />
                </div>
              </div>
            </section>
          ) : details.length !== null &&
            details.length === 0 &&
            !loading ? (
            <div>
              <p>Please add data</p>
            </div>
          ) : (
            details.map((detail) => (
              <li key={detail._id} className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                <div className="w-full flex items-center justify-between px-6 pt-6 pb-2 space-x-6">
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-gray-900 text-sm font-medium truncate">{detail.name}</h3>
                      <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                        {detail.bloodGroup}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <p className="mt-1 text-gray-500 text-sm truncate">
                        {detail.caseNumber}
                      </p>
                      <p className="flex-shrink-0 inline-block mt-1 text-orange-600 text-xs font-medium">
                        | {detail.gender} |
                      </p>
                    </div>
                  </div>
                  {/* Details Icon */}
                  <p className="mt-1 text-gray-500 text-sm truncate">
                    <Link to={`/details/${detail._id}`}>
                      <button
                        className="text-white ml-4 cursor-pointer focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 w-8 h-8 rounded flex items-center justify-center"
                        aria-label="Edit"
                        title="Edit"
                        onClick={() => setCurrent(detail)}
                      >
                        <FiEdit size={18} />
                      </button>
                    </Link>
                  </p>
                </div>
                <div className="w-full items-center p-6">
                  <p className="text-gray-500 text-sm truncate">
                    <span className="text-gray-700 font-bold">
                      Date:{" "}
                    </span>
                    {new Date(detail.date1).toLocaleDateString(
                      "en-IN",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        timeZone: "IST",
                      }
                    )}
                  </p>
                  <p className="text-gray-500 text-sm truncate">
                    <span className="text-gray-700 font-bold">
                      Diagnosis: {" "}
                    </span>
                    {detail.diagnosis1}
                  </p>
                  <p className="text-gray-500 text-sm truncate">
                    <span className="text-gray-700 font-bold">
                      Prescription: {" "}
                    </span>
                    {detail.prescription1}
                  </p>
                  <p className="text-gray-500 text-sm truncate">
                    <span className="text-gray-700 font-bold">
                      Comments: {" "}
                    </span>
                    {detail.comments}
                  </p>
                </div>
                <div>
                  <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="w-0 flex-1 flex">
                      <button
                        aria-label="Delete"
                        title="Delete"
                        onClick={() => handleDeleteDetail(detail._id)}
                        className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm font-medium rounded-bl-lg text-red-600"
                      >
                        <TrashIcon className="w-5 h-5 text-red-500" aria-hidden="true" />
                        <span className="ml-3">Delete</span>
                      </button>
                    </div>
                    <div className="-ml-px w-0 flex-1 flex">
                      <a
                        href={`tel:${detail.mobileNumber}`}
                        aria-label="Phone Number"
                        title="Phone Number"
                        className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-emerald-700 font-medium rounded-br-lg hover:text-emerald-900"
                      >
                        <PhoneIcon className="w-5 h-5 text-emerald-600" aria-hidden="true" />
                        <span className="ml-3">Call</span>
                      </a>
                      <span>
                        <div>
                          <button
                            aria-label="Copy Phone Number"
                            title="Copy Phone Number"
                            className="focus:outline-none z-40 items-center justify-center py-4 pl-0 pr-4 text-sm text-emerald-400 font-medium hover:text-emerald-900"
                            onClick={() => handleCopy(detail.mobileNumber)}
                          >
                            <DuplicateIcon className="w-5 h-5 text-emerald-400 hover:text-emerald-900" aria-hidden="true" />
                          </button>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );

};
export default CustomTable;