// @ts-check
import React, { useEffect, useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import CustomTable from "../components/CustomTable/customtable";
import AuthContext from "../context/auth/authContext";
import StockContext from "../context/stock/stockContext";

export default function Dashboard() {
  const authContext = useContext(AuthContext);
  const stockContext = useContext(StockContext);
  const { stocks, getStocks, loading } = stockContext;

  useEffect(() => {
    document.title = "InventoStocks";
    authContext.loadUser();
    getStocks();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="bg-gray-100 h-full min-h-screen">
        <div className="bg-gray-100">
          <Navbar />
        </div>
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
          <CustomTable stocks={stocks} loading={loading} />
        )}
      </div>
    </>
  );
}
