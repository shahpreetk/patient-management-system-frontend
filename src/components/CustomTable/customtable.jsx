// @ts-check
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import DetailContext from "../../context/detail/detailContext";
import { CSVLink } from "react-csv";

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

  return (
    <>
      <div className="py-20">
        <div className="mx-auto container bg-white dark:bg-gray-800 shadow rounded">
          <div className="flex flex-col lg:flex-row p-4 lg:p-8 justify-between items-start lg:items-stretch w-full">
            <div className="w-full lg:w-1/3 flex flex-col lg:flex-row items-start lg:items-center"></div>
            {/* Pagination */}
            <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
              {/* <div className="flex items-center lg:border-l lg:border-r border-gray-300 dark:border-gray-200 py-3 lg:py-0 lg:px-6">
                <p
                  className="text-base text-gray-600 dark:text-gray-400"
                  id="page-view"
                >
                  Viewing 1 - 20 of 60
                </p>

                <a
                  className="text-gray-600 dark:text-gray-400 ml-2 border-transparent border cursor-pointer rounded"
                  href="/"
                >
                  <BsChevronLeft />
                </a>

                <a
                  className="text-gray-600 dark:text-gray-400 border-transparent border rounded focus:outline-none cursor-pointer"
                  href="/"
                >
                  <BsChevronRight />
                </a>
              </div> */}
              <div className="lg:ml-6 flex items-center">
                <button className="bg-gray-200 transition duration-150 ease-in-out focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray hover:bg-gray-300 rounded text-indigo-700 px-5 h-8 flex items-center text-sm"
                  aria-label="Download All"
                  title="Download All"
                >
                  <CSVLink data={details} filename="CSV-PatientData.csv">
                    {" "}
                    Download All
                  </CSVLink>
                </button>
                {/* Add icon */}
                <Link to={ROUTES.ADD_DATA}>
                  <button className="text-white ml-4 cursor-pointer focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 w-8 h-8 rounded flex items-center justify-center"
                    aria-label="Add Data"
                    title="Add Data"
                  >
                    <GoPlus width={28} height={28} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Table Start */}
          <div className="w-full overflow-x-scroll 2xl:overflow-x-hidden">
            <table className="min-w-full bg-white dark:bg-gray-800">
              {/* Table Head */}
              <thead>
                <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8">
                  <th className="pl-8 text-gray-600 dark:text-gray-400 font-normal pr-2 text-left text-sm tracking-normal leading-4"></th>
                  <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                    Name
                  </th>
                  <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                    Case No.
                  </th>
                  <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                    Mobile
                  </th>
                  <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                    Date1
                  </th>
                  <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                    Diag1
                  </th>
                  <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                    Presp1
                  </th>
                  <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                    Date2
                  </th>
                  <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                    Diag2
                  </th>
                  <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                    Presp2
                  </th>
                  <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                    Comments
                  </th>
                  <td className="text-gray-600 dark:text-gray-400 font-normal pr-8 text-left text-sm tracking-normal leading-4">
                    More
                  </td>
                </tr>
              </thead>
              <tbody>
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
                  <tr>
                    <th colSpan={14}>
                      <p>Please add data</p>
                    </th>
                  </tr>
                ) : (
                  details.map((detail) => (
                    <tr
                      className="h-24 border-gray-300 dark:border-gray-200 border-b"
                      key={detail._id}
                    >
                      <td className="pl-8 pr-2 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        <div className="flex items-center">
                          {/* Delete Icon */}
                          <button
                            className="text-red-500 mr-2 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                            aria-label="Delete"
                            title="Delete"
                            onClick={() => handleDeleteDetail(detail._id)}
                          >
                            <RiDeleteBin6Line />
                          </button>
                        </div>
                      </td>
                      {/* Patient name */}
                      <td className="text-sm pr-8 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        {detail.name}
                      </td>
                      {/* Case Number */}
                      <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        {detail.caseNumber}
                      </td>
                      {/* Mobile Number */}
                      <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        {detail.mobileNumber}
                      </td>
                      {/* Date 1 */}
                      <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        {new Date(detail.date1).toLocaleDateString(
                          "en-IN",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            timeZone: "IST",
                          }
                        )}
                      </td>
                      {/* Diagnosis 1 */}
                      <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        {detail.diagnosis1}
                      </td>
                      {/* Prescription 1 */}
                      <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        {detail.prescription1}
                      </td>
                      {/* Date 2 */}
                      <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        {new Date(detail.date2).toLocaleDateString(
                          "en-IN",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            timeZone: "IST",
                          }
                        )}
                      </td>
                      {/* Diagnosis 2 */}
                      <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        {detail.diagnosis2}
                      </td>
                      {/* Prescription 2 */}
                      <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        {detail.prescription2}
                      </td>
                      {/* Comments */}
                      <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                        {detail.comments}
                      </td>
                      {/* Edit button */}
                      <td className="pr-8 relative">
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
                      </td>
                    </tr>
                  ))
                )}
                {/* One row of data completed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default CustomTable;
