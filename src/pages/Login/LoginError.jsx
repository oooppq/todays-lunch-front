/* eslint-disable react/prop-types */
import React from 'react';
import { authStates } from '../../libs/utils';

const LoginError = ({ authState, isInputMissing }) => {
  if (isInputMissing)
    return (
      <div className="loginState loginError">
        아이디와 비밀번호를 입력해주세요.
      </div>
    );
  if (authState === authStates.INVALID)
    return (
      <div className="loginState loginError">
        아이디 비밀번호를 확인해주세요.
      </div>
    );
  if (authState === authStates.ERROR)
    return (
      <div className="loginState loginError">
        네트워크가 불안정합니다. 잠시 뒤에 시도해주세요.
      </div>
    );
  return <div className="loginState beforeLogin" />;
  // return <div className="loginError">아이디 비밀번호를 확인해주세요.</div>;
};

export default LoginError;
