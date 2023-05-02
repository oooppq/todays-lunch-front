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
    isLoading: authIsLoading,
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
      const expireTime = new Date().getTime() + 2000;
      //   const expireTime = new Date().getTime() + EXPIRE_TIME;
      const refreshInfo = { token: refresh, expireTime };
      localStorage.setItem('refreshInfo', JSON.stringify(refreshInfo));
    } else {
      delete axios.defaults.headers.common.Authorization;
      localStorage.removeItem('refreshInfo');
    }
  };

  // refresh token이 local storage에 저장되어 있으면 refresh 진행, expired 되어 있다면 expire로 상태 변경
  const refresh = () => {
    dispatch(setState(authStates.PENDING));
    const refreshInfo = JSON.parse(localStorage.getItem('refreshInfo'));
    if (refreshInfo) {
      if (refreshInfo.expireTime > new Date().getTime()) {
        authRequest({ mode: 'refresh', payload: refreshInfo.token });
        setTimeout(refresh, 3000);
        //   setTimeout(refresh, EXPIRE_TIME - 60000);
      } else {
        setAuthInfo(authStates.EXPIRED, null, null);
      }
    } else {
      setAuthInfo(authStates.UNAUTHORIZED, null, null);
    }
  };

  const login = (loginInfo) => {
    dispatch(setState(authStates.PENDING));
    authRequest({ mode: 'login', payload: loginInfo });
  };

  // handlers
  const handleRefresh = () => {
    dispatch(setState(authStates.PENDING));
  };

  const handleAuthState = () => {
    switch (userState) {
      case authStates.UNAUTHORIZED: // initial state일 때, refresh 진행
        refresh();
        break;
      case authStates.PENDING: // 상태 변화가 발생하는 중
        if (authResponse) {
          // 유저 인증이 제대로 완료됐을 때
          setAuthInfo(
            authStates.AUTHORIZED,
            authResponse.data.accessToken,
            authResponse.data.refreshToken
          );
        } else if (authError) {
          // 유저 인증에 문제가 있을 때
          setAuthInfo(authStates.ERROR, null, null);
          // 어떤 error 인지에 따라 다른 action을 취하도록 수정해야 함.
        } else if (!authIsLoading) {
          // 네트워크에 문제가 있을 때
          setAuthInfo(authStates.UNAUTHORIZED, null, null);
        }
        break;
      case authStates.EXPIRED: // 만료되었을 때, 현재는 아무 것도 하지 않음
        break;
      default:
    }
  };

  return {
    authResponse,
    authError,
    changeState,
    isAuth,
    setAuthInfo,
    login,
    refresh,
    handleAuthState,
  };
};
