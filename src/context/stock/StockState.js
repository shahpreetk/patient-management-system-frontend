// @ts-check
import React, { useReducer } from "react";
import axios from "axios";
import StockContext from "./stockContext";
import stockReducer from "./stockReducer";
import {
  CREATE_STOCK,
  GET_STOCKS,
  CLEAR_STOCKS,
  UPDATE_STOCK,
  DELETE_STOCK,
  SETCURRENT_STOCK,
  CLEARCURRENT_STOCK,
  CLEAR_ERRORS,
  ERROR_STOCK,
  FILTER_STOCKS,
  CLEAR_FILTER,
} from "../types";

// @ts-ignore
const StockState = (props) => {
  const initialState = {
    loading: true,
    stocks: null,
    error: null,
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(stockReducer, initialState);

  const getStocks = async () => {
    try {
      const res = await axios.get("/stocks");
      // @ts-ignore
      dispatch({ type: GET_STOCKS, payload: res.data });
    } catch (err) {
      // @ts-ignore
      dispatch({ type: ERROR_STOCK, payload: err.response.data.msg });
    }
  };

  const createStock = async (stock) => {
    const config = { headers: { "Content-Type": "application/json" } };
    try {
      const res = await axios.post("/stocks", stock, config);
      // @ts-ignore
      dispatch({ type: CREATE_STOCK, payload: res.data });
    } catch (err) {
      // @ts-ignore
      dispatch({ type: ERROR_STOCK, payload: err.response.data.msg });
    }
  };

  const deleteStock = async (id) => {
    try {
      await axios.delete(`/stocks/${id}`);
      // @ts-ignore
      dispatch({ type: DELETE_STOCK, payload: id });
    } catch (err) {
      // @ts-ignore
      dispatch({ type: ERROR_STOCK, payload: err.response.data.msg });
    }
  };

  const updateStock = async (stock) => {
    const config = { headers: { "Content-Type": "application/json" } };
    try {
      const res = await axios.patch(`/stocks/${stock._id}`, stock, config);
      // @ts-ignore
      dispatch({ type: UPDATE_STOCK, payload: res.data });
    } catch (err) {
      // @ts-ignore
      dispatch({ type: ERROR_STOCK, payload: err.response.data.msg });
    }
  };

  const clearStocks = () => {
    // @ts-ignore
    dispatch({ type: CLEAR_STOCKS });
  };

  const setCurrent = (stock) => {
    // @ts-ignore
    dispatch({ type: SETCURRENT_STOCK, payload: stock });
  };

  const clearCurrent = () => {
    // @ts-ignore
    dispatch({ type: CLEARCURRENT_STOCK });
  };

  const clearErrors = () => {
    // @ts-ignore
    dispatch({ type: CLEAR_ERRORS });
  };

  const filterStocks = (text) => {
    // @ts-ignore
    dispatch({ type: FILTER_STOCKS, payload: text });
  };

  const clearFilter = () => {
    // @ts-ignore
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <StockContext.Provider
      value={{
        loading: state.loading,
        stocks: state.stocks,
        error: state.error,
        current: state.current,
        getStocks,
        createStock,
        deleteStock,
        setCurrent,
        clearCurrent,
        updateStock,
        clearErrors,
        clearStocks,
        filterStocks,
        clearFilter,
      }}
    >
      {props.children}
    </StockContext.Provider>
  );
};

export default StockState;
