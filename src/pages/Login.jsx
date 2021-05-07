// @ts-check
import React, { useState, useEffect, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/auth/authContext";

export default function Login() {
  const authContext = useContext(AuthContext);
  const { login, error, clearErrors, isAuthenticated } = authContext;
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  let form = useRef(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const form_data = new FormData(form.current);
    let payload = {};
    form_data.forEach(function (value, key) {
      payload[key] = value;
    });
    // console.log("payload", payload);
    // Place your API call here to submit your payload.
    await login(payload);
    setIsLoading(false);
  };

  useEffect(() => {
    document.title = "Login | InventoStocks";
    if (isAuthenticated) {
      history.push("/");
    }
    if (error) {
      console.log(error);
      clearErrors();
    }
  }, [clearErrors, error, history, isAuthenticated]);

  return (
    <>
      <div>
        <div>
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="container my-9 mx-auto bg-white shadow rounded"
          >
            <div>
              <div className="xl:w-full bg-gray-50 border-b border-gray-300 dark:border-gray-700 py-5">
                <div className="flex items-center w-11/12 mx-auto">
                  <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">
                    Login to InventoStocks
                  </p>
                </div>
              </div>
              <div className="w-11/12 mx-auto">
                <div className="container mx-auto">
                  <div className="my-8 mx-auto xl:w-full xl:mx-0">
                    {/* Email */}
                    <div className="xl:flex lg:flex md:flex flex-wrap justify-between">
                      <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                        <label
                          htmlFor="email"
                          className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                        >
                          Email
                        </label>
                        <div className="relative">
                          <div className="absolute text-gray-600 dark:text-gray-400 flex items-center px-4 border-r h-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-mail"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <rect x={3} y={5} width={18} height={14} rx={2} />
                              <polyline points="3 7 12 13 21 7" />
                            </svg>
                          </div>
                          <input
                            id="email"
                            name="email"
                            required={true}
                            className="w-full bg-transparent text-gray-800 dark:text-gray-100 focus:outline-none focus:border focus:border-indigo-700 font-normal py-3 flex items-center pl-16 text-sm rounded border shadow"
                            placeholder="testinventostocks@email.com"
                          />
                        </div>
                      </div>
                    </div>
                    {/* Email end */}
                    {/* Password */}
                    <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                      <label
                        htmlFor="password"
                        className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                      >
                        Password
                      </label>
                      <div className="relative">
                        <div className="absolute text-gray-600 dark:text-gray-400 flex items-center px-4 border-r h-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-lock"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                        </div>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          required={true}
                          className="w-full bg-transparent text-gray-800 dark:text-gray-100 focus:outline-none focus:border focus:border-indigo-700 font-normal py-3 flex items-center pl-16 text-sm rounded border shadow"
                          placeholder="12345678"
                        />
                      </div>
                    </div>
                    {/* Password end */}
                  </div>
                </div>
              </div>
              <div className="w-full py-4 sm:px-12 px-4 bg-gray-100 dark:bg-gray-700 mt-6 flex justify-end rounded-bl rounded-br">
                {/* Cancel Button */}

                {/* <button
                  className="btn text-sm focus:outline-none text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-500 py-2 px-6 mr-4 rounded hover:bg-gray-200 transition duration-150 ease-in-out"
                  type="button"
                >
                  Cancel
                </button> */}

                {/* Login Button */}
                <button
                  className="bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm focus:outline-none"
                  type="submit"
                >
                  {isLoading ? "Processing..." : "Login"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
