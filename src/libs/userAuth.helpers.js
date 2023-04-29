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
  } = useMutation((mode, payload) => {
    let url = '/api/login'; // login url
    if (mode === 'refresh') url = '/api/refresh'; // refresh url
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

  const setAuthInfo = (mode, state, access, refresh) => {
    dispatch(setAccessToken(access));
    dispatch(setRefreshToken(refresh));
    dispatch(setState(state));
    console.log('authinfo');
    if (state === authStates.AUTHORIZED) {
      if (mode === 'login')
        axios.defaults.headers.common.Authorization = `Bearer ${authResponse.accessToken}`;
      else if (mode === 'refresh')
        axios.defaults.headers.common.Authorization = `Bearer ${authResponse.refreshToken}`;
      localStorage.setItem('refreshToken', authResponse.refreshToken);
    } else {
      delete axios.defaults.headers.common.Authorization;
      localStorage.removeItem('refreshToken');
    }
  };

  // 로그인 만료 전에 refresh
  const refresh = async () => {
    dispatch(setState(authStates.PENDING));
    const refreshToken = JSON.parse(localStorage.getItem('refreshToken'));
    if (refreshToken) {
      try {
        authRequest('refresh');
        setAuthInfo(
          authStates.AUTHORIZED,
          authResponse.accessToken,
          authResponse.refreshToken
        );
      } catch (error) {
        setAuthInfo(authStates.UNAUTHORIZED, null, null);
        localStorage.removeItem('refreshToken');
      }
    }
  };

  const login = (loginInfo) => {
    dispatch(setState(authStates.PENDING));
    // try {
    //   authRequest('login', loginInfo);
    //   console.log(authIsLoading);
    //   console.log(authResponse);

    //   if (authResponse === 'error') {
    //     setAuthInfo(authStates.ERROR, null, null);
    //   } else {
    //     setAuthInfo(
    //       authStates.AUTHORIZED,
    //       authResponse.data.accessToken,
    //       authResponse.data.refreshToken
    //     );

    //     setTimeout(refresh, EXPIRE_TIME - 60000);
    //   }
    // } catch (error) {
    //   setAuthInfo(authStates.UNAUTHORIZED, null, null);
    // }
    authRequest('login', loginInfo);
    // console.log(authIsLoading);

    // if (authResponse === 'error') {
    //   setAuthInfo(authStates.ERROR, null, null);
    // } else {
    //   setAuthInfo(
    //     authStates.AUTHORIZED,
    //     authResponse.data.accessToken,
    //     authResponse.data.refreshToken
    //   );

    //   setTimeout(refresh, EXPIRE_TIME - 60000);
    // }
  };

  // handlers
  const handleTimeOut = () => {
    if (isAuth) {
      if (checkTimeOut()) {
        refresh();
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
    handleTimeOut,
  };
};
