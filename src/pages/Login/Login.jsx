/* eslint-disable react/prop-types */
import React from 'react';
import UserPageHeader from '../../components/UserPageHeader';
import FindPasswordModal from './FindPasswordModal';
import { useFindPasswordModal } from './login.helpers';
import { LoginContainer } from './login.style';
import LoginBody from './LoginBody';
import LoginBottom from './LoginBottom';

const Login = ({ login, refresh }) => {
  const { isFindPassword, openFindPassword, closeFindPassword } =
    useFindPasswordModal();

  return (
    <LoginContainer>
      {isFindPassword ? (
        <FindPasswordModal closeFindPassword={closeFindPassword} />
      ) : null}
      <UserPageHeader />
      <LoginBody login={login} refresh={refresh} />
      <LoginBottom openFindPassword={openFindPassword} />
    </LoginContainer>
  );
};

export default Login;
