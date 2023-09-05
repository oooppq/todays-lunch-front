import { useEffect, useRef, useState } from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';
import { ACCESS_EXPIRE_TIME } from '../../libs/userAuth.helpers';

const SERVER_URL = import.meta.env.VITE_API_BASE_URL;

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

export const useFindPassword = () => {
  const EMAIL_REG = /\S+@\S+\.\S+/;

  const states = {
    IDLE: 'idle',
    WRONG: 'wrong',
    INVALID: 'invalid',
    SUCCESS: 'success',
  };

  const [email, setEmail] = useState('');
  const [findPwState, setFindPwState] = useState(states.IDLE);
  const emailRef = useRef();
  const {
    mutate: findPasswordRequest,
    // data: isExist,
    status,
  } = useMutation(['post', 'find-password'], (_email) =>
    axios.post(`${SERVER_URL}/find-pw?email=${_email}`).then((res) => res.data)
  );

  const findPasswordOnClick = (_email) => {
    if (EMAIL_REG.test(_email)) {
      setEmail(_email);
      findPasswordRequest(_email);
    } else {
      setFindPwState(states.INVALID);
    }
  };

  useEffect(() => {
    if (status === 'success') {
      setFindPwState(states.SUCCESS);
    } else if (status === 'error') setFindPwState(states.WRONG);
  }, [status, states.SUCCESS, states.WRONG]);

  return { emailRef, states, findPwState, email, findPasswordOnClick };
};

export const useLoginNavigate = (navigate) => {
  const goToJoinPage = () => {
    navigate('/join');
  };

  return { goToJoinPage };
};
