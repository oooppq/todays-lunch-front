/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { useState } from 'react';
import { useMutation } from 'react-query';

export const useLoginHandler = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const loginInfo = JSON.stringify({ email, password });

  const {
    mutate,
    status: loginStatus,
    data: loginResponse,
    error: loginError,
  } = useMutation(() =>
    axios.post('', loginInfo, {
      headers: {
        'Content-Type': `application/json`,
      },
    })
  );

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    mutate();
    // try {
    //   mutate();
    // } catch (error) {}
  };

  return {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
    loginResponse,
    loginStatus,
    loginError,
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
