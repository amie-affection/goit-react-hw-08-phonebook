import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...allProps }) => {
  const token = useSelector((state) => state.authRoot.token);

  return (
    <Route
      render={() => (token ? <Component {...allProps} /> : <Redirect to="/" />)}
    />
  );
};

export default PrivateRoute;
