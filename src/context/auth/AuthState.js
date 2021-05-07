// @ts-check
import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import setAuthToken from "../../utils/setAuthToken";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CLEAR_ERRORS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  USER_LOADED,
  AUTH_ERROR,
} from "../types";

// @ts-ignore
const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    loading: true,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get("/users/me");
      // @ts-ignore
      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (err) {
      // @ts-ignore
      dispatch({ type: AUTH_ERROR });
    }
  };

  const register = async (formData) => {
    const config = { headers: { "Content-Type": "application/json" } };
    try {
      const res = await axios.post("/users/register", formData, config);
      // @ts-ignore
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      loadUser();
    } catch (err) {
      // @ts-ignore
      dispatch({ type: REGISTER_FAIL, payload: err.response.data.msg });
    }
  };

  const login = async (formData) => {
    const config = { headers: { "Content-Type": "application/json" } };
    try {
      const res = await axios.post("/users/login", formData, config);
      // @ts-ignore
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      loadUser();
    } catch (err) {
      // @ts-ignore
      dispatch({ type: LOGIN_FAIL, payload: err.response.data.msg });
    }
  };

  const logout = () => {
    // @ts-ignore
    dispatch({ type: LOGOUT });
  };

  const clearErrors = () => {
    // @ts-ignore
    dispatch({ type: CLEAR_ERRORS });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        login,
        loadUser,
        logout,
        clearErrors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
