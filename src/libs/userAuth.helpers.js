/* eslint-disable no-continue */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { setAccessToken, setRefreshToken, setState } from '../redux/userAuth';
import { authStates } from './utils';

const EXPIRE_TIME = (1 / 2) * 3600 * 1000; // expire time 30 minutes

export const useAuth = () => {
  const userState = useSelector((state) => state.userAuth.state);
  const dispatch = useDispatch();
  const {
    mutate: authRequest,
    data: authResponse,
    error: authError,
  } = useMutation(({ mode, payload }) => {
    let url = '/api/login'; // login url
    if (mode === 'refresh') {
      url = '/api/refresh'; // refresh url

      axios.defaults.headers.common.Authorization = `Bearer ${payload}`;
      return axios.post(url);
    }
    return axios.post(url, payload, {
      headers: {
        'Content-Type': `application/json`,
      },
    });
  });

  const checkTimeOut = () => {
    return userState.expireTime > new Date();
  };

  const changeState = (state) => {
    dispatch(setState(state));
  };

  const isAuth = () => {
    return userState.state === authStates.AUTHORIZED;
  };

  const setAuthInfo = (state, access, refresh) => {
    dispatch(setAccessToken(access));
    dispatch(setRefreshToken(refresh));
    dispatch(setState(state));
    if (state === authStates.AUTHORIZED) {
      axios.defaults.headers.common.Authorization = `Bearer ${access}`;
      localStorage.setItem('refreshToken', refresh);
    } else {
      delete axios.defaults.headers.common.Authorization;
      localStorage.removeItem('refreshToken');
    }
  };

  const refresh = () => {
    dispatch(setState(authStates.PENDING));
    const refreshToken = JSON.parse(localStorage.getItem('refreshToken'));
    if (refreshToken) {
      authRequest({ mode: 'refresh', payload: refreshToken });
    } else {
      setAuthInfo(authStates.EXPIRED, null, null);
    }
  };

  const login = (loginInfo) => {
    dispatch(setState(authStates.PENDING));
    authRequest({ mode: 'login', payload: loginInfo });
  };

  // handlers
  const handleAuthState = () => {
    if (userState !== authStates.AUTHORIZED && authResponse) {
      setAuthInfo(
        authStates.AUTHORIZED,
        authResponse.data.accessToken,
        authResponse.data.refreshToken
      );
    } else if (authError) {
      setAuthInfo(authStates.ERROR, null, null);
      // 어떤 error 인지에 따라 다른 action을 취하도록 수정해야 함.
    }
  };

  const handleTimeOut = () => {
    if (isAuth) {
      if (checkTimeOut()) {
        // authRequest('refresh', local);
      }
    }
  };

  return {
    checkTimeOut,
    authResponse,
    authError,
    changeState,
    isAuth,
    setAuthInfo,
    login,
    refresh,
    handleAuthState,
    handleTimeOut,
  };
};
