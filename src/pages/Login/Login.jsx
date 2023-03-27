import React from 'react';
import { LoginContainer } from './login.style';
import LoginBody from './LoginBody';
import LoginBottom from './LoginBottom';

const Login = () => {
  return (
    <LoginContainer>
      <LoginBody />
      <LoginBottom />
    </LoginContainer>
  );
};

export default Login;
