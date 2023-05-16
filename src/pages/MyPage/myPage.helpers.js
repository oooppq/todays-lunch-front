/* eslint-disable no-restricted-syntax */
import axios from 'axios';
import { useInfiniteQuery, useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { useAuth } from '../../libs/userAuth.helpers';
import { authStates, flattenPages } from '../../libs/utils';

export const useMyPage = (navigate) => {
  const userState = useSelector((state) => state.userAuth);

  const {
    data: userInfo,
    isFetching: userInfoIsFetching,
    error: userInfoError,
  } = useQuery(
    ['userInformation', userState.refreshToken],
    () =>
      axios
        .get('/api/mypage', {
          headers: {
            Authorization: `Bearer ${userState.accessToken}`,
          },
        })
        .then((res) => res.data),
    {
      refetchOnWindowFocus: false,
    }
  );
  const { logout, logoutIsSuccess, setAuthInfo } = useAuth();

  const handleGoToLogout = () => {
    if (logoutIsSuccess) {
      navigate('/logout');
    }
  };

  const handleLogout = () => {
    setAuthInfo(authStates.UNAUTHORIZED, null, null);
    localStorage.removeItem('refreshInfo');
  };

  const handleGotoOnClick = (event) => {
    navigate(`./${event.target.id}`);
  };
  const handleLogoutOnClick = () => {
    logout(userState.accessToken);
  };

  return {
    userInfo,
    userInfoIsFetching,
    userInfoError,
    logoutIsSuccess,
    handleLogoutOnClick,
    handleGoToLogout,
    handleLogout,
    handleGotoOnClick,
  };
};

export const useMyJudge = () => {
  const accessToken = useSelector((state) => state.userAuth.accessToken);

  const {
    data: restaurants,
    isLoading: restaurantsIsLoading,
    isError: restaurantsIsError,
  } = useQuery(
    ['myJudge', 'list'],
    () =>
      axios
        .get('/api/restaurants/judges', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => res.data),
    {
      refetchOnWindowFocus: false,
    }
  );
  return { restaurants, restaurantsIsLoading, restaurantsIsError };
};

export const useWishlist = () => {
  const userState = useSelector((state) => state.userAuth);

  const {
    data: wishlist,
    isFetching: wishlistIsFetching,
    error: wishlistError,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: 'wishList',
    queryFn: ({ pageParam = 1 }) =>
      axios
        .get(`/api/restaurants?page=${pageParam}`, {
          headers: {
            Authorization: `Bearer ${userState && userState.accessToken}`,
          },
        })
        .then((res) => {
          return {
            data: res.data.data,
            pageNum: pageParam,
            isLast: pageParam === res.data.totalPages,
          };
        }),
    getNextPageParam: (lastPage) => {
      if (lastPage.isLast) return undefined;
      return lastPage.pageNum + 1;
    },
    refetchOnWindowFocus: false,
  });

  return {
    wishlist,
    wishlistIsFetching,
    wishlistError,
    hasNextPage,
    fetchNextPage,
    flattenPages,
  };
};

export const useParticipatingRestaurant = () => {
  const userState = useSelector((state) => state.userAuth);

  const {
    data: addedRestaurants,
    isFetching: arIsFetching,
    error: arError,
    hasNextPage: arHasNextPage,
    fetchNextPage: arFetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['userAddedRestaurants', 'list'],
    queryFn: ({ pageParam = 1 }) =>
      axios
        .get(`/api/restaurants?page=${pageParam}`, {
          headers: {
            Authorization: `Bearer ${userState && userState.accessToken}`,
          },
        })
        .then((res) => {
          return {
            data: res.data.data,
            pageNum: pageParam,
            isLast: pageParam === res.data.totalPages,
          };
        }),
    getNextPageParam: (lastPage) => {
      if (lastPage.isLast) return undefined;
      return lastPage.pageNum + 1;
    },
    refetchOnWindowFocus: false,
  });

  const {
    data: contributingRestaurants,
    isFetching: crIsFetching,
    error: crError,
    hasNextPage: crHasNextPage,
    fetchNextPage: crFetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['userContributingRestaurants', 'list'],
    queryFn: ({ pageParam = 1 }) =>
      axios
        .get(`/api/restaurants?page=${pageParam}`, {
          headers: {
            Authorization: `Bearer ${userState && userState.accessToken}`,
          },
        })
        .then((res) => {
          return {
            data: res.data.data,
            pageNum: pageParam,
            isLast: pageParam === res.data.totalPages,
          };
        }),
    getNextPageParam: (lastPage) => {
      if (lastPage.isLast) return undefined;
      return lastPage.pageNum + 1;
    },
    refetchOnWindowFocus: false,
  });

  return {
    addedRestaurants,
    arIsFetching,
    arError,
    arHasNextPage,
    arFetchNextPage,
    contributingRestaurants,
    crIsFetching,
    crError,
    crHasNextPage,
    crFetchNextPage,
  };
};

export const useMyReview = () => {
  const userState = useSelector((state) => state.userAuth);

  const {
    data: myReviews,
    isFetching: myReviewIsFetching,
    error: myReviewError,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['myReview', 'list'],
    queryFn: ({ pageParam = 1 }) =>
      axios
        .get(`/api/my-review?page=${pageParam}`, {
          headers: {
            Authorization: `Bearer ${userState && userState.accessToken}`,
          },
        })
        .then((res) => {
          return {
            data: res.data.data,
            pageNum: pageParam,
            isLast: pageParam === res.data.totalPages,
          };
        }),
    getNextPageParam: (lastPage) => {
      if (lastPage.isLast) return undefined;
      return lastPage.pageNum + 1;
    },
    refetchOnWindowFocus: false,
  });
  return {
    myReviews,
    myReviewError,
    myReviewIsFetching,
    hasNextPage,
    fetchNextPage,
  };
};
