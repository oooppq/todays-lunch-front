/* eslint-disable react/prop-types */
import React from 'react';
import { LoginBodyContainer } from './login.style';
import jmcIcon from '../../assets/img/user-jmc-icon.svg';
import { useLoginHandler } from './login.helpers';
import LoginError from './LoginError';

const LoginBody = ({ authState, login, refresh }) => {
  const {
    isInputMissing,
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
  } = useLoginHandler(login, refresh);

  return (
    <LoginBodyContainer>
      <div className="loginLogoAndTitle">
        <img src={jmcIcon} alt="" className="loginLogo" />
        <div className="loginTitle">로그인</div>
      </div>
      <div className="loginInputContainer">
        <div className="inputLabel">이메일</div>
        <input
          type="text"
          className="input emailInput"
          placeholder="email"
          onChange={handleEmailChange}
        />
        <div className="inputLabel">비밀번호</div>
        <input
          type="password"
          className="input passwordInput"
          placeholder="password"
          onChange={handlePasswordChange}
        />
        <LoginError authState={authState} isInputMissing={isInputMissing} />
        <button className="loginBtn" type="button" onClick={handleLogin}>
          로그인
        </button>
      </div>
    </LoginBodyContainer>
  );
};

export default LoginBody;
