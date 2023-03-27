import React, { useEffect } from 'react';
import { LoginBodyContainer } from './login.style';
import jmcIcon from '../../assets/img/user-jmc-icon.svg';
import { useLoginHandler } from './login.helpers';
import LoginError from './LoginError';

const LoginBody = () => {
  const {
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
    loginResponse,
    loginStatus,
    loginError,
  } = useLoginHandler();
  useEffect(() => {
    if (loginResponse && loginResponse.token) {
      localStorage.setItem('jwt', loginResponse.token);
    }
  }, [loginResponse]);
  if (loginStatus === 'loading') return null;
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
        {loginError ? <LoginError error={loginError} /> : null}
        <button className="loginBtn" type="button" onClick={handleLogin}>
          로그인
        </button>
      </div>
    </LoginBodyContainer>
  );
};

export default LoginBody;
