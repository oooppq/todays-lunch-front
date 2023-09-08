import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import {
  setAccessToken,
  setEmail,
  setId,
  setRefreshToken,
  setState,
  setTemporary,
  reset,
} from '../redux/userAuth';
import { authStates } from './utils';

const SERVER_URL = import.meta.env.VITE_API_BASE_URL;

export const ACCESS_EXPIRE_TIME = (1 / 2) * 3600 * 1000; // access token expires time 30 minutes
// export const REFRESH_EXPIRE_TIME = 3600 * 1000; // refresh token expires time 30 minutes

export const useAuth = () => {
  const navigate = useNavigate();
  const authInfo = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();
  // const queryClient = useQueryClient();
  const {
    mutate: authRequest,
    data: authResponse,
    error: authError,
    isLoading: authIsLoading,
    reset: authReset,
  } = useMutation(['authRequest'], ({ mode, payload }) => {
    let url = `${SERVER_URL}/login`; // login url
    if (mode === 'refresh') {
      url = `${SERVER_URL}/refresh`; // refresh url
      // axios.defaults.headers.common.Authorization = `${payload}`;
      return axios.post(
        url,
        // JSON.stringify({
        //   accessToken: payload.accessToken,
        //   refreshToken: payload.refreshToken,
        // })
        {
          accessToken: payload.accessToken,
          refreshToken: payload.refreshToken,
        },
        {
          headers: {
            Authorization: `${payload.accessToken}`,
          },
        }
      );
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
    if (info) {
      dispatch(setId(info.id));
      dispatch(setEmail(info.email));
      dispatch(setAccessToken(info.accessToken));
      dispatch(setRefreshToken(info.refreshToken));
      dispatch(setTemporary(info.temporaryPw));
    } else dispatch(reset());
    dispatch(setState(state));

    if (state === authStates.AUTHORIZED) {
      // axios.defaults.headers.common.Authorization = `${access}`;
      // const expireTime = new Date().getTime() + 2000;
      const expireTime = new Date().getTime() + info.refreshTokenExpiresTime;
      const refreshInfo = {
        accessToken: info.accessToken,
        refreshToken: info.refreshToken,
        expireTime,
      };
      localStorage.setItem('tokenInfo', JSON.stringify(refreshInfo));
    } else {
      // delete axios.defaults.headers.common.Authorization;
      localStorage.removeItem('tokenInfo');
    }
  };

  // refresh token이 local storage에 저장되어 있으면 refresh 진행, expired 되어 있다면 expire로 상태 변경
  const refresh = () => {
    dispatch(setState(authStates.PENDING));
    const tokenInfo = JSON.parse(localStorage.getItem('tokenInfo'));
    if (tokenInfo) {
      if (tokenInfo.expireTime > new Date().getTime()) {
        // if (refreshInfo.expireTime > refreshInfo.expireTime + 1) {
        authReset();
        // authRequest({ mode: 'refresh', payload: refreshInfo.token });
        authRequest({
          mode: 'refresh',
          payload: {
            accessToken: tokenInfo.accessToken,
            refreshToken: tokenInfo.refreshToken,
          },
        });
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

  const {
    mutate: logout,
    status: logoutStatus,
    isSuccess: logoutIsSuccess,
  } = useMutation((accessToken) =>
    axios.post(`${SERVER_URL}/logout-member`, null, {
      headers: {
        Authorization: `${accessToken}`,
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
          if (authResponse.data.temporaryPw) {
            setTimeout(() => {
              navigate('/mypage/change-password');
            }, 1);
          }
        } else if (authError) {
          // console.log(authError.response.status);
          if (authError.response.status === 404) {
            // if(authError.response?.data?.message)
            // console.log(authError.response?.data?.message);
            // 유저 인증에 문제가 있을 때
            setAuthInfo(authStates.ERROR, null);
            // window.location.reload();
          } else if (
            authError.response.status === 401 ||
            authError.response.status === 400
          ) {
            setAuthInfo(authStates.INVALID, null);
          } else {
            setAuthInfo(authStates.UNAUTHORIZED, null);
          }

          // 어떤 error 인지에 따라 다른 action을 취하도록 수정해야 함.
        } else if (!authIsLoading) {
          // 네트워크에 문제가 있을 때
          setAuthInfo(authStates.ERROR, null);
        }
        break;
      case authStates.EXPIRED: // 만료되었을 때, 현재는 아무 것도 하지 않음
        setAuthInfo(authStates.UNAUTHORIZED, null);
        // navigate('/login');
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
    logoutStatus,
    logoutIsSuccess,
    refresh,
    handleAuthState,
  };
};
