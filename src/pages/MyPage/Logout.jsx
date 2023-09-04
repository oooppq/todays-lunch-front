import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../libs/userAuth.helpers';
import { authStates } from '../../libs/utils';

const Logout = () => {
  const { setAuthInfo } = useAuth();

  useEffect(() => {
    setAuthInfo(authStates.UNAUTHORIZED, null);
  });

  return <Navigate to="/" replace />;
};

export default Logout;
