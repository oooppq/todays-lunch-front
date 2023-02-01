/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContainer, LoginTitle, LoginElem } from './login.style';

const Login = () => {
  const navigate = useNavigate();

  return (
    <LoginContainer>
      <LoginTitle className="bold">로그인</LoginTitle>
      <LoginElem>
        <form action="">
          <div>
            <input type="text" />
          </div>
          <div>
            <input type="password" />
          </div>
          <input type="submit" value="로그인" />
        </form>
        <a
          onClick={() => {
            navigate('/join');
          }}
        >
          빠르게 회원가입하고 다양한 혜택을 누리세요!
        </a>
      </LoginElem>
    </LoginContainer>
  );
};

export default Login;
