/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginNavigate } from './login.helpers';
import { LoginBottomContainer } from './login.style';

const LoginBottom = ({ openFindPassword }) => {
  const { goToJoinPage } = useLoginNavigate(useNavigate());
  return (
    <LoginBottomContainer>
      <button className="joinBtn" type="button" onClick={goToJoinPage}>
        회원가입
      </button>
      <button
        type="button"
        className="findPasswordBtn"
        onClick={() => openFindPassword()}
      >
        비밀번호 찾기
      </button>
    </LoginBottomContainer>
  );
};

export default LoginBottom;
