// @ts-check
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import * as ROUTES from "./constants/routes";
import PrivateRoute from "./components/PrivateRoute";
import AuthState from "./context/auth/AuthState";
import StockState from "./context/stock/StockState";
import setAuthToken from "./utils/setAuthToken";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const AddShare = lazy(() => import("./pages/AddShare"));
const EditShare = lazy(() => import("./pages/EditShare"));
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));

axios.defaults.baseURL = "https://inventostocks-backend.herokuapp.com/api/v1";
// axios.defaults.baseURL = "http://localhost:3001/api/v1";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

export default function App() {
  return (
    <AuthState>
      <StockState>
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
            <Switch>
              <Route path={ROUTES.LOGIN} component={Login} exact />
              <PrivateRoute
                path={ROUTES.DASHBOARD}
                component={Dashboard}
                exact
              />
              <PrivateRoute path={ROUTES.ADDSHARE} component={AddShare} exact />
              <PrivateRoute
                path={ROUTES.EDITSHARE}
                component={EditShare}
                exact
              />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </Router>
      </StockState>
    </AuthState>
  );
}
