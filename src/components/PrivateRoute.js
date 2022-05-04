import React from "react";
import { Navigate, Route } from "react-router-dom";

const PrivateRoute = (props) => {
  const loggedInUser = props.loggedInUser;
  const mustBeAgent = props.mustBeAgent;
  const element = props.element;
  const loading = props.loading;
  if (loading) {
    return <div>Loading...</div>;
  }
  if (
    (loggedInUser?.isAgent && mustBeAgent) ||
    (loggedInUser && !mustBeAgent)
  ) {
    return element;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
