/* eslint-disable react/prop-types */
import React from 'react';
import { WarningMessageContainer } from './changePassword.style';

const WarningMessage = ({ state }) => {
  let message = ' ';
  if (state === 'different') message = '⚠️ 새 비밀번호 확인을 다시해주세요.';
  return <WarningMessageContainer>{message}</WarningMessageContainer>;
};

export default WarningMessage;
