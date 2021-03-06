// @ts-check
import React, { useEffect, useContext } from "react";
import SearchComponent from "../components/SearchComponent";
import CustomTable from "../components/CustomTable/customtable";
import AuthContext from "../context/auth/authContext";
import DetailContext from "../context/detail/detailContext";

export default function Dashboard() {
  const authContext = useContext(AuthContext);
  const detailContext = useContext(DetailContext);
  const { details, getDetails, loading } = detailContext;

  useEffect(() => {
    document.title = "Patient Management System";
    document.head.lang = "en";
    authContext.loadUser();
    getDetails();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="bg-gray-100 h-full min-h-screen">
        {loading ? (
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
        ) : (
          <>
            <div className="px-10 pt-5 pb-0">
              <SearchComponent />
            </div>
            <CustomTable details={details} loading={loading} />
          </>
        )}
      </div>
    </>
  );
}
