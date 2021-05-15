// @ts-check
import React, { useContext } from "react";
import AuthContext from "../../context/auth/authContext";
import DetailContext from "../../context/detail/detailContext";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const detailContext = useContext(DetailContext);
  const { logout } = authContext;
  const { clearDetails } = detailContext;

  return (
    <>
      <header className="text-gray-600 bg-green-400 body-font">
        <div className="container bg-green-400 mx-auto flex flex-wrap pt-5 pb-5 flex-col md:flex-row items-center">
          <a
            href="/"
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl">Patient Management System</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4	flex flex-wrap items-center text-base justify-center"></nav>
          <button
            className="inline-flex items-center text-white bg-green-700 border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base mt-4 md:mt-0"
            onClick={() => {
              logout();
              clearDetails();
              window.location.reload();
            }}
          >
            Logout
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
