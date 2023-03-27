/* eslint-disable react/prop-types */
import React from 'react';

const LoginError = ({ error }) => {
  return <div>{error.message}</div>;
};

export default LoginError;
