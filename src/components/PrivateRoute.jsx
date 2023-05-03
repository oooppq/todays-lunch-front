/* eslint-disable react/prop-types */
// import React, { useEffect } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authStates } from '../libs/utils';

const PrivateRoute = ({ redirectPath = '/login', children }) => {
  const userState = useSelector((state) => state.userAuth.state);
  if (userState === authStates.INITIAL || userState === authStates.PENDING)
    return null;
  if (userState !== authStates.AUTHORIZED)
    return <Navigate to={redirectPath} replace />;

  return children;
};

export default PrivateRoute;
