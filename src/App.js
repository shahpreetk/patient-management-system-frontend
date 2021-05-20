// @ts-check
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import * as ROUTES from "./constants/routes";
import PrivateRoute from "./components/PrivateRoute";
import AuthState from "./context/auth/AuthState";
import DetailState from "./context/detail/DetailState";
import setAuthToken from "./utils/setAuthToken";
import Navbar from "./components/Navbar/Navbar";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const AddDetail = lazy(() => import("./pages/AddDetail"));
const EditDetail = lazy(() => import("./pages/EditDetail"));
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));

axios.defaults.baseURL =
  "https://patient-management-backend.herokuapp.com/api/v1";
// axios.defaults.baseURL = "http://localhost:3001/api/v1";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

export default function App() {
  return (
    <AuthState>
      <DetailState>
        <Router>
          <Suspense
            fallback={
              <section>
                <div className="flex h-screen">
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
            }
          >
            <Navbar />
            <Switch>
              <Route path={ROUTES.LOGIN} component={Login} exact />
              <PrivateRoute
                path={ROUTES.DASHBOARD}
                component={Dashboard}
                exact
              />
              <PrivateRoute
                path={ROUTES.ADD_DATA}
                component={AddDetail}
                exact
              />
              <PrivateRoute
                path={ROUTES.EDIT_DATA}
                component={EditDetail}
                exact
              />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </Router>
      </DetailState>
    </AuthState>
  );
}
