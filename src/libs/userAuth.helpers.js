/* eslint-disable import/prefer-default-export */
import { useDispatch, useSelector } from 'react-redux';
import { setState } from '../redux/userAuth';
import { authState } from './utils';

export const useAuth = () => {
  const userState = useSelector((state) => state.userAuth.state);
  const dispatch = useDispatch();

  const checkTimeOut = () => {
    if (userState.expireTime > new Date()) {
      dispatch(setState(authState.EXPIRED));
    }
  };

  const login = () => {};
  const isAuth = () => {
    if (userState.state === authState.EXPIRED) {
      // refresh 요청 보내기
    }
  };

  return { checkTimeOut, login, isAuth };
};
