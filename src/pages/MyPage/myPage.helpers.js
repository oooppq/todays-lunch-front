import axios from 'axios';
// import { useState } from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
// import { authStates } from '../../libs/utils';

export const useMyPage = (navigate) => {
  const userState = useSelector((state) => state.userAuth);
  //   if (userState.state === authStates.AUTHORIZED) return null;

  const {
    data: userInfo,
    isFetching: userInfoIsFetching,
    error: userInfoError,
  } = useQuery(
    ['userInformation', userState.refreshToken],
    () => axios.get('/api/mypage').then((res) => res.data),
    {
      refetchOnWindowFocus: false,
    }
  );

  const handleGotoOnClick = (event) => {
    navigate(`./${event.target.id}`);
  };

  return {
    userInfo,
    userInfoIsFetching,
    userInfoError,
    handleGotoOnClick,
  };
};

export const temp = () => {};
