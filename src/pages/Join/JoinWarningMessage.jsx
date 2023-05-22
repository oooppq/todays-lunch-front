/* eslint-disable react/prop-types */
import React from 'react';

const JoinWarningMessage = ({ flag, message }) => {
  return <div className="warning">{flag ? message : ' '}</div>;
};

export default JoinWarningMessage;
