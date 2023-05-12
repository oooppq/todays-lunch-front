import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useMyPage } from './myPage.helpers';

const Logout = () => {
  const { handleLogout } = useMyPage();
  handleLogout();
  useEffect(handleLogout);

  return <Navigate to="/" replace />;
};

export default Logout;
