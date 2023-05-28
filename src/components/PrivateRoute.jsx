/* eslint-disable react/prop-types */
// import React, { useEffect } from 'react';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../libs/userAuth.helpers';
import { authStates } from '../libs/utils';

const PrivateRoute = ({ redirectPath = '/login', children }) => {
  const userState = useSelector((state) => state.userAuth.state);
  const refreshInfo = JSON.parse(localStorage.getItem('refreshInfo'));
  const { setAuthInfo } = useAuth();

  useEffect(() => {
    if (
      userState !== authStates.AUTHORIZED ||
      !refreshInfo ||
      refreshInfo.expireTime < new Date().getTime()
    )
      setAuthInfo(authStates.EXPIRED, null, null);
  }, [userState, refreshInfo, setAuthInfo]);

  if (userState === authStates.INITIAL || userState === authStates.PENDING)
    return null;
  if (userState !== authStates.AUTHORIZED) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default PrivateRoute;
