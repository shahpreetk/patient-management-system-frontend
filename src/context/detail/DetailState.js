// @ts-check
import React, { useReducer } from "react";
import axios from "axios";
import DetailContext from "./detailContext";
import detailReducer from "./detailReducer";
import {
  CREATE_DETAIL,
  GET_DETAILS,
  GET_ONE_DETAIL,
  UPDATE_DETAIL,
  DELETE_DETAIL,
  SETCURRENT_DETAIL,
  CLEARCURRENT_DETAIL,
  ERROR_DETAIL,
  CLEAR_DETAILS,
  CLEAR_ERRORS,
  FILTER_DETAILS,
  CLEAR_FILTER,
} from "../types";

// @ts-ignore
const DetailState = (props) => {
  const initialState = {
    loading: true,
    details: null,
    detail: null,
    error: null,
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(detailReducer, initialState);

  const getDetails = async () => {
    try {
      const res = await axios.get("/details");
      // @ts-ignore
      dispatch({ type: GET_DETAILS, payload: res.data });
    } catch (err) {
      // @ts-ignore
      dispatch({ type: ERROR_DETAIL, payload: err.response.data.msg });
    }
  };

  const getOneDetail = async (id) => {
    try {
      const res = await axios.get(`/details/${id}`);
      // @ts-ignore
      dispatch({ type: GET_ONE_DETAIL, payload: res.data });
    } catch (err) {
      // @ts-ignore
      dispatch({ type: ERROR_DETAIL, payload: err.response.data.msg });
    }
  };

  const createDetail = async (detail) => {
    const config = { headers: { "Content-Type": "application/json" } };
    try {
      const res = await axios.post("/details", detail, config);
      // @ts-ignore
      dispatch({ type: CREATE_DETAIL, payload: res.data });
    } catch (err) {
      // @ts-ignore
      dispatch({ type: ERROR_DETAIL, payload: err.response.data.msg });
    }
  };

  const deleteDetail = async (id) => {
    try {
      await axios.delete(`/details/${id}`);
      // @ts-ignore
      dispatch({ type: DELETE_DETAIL, payload: id });
    } catch (err) {
      // @ts-ignore
      dispatch({ type: ERROR_DETAIL, payload: err.response.data.msg });
    }
  };

  const updateDetail = async (detail) => {
    const config = { headers: { "Content-Type": "application/json" } };
    try {
      const res = await axios.patch(`/details/${detail._id}`, detail, config);
      // @ts-ignore
      dispatch({ type: UPDATE_DETAIL, payload: res.data });
    } catch (err) {
      // @ts-ignore
      dispatch({ type: ERROR_DETAIL, payload: err.response.data.msg });
    }
  };

  const clearDetails = () => {
    // @ts-ignore
    dispatch({ type: CLEAR_DETAILS });
  };

  const setCurrent = (detail) => {
    // @ts-ignore
    dispatch({ type: SETCURRENT_DETAIL, payload: detail });
  };

  const clearCurrent = () => {
    // @ts-ignore
    dispatch({ type: CLEARCURRENT_DETAIL });
  };

  const clearErrors = () => {
    // @ts-ignore
    dispatch({ type: CLEAR_ERRORS });
  };

  const filterDetails = (text) => {
    // @ts-ignore
    dispatch({ type: FILTER_DETAILS, payload: text });
  };

  const clearFilter = () => {
    // @ts-ignore
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <DetailContext.Provider
      value={{
        loading: state.loading,
        details: state.details,
        detail: state.detail,
        error: state.error,
        current: state.current,
        getDetails,
        getOneDetail,
        createDetail,
        deleteDetail,
        setCurrent,
        clearCurrent,
        updateDetail,
        clearErrors,
        clearDetails,
        filterDetails,
        clearFilter,
      }}
    >
      {props.children}
    </DetailContext.Provider>
  );
};

export default DetailState;
