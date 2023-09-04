/* eslint-disable no-restricted-syntax */
import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query';
import { useSelector } from 'react-redux';
import { useAuth } from '../../libs/userAuth.helpers';
import { authStates, flattenPages } from '../../libs/utils';
import { useInputValidation } from '../Join/join.helpers';

const SERVER_URL = import.meta.env.VITE_API_BASE_URL;

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
        .get(`${SERVER_URL}/mypage`, {
          headers: {
            Authorization: `${userState.accessToken}`,
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
    setAuthInfo(authStates.UNAUTHORIZED, null);
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
  const userId = useSelector((state) => state.userAuth.id);

  const {
    data: restaurants,
    isLoading: restaurantsIsLoading,
    isError: restaurantsIsError,
  } = useQuery(
    ['myJudge', 'list'],
    () =>
      axios
        .get(`${SERVER_URL}/restaurants/judges?registrant-id=${userId}`, {
          headers: {
            Authorization: `${accessToken}`,
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
    queryKey: ['wishList'],
    queryFn: ({ pageParam = 0 }) =>
      axios
        .get(`${SERVER_URL}/restaurants/mystore?page=${pageParam}`, {
          headers: {
            Authorization: `${userState.accessToken}`,
          },
        })
        .then((res) => {
          return {
            data: res.data.data,
            pageNum: pageParam,
            isLast: pageParam >= res.data.totalPages - 1,
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
    queryFn: ({ pageParam = 0 }) =>
      axios
        .get(`${SERVER_URL}/restaurants/participate?page=${pageParam}`, {
          headers: {
            Authorization: `${userState.accessToken}`,
          },
        })
        .then((res) => {
          return {
            data: res.data.participation,
            pageNum: pageParam,
            isLast: pageParam >= res.data.totalPages - 1,
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
    queryFn: ({ pageParam = 0 }) =>
      axios
        .get(`${SERVER_URL}/restaurants/contribute?page=${pageParam}`, {
          headers: {
            Authorization: `${userState.accessToken}`,
          },
        })
        .then((res) => {
          return {
            data: res.data.contribution,
            pageNum: pageParam,
            isLast: pageParam >= res.data.totalPages - 1,
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
    queryFn: ({ pageParam = 0 }) =>
      axios
        .get(
          `${SERVER_URL}/myreviews?reviewer-id=${userState.id}&page=${pageParam}`,
          {
            headers: {
              Authorization: `${userState.accessToken}`,
            },
          }
        )
        .then((res) => {
          return {
            data: res.data.data,
            pageNum: pageParam,
            isLast: pageParam >= res.data.totalPages - 1,
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

export const useChangePassword = () => {
  const states = {
    SUCCESS: 'success',
    WAITING_PASSWORD_CHECK: 'waitingPasswordCheck',
    WAITING_PASSWORD_CHANGE: 'waitingPasswordChange',
    WRONG_CURRENT_PASSWORD: 'wrongCurrentPassword',
    INVALID_PASSWORD: 'invalidPassword',
    DIFFERENT_PASSWORD: 'differentPassword',
    MISSING_INPUT: 'missingInput',
    NETWORK_ERROR: 'networkError',
  };

  const [passwordChangeState, setPasswordChangeState] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('');

  const authInfo = useSelector((state) => state.userAuth);
  const {
    mutate: checkCurrentPassword,
    data: isCorrectPassword,
    isLoading: isPasswordCheckLoading,
    error: passwordCheckError,
  } = useMutation(['passwordValidation'], (password) => {
    return axios
      .get(`${SERVER_URL}/check-pw?password=${password}`, {
        headers: {
          Authorization: `${authInfo.accessToken}`,
        },
      })
      .then((res) => res.data);
  });

  const { checkPassword, checkPasswordConfirm } = useInputValidation();
  const {
    mutate: changePassword,
    error: passwordChangeError,
    status: passwordChangeStatus,
  } = useMutation(['changePassword'], (password) => {
    // const fd = new FormData();
    // fd.append('password', password);

    // return axios({
    //   method: 'patch',
    //   url: `${SERVER_URL}/change-pw`,
    //   data: fd,
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //     Authorization: `${authInfo.accessToken}`,
    //   },
    // });
    return axios.patch(`${SERVER_URL}/change-pw?password=${password}`, null, {
      headers: {
        Authorization: `${authInfo.accessToken}`,
      },
    });
  });

  const handlePasswordChangeSubmit = () => {
    if (currentPassword && newPassword && newPasswordConfirm) {
      if (!checkPassword(newPassword)) {
        setPasswordChangeState(states.INVALID_PASSWORD);
      } else if (!checkPasswordConfirm(newPassword, newPasswordConfirm)) {
        setPasswordChangeState(states.DIFFERENT_PASSWORD);
      } else {
        checkCurrentPassword(currentPassword);
        setPasswordChangeState(states.WAITING_PASSWORD_CHECK);
      }
    } else {
      setPasswordChangeState(states.MISSING_INPUT);
    }
  };

  useEffect(() => {
    if (passwordChangeError || passwordCheckError) {
      setPasswordChangeState(states.NETWORK_ERROR);
    } else {
      if (
        passwordChangeState === states.WAITING_PASSWORD_CHECK &&
        !isPasswordCheckLoading
      ) {
        if (isCorrectPassword) {
          changePassword(newPassword);
          setPasswordChangeState(states.WAITING_PASSWORD_CHANGE);
        } else {
          setPasswordChangeState(states.WRONG_CURRENT_PASSWORD);
        }
      }
      if (
        passwordChangeState === states.WAITING_PASSWORD_CHANGE &&
        passwordChangeStatus === 'success'
      ) {
        setPasswordChangeState(states.SUCCESS);
      }
    }
  }, [
    passwordChangeState,
    states.WAITING_PASSWORD_CHECK,
    states.WAITING_PASSWORD_CHANGE,
    isCorrectPassword,
    passwordChangeStatus,
    changePassword,
    newPassword,
    states.SUCCESS,
    states.WRONG_CURRENT_PASSWORD,
    isPasswordCheckLoading,
    passwordChangeError,
    passwordCheckError,
    states.NETWORK_ERROR,
  ]);

  return {
    states,
    passwordChangeState,
    setCurrentPassword,
    setNewPassword,
    setNewPasswordConfirm,
    handlePasswordChangeSubmit,
  };
};

export const useProfileChange = (userInfo) => {
  const authInfo = useSelector((state) => state.userAuth);
  const { checkNickName } = useInputValidation();
  const queryClient = useQueryClient();
  const [isProfileChanging, setIsProfileChanging] = useState(false);
  const [isNicknameChange, setIsNicknameChange] = useState(false);
  const [isFoodCategoryChangeOpen, setIsFoodCategoryChangeOpen] =
    useState(false);
  const [isLocationCategoryChangeOpen, setIsLocationCategoryChangeOpen] =
    useState(false);
  const [newNickname, setNewNickname] = useState('');
  const [isNicknameError, setIsNicknameError] = useState(false);

  useEffect(() => {
    setNewNickname(userInfo && userInfo.nickname);
  }, [userInfo]);

  const [foodCategory, setFoodCategory] = useState([]);
  const [locationCategory, setLocationCategory] = useState([]);

  const { mutate: patchNickname, status: patchNicknameStatus } = useMutation(
    ['nicknameChange'],
    (fd) =>
      axios.patch(`${SERVER_URL}/mypage/nickname?nickname=${fd}`, null, {
        headers: {
          Authorization: `${authInfo.accessToken}`,
        },
      }),
    { onSuccess: () => queryClient.invalidateQueries(['userInformation']) }
  );
  const { mutate: patchProfileImage, status: patchProfileImageStatus } =
    useMutation(
      ['profileImageChange'],
      (fd) =>
        axios.patch(`${SERVER_URL}/mypage/icon`, fd, {
          headers: {
            'Content-Type': `multipart/form-data; `,
            Authorization: `${authInfo.accessToken}`,
          },
        }),
      { onSuccess: () => queryClient.invalidateQueries(['userInformation']) }
    );

  useEffect(() => {
    if (
      patchNicknameStatus === 'loading' ||
      patchProfileImageStatus === 'loading'
    ) {
      setIsProfileChanging(true);
    } else {
      setIsProfileChanging(false);
    }
    if (patchNicknameStatus === 'success') {
      setIsNicknameChange(false);
    }
  }, [patchNicknameStatus, patchProfileImageStatus]);

  const handleNicknameChange = () => {
    if (checkNickName(newNickname)) patchNickname(newNickname);
    else setIsNicknameError(true);
  };

  const handleProfileChange = (event) => {
    // const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const fd = new FormData();
      fd.append('icon', event.target.files[0]);
      patchProfileImage(fd);
      // reader.readAsDataURL(event.target.files[0]);
      // reader.onloadend = () => {
      //   if (reader.result) {
      //     const fd = new FormData();
      //     fd.append('icon', reader.result.toString());
      //     patchProfileImage(fd);
      //   }
      // };
    }
  };

  return {
    isProfileChanging,
    isNicknameChange,
    setIsNicknameChange,
    isFoodCategoryChangeOpen,
    isLocationCategoryChangeOpen,
    isNicknameError,
    newNickname,
    foodCategory,
    locationCategory,
    setIsFoodCategoryChangeOpen,
    setIsLocationCategoryChangeOpen,
    setNewNickname,
    setFoodCategory,
    setLocationCategory,
    patchNickname,
    patchProfileImage,
    handleNicknameChange,
    handleProfileChange,
  };
};

export const useCategoryChangeModal = () => {
  const [isCategoryChanging, setIsCategoryChanging] = useState(false);
  const [isLocCatModalOpen, setIsLocCatModalOpen] = useState(false);
  const [isFoodCatModalOpen, setIsFoodCatModalOpen] = useState(false);

  return {
    isCategoryChanging,
    setIsCategoryChanging,
    isLocCatModalOpen,
    setIsLocCatModalOpen,
    isFoodCatModalOpen,
    setIsFoodCatModalOpen,
  };
};

export const useCategoryChange = (
  category,
  currentCategory,
  setIsCategoryChanging,
  setIsCategoryModalOpen
) => {
  const url = `${SERVER_URL}/mypage/${category}-category`;
  const authInfo = useSelector((state) => state.userAuth);
  const queryClient = useQueryClient();
  const [selectedCategoryList, setSelectedCategoryList] =
    useState(currentCategory);

  const [unSelectedCategoryList, setUnSelectedCategoryList] = useState([]);

  const { data: categoryList } = useQuery(
    [`${category}-category`],
    () =>
      axios.get(`${SERVER_URL}/${category}-category`).then((res) => res.data),
    {
      headers: { Authorization: `${authInfo.accessToken}` },
    },
    { refetchOnWindowFocus: false }
  );

  const { mutate: patchCategory, status: patchCategoryStatus } = useMutation(
    [`${category}CategoryChange`],
    (fd) =>
      axios.patch(url, fd, {
        headers: {
          Authorization: `${authInfo.accessToken}`,
        },
      }),
    { onSuccess: () => queryClient.invalidateQueries(['userInformation']) }
  );

  const addCategory = (cat) => {
    setSelectedCategoryList((state) => [...state, cat]);
  };
  const deleteCategory = (cat) => {
    const len = selectedCategoryList.length;
    for (let i = 0; i < len; i += 1) {
      if (selectedCategoryList[i].id === cat.id) {
        setSelectedCategoryList((state) => [
          ...state.slice(0, i),
          ...state.slice(i + 1, len),
        ]);
      }
    }
  };

  useEffect(() => {
    if (categoryList) {
      const newList = [];
      for (const foodCat of categoryList) {
        if (!selectedCategoryList.some((elem) => elem.id === foodCat.id))
          newList.push({ id: foodCat.id, name: foodCat.name });
      }
      setUnSelectedCategoryList(newList);
    }
  }, [categoryList, selectedCategoryList]);

  useEffect(() => {
    if (patchCategoryStatus === 'loading') {
      setIsCategoryChanging(true);
    } else {
      setIsCategoryChanging(false);
      if (patchCategoryStatus === 'success') {
        setIsCategoryModalOpen(false);
      }
    }
  });

  const handleCategoryChange = () => {
    patchCategory({
      categoryList: selectedCategoryList.map((cat) => cat.name),
    });
  };

  return {
    selectedCategoryList,
    unSelectedCategoryList,
    addCategory,
    deleteCategory,
    handleCategoryChange,
  };
};
