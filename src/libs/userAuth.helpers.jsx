import axios from 'axios';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import {
  setAccessToken,
  setEmail,
  setId,
  setRefreshToken,
  setState,
} from '../redux/userAuth';
import { authStates } from './utils';

export const ACCESS_EXPIRE_TIME = (1 / 2) * 3600 * 1000; // access token expires time 30 minutes
export const REFRESH_EXPIRE_TIME = 3600 * 1000; // refresh token expires time 30 minutes

export const useAuth = () => {
  const authInfo = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();
  const {
    mutate: authRequest,
    data: authResponse,
    error: authError,
    isLoading: authIsLoading,
    reset,
  } = useMutation(['authRequest'], ({ mode, payload }) => {
    let url = '/api/login'; // login url
    if (mode === 'refresh') {
      url = '/api/refresh'; // refresh url
      // axios.defaults.headers.common.Authorization = `Bearer ${payload}`;
      return axios.post(url, null, {
        headers: {
          Authorization: `Bearer ${payload}`,
        },
      });
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

  const isAuthorized = () => {
    return authInfo.state === authStates.AUTHORIZED;
  };

  const setAuthInfo = (state, info) => {
    dispatch(setId(info ? info.id : null));
    dispatch(setEmail(info ? info.email : null));
    dispatch(setAccessToken(info ? info.accessToken : null));
    dispatch(setRefreshToken(info ? info.refreshToken : null));

    dispatch(setState(state));
    if (state === authStates.AUTHORIZED) {
      // axios.defaults.headers.common.Authorization = `Bearer ${access}`;
      // const expireTime = new Date().getTime() + 2000;
      const expireTime = new Date().getTime() + REFRESH_EXPIRE_TIME;
      const refreshInfo = { token: info.refreshToken, expireTime };
      localStorage.setItem('refreshInfo', JSON.stringify(refreshInfo));
    } else {
      // delete axios.defaults.headers.common.Authorization;
      localStorage.removeItem('refreshInfo');
    }
  };

  // refresh token이 local storage에 저장되어 있으면 refresh 진행, expired 되어 있다면 expire로 상태 변경
  const refresh = () => {
    dispatch(setState(authStates.PENDING));
    const refreshInfo = JSON.parse(localStorage.getItem('refreshInfo'));
    if (refreshInfo) {
      if (refreshInfo.expireTime > new Date().getTime()) {
        reset();
        authRequest({ mode: 'refresh', payload: refreshInfo.token });
        // setTimeout(refresh, 3000);
        setTimeout(refresh, ACCESS_EXPIRE_TIME - 60000);
      } else {
        setAuthInfo(authStates.EXPIRED, null);
      }
    } else {
      setAuthInfo(authStates.UNAUTHORIZED, null);
    }
  };

  const login = (loginInfo) => {
    dispatch(setState(authStates.PENDING));
    authRequest({ mode: 'login', payload: loginInfo });
  };

  const { mutate: logout, isSuccess: logoutIsSuccess } = useMutation(
    (accessToken) =>
      axios.post('/api/logout', null, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
  );

  // handlers
  const handleAuthState = () => {
    switch (authInfo.state) {
      case authStates.INITIAL: // initial state일 때, refresh 진행
        refresh();
        break;
      case authStates.PENDING: // 상태 변화가 발생하는 중
        if (authResponse) {
          // 유저 인증이 제대로 완료됐을 때
          setAuthInfo(authStates.AUTHORIZED, authResponse.data);
        } else if (authError) {
          // console.log(authError.response.status);
          if (authError.response.status === 404) {
            // 유저 인증에 문제가 있을 때
            setAuthInfo(authStates.ERROR, null);
            // window.location.reload();
          } else if (authError.response.status === 401)
            setAuthInfo(authStates.INVALID, null);
          // 어떤 error 인지에 따라 다른 action을 취하도록 수정해야 함.
        } else if (!authIsLoading) {
          // 네트워크에 문제가 있을 때
          setAuthInfo(authStates.ERROR, null);
        }
        break;
      case authStates.EXPIRED: // 만료되었을 때, 현재는 아무 것도 하지 않음
        break;
      default:
    }
  };

  return {
    authInfo,
    authResponse,
    authError,
    changeState,
    isAuthorized,
    setAuthInfo,
    login,
    logout,
    logoutIsSuccess,
    refresh,
    handleAuthState,
  };
};