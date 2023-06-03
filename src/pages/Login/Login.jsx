/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import UserPageHeader from '../../components/UserPageHeader';
import FindPasswordModal from './FindPasswordModal';
import { useFindPasswordModal } from './login.helpers';
import { LoginContainer } from './login.style';
import LoginBody from './LoginBody';
import LoginBottom from './LoginBottom';
import { authStates } from '../../libs/utils';

const Login = ({ login, refresh }) => {
  const { state: url } = useLocation();

  const { isFindPassword, openFindPassword, closeFindPassword } =
    useFindPasswordModal();
  const authState = useSelector((state) => state.userAuth.state);
  if (authState === authStates.AUTHORIZED)
    return <Navigate to={url || -1} replace />;
  if (authState === authStates.PENDING) return null;
  return (
    <LoginContainer>
      {isFindPassword ? (
        <FindPasswordModal closeFindPassword={closeFindPassword} />
      ) : null}
      <UserPageHeader />
      <LoginBody authState={authState} login={login} refresh={refresh} />
      <LoginBottom openFindPassword={openFindPassword} />
    </LoginContainer>
  );
};

export default Login;
