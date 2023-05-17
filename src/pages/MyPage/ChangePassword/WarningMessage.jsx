/* eslint-disable react/prop-types */
import React from 'react';
import { WarningMessageContainer } from './changePassword.style';

const WarningMessage = ({ states, passwordChangeState }) => {
  let message = ' ';
  switch (passwordChangeState) {
    case states.MISSING_INPUT: {
      message = '⚠️ 모든 항목을 입력해주세요.';
      break;
    }
    case states.INVALID_PASSWORD: {
      message = '⚠️ 새 비밀번호를 다시 확인해주세요.';
      break;
    }
    case states.DIFFERENT_PASSWORD: {
      message = '⚠️ 새 비밀번호와 비밀번호 확인이 일치하지 않습니다.';
      break;
    }
    case states.WRONG_CURRENT_PASSWORD: {
      message = '⚠️ 현재 사용중인 비밀번호를 다시 확인해주세요.';
      break;
    }
    default:
  }

  return <WarningMessageContainer>{message}</WarningMessageContainer>;
};

export default WarningMessage;
