import React from 'react';
import { LoginBottomContainer } from './login.style';

const LoginBottom = () => {
  return (
    <LoginBottomContainer>
      <button className="joinBtn" type="button">
        회원가입
      </button>
      <button type="button" className="findPasswordBtn">
        비번 찾기
      </button>
    </LoginBottomContainer>
  );
};

export default LoginBottom;
