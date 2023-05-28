/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { ACCESS_EXPIRE_TIME } from '../../libs/userAuth.helpers';

export const useLoginHandler = (login, refresh) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isInputMissing, setIsInputMissing] = useState(false);

  const loginInfo = JSON.stringify({ email, password });

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setIsInputMissing(true);
      return;
    }
    setIsInputMissing(false);
    login(loginInfo);

    setTimeout(refresh, ACCESS_EXPIRE_TIME - 60000);
    // setTimeout(refresh, 3000);
  };

  return {
    email,
    password,
    isInputMissing,
    handleEmailChange,
    handlePasswordChange,
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
