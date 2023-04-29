import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginBodyContainer } from './login.style';
import jmcIcon from '../../assets/img/user-jmc-icon.svg';
import { useLoginHandler } from './login.helpers';
import LoginError from './LoginError';
import { authStates } from '../../libs/utils';

const LoginBody = () => {
  const { handleEmailChange, handlePasswordChange, handleLogin, handleAuth } =
    useLoginHandler();
  const navigate = useNavigate();
  const authState = useSelector((state) => state.userAuth.state);
  useEffect(handleAuth);
  useEffect(() => {
    if (authState === authStates.AUTHORIZED) navigate(-1);
  });

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
          className="input"
          placeholder="email"
          onChange={handleEmailChange}
        />
        <div className="inputLabel">비밀번호</div>
        <input
          type="password"
          className="input"
          placeholder="password"
          onChange={handlePasswordChange}
        />
        {authState === authStates.ERROR ? <LoginError /> : null}
        <button className="loginBtn" type="button" onClick={handleLogin}>
          로그인
        </button>
      </div>
    </LoginBodyContainer>
  );
};

export default LoginBody;
