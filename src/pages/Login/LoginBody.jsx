import React from 'react';
import { LoginBodyContainer } from './login.style';
import jmcIcon from '../../assets/img/user-jmc-icon.svg';

const LoginBody = () => {
  return (
    <LoginBodyContainer>
      <div className="loginLogoAndTitle">
        <img src={jmcIcon} alt="" className="loginLogo" />
        <div className="loginTitle">로그인</div>
      </div>
      <div className="loginInputContainer">
        <div className="inputLabel">이메일</div>
        <input type="text" className="input" placeholder="email" />
        <div className="inputLabel">비밀번호</div>
        <input type="password" className="input" placeholder="password" />
        <button className="loginBtn" type="button">
          로그인
        </button>
      </div>
    </LoginBodyContainer>
  );
};

export default LoginBody;
