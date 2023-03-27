import React from 'react';
import UserPageHeader from '../../components/UserPageHeader';
import FindPasswordModal from './FindPasswordModal';
import { useFindPasswordModal } from './login.helpers';
import { LoginContainer } from './login.style';
import LoginBody from './LoginBody';
import LoginBottom from './LoginBottom';

const Login = () => {
  const { isFindPassword, openFindPassword, closeFindPassword } =
    useFindPasswordModal();

  return (
    <LoginContainer>
      {isFindPassword ? (
        <FindPasswordModal closeFindPassword={closeFindPassword} />
      ) : null}
      <UserPageHeader />
      <LoginBody />
      <LoginBottom openFindPassword={openFindPassword} />
    </LoginContainer>
  );
};

export default Login;
