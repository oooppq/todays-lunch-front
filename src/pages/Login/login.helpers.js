/* eslint-disable import/prefer-default-export */
import { useState } from 'react';
import { useAuth } from '../../libs/userAuth.helpers';
import { authStates } from '../../libs/utils';

const EXPIRE_TIME = (1 / 2) * 3600 * 1000; // expire time 30 minutes

export const useLoginHandler = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const loginInfo = JSON.stringify({ email, password });
  // const userState = useSelector((state) => state.userAuth.state);

  const { login, refresh, setAuthInfo, authResponse, authError } = useAuth();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    login(loginInfo);

    setTimeout(refresh, EXPIRE_TIME - 60000);
  };

  const handleAuth = () => {
    if (authResponse) {
      setAuthInfo(
        'login',
        authStates.AUTHORIZED,
        authResponse.data.accessToken,
        authResponse.data.refreshToken
      );
    }
    if (authError) {
      setAuthInfo('error', authStates.ERROR, null, null);
    }
  };

  return {
    email,
    password,
    authResponse,
    handleEmailChange,
    handlePasswordChange,
    handleAuth,
    handleLogin,
  };
};

export const useFindPasswordModal = () => {
  const [isFindPassword, setIsFindPassword] = useState(false);

  const openFindPassword = () => {
    setIsFindPassword(true);
  };

  const closeFindPassword = () => {
    setIsFindPassword(false);
  };

  return {
    isFindPassword,
    openFindPassword,
    closeFindPassword,
  };
};

export const useLoginNavigate = (navigate) => {
  const goToJoinPage = () => {
    navigate('/join');
  };

  return { goToJoinPage };
};
