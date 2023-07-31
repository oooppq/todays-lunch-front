/* eslint-disable react/react-in-jsx-scope */
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query';
import fullStarIcon from '../../assets/img/full-star-icon.svg';
import emptyStarIcon from '../../assets/img/empty-star-icon.svg';
import { useAuth } from '../../libs/userAuth.helpers';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const handleGoBack = (navigate) => {
  navigate(-1);
};

export const useDetail = (id) => {
  const [isNewMenuModalOpen, setIsNewMenuModalOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const { isAuthorized } = useAuth();
  const queryClient = useQueryClient();
  const accessToken = useSelector((state) => state.userAuth.accessToken);

  const getRestaurantFn = () =>
    axios.get(`${SERVER_URL}/restaurants/${id}`).then((res) => res.data);

  const getMenuFn = () =>
    axios.get(`${SERVER_URL}/restaurants/${id}/menus`).then((res) => res.data);

  const {
    data: restaurant,
    isLoading: isRestaurantLoading,
    error: restaurantError,
  } = useQuery(['retaurant', id], () => getRestaurantFn(id), {
    refetchOnWindowFocus: false,
  });

  const {
    data: menus,
    isLoading: isMenusLoading,
    error: menusError,
  } = useQuery(['menus', id], () => getMenuFn(id), {
    refetchOnWindowFocus: false,
  });

  const { mutate: pushNewMenu, status: pushNewMenuStatus } = useMutation(
    ['pushNewMenu'],
    (payload) =>
      axios.post(`${SERVER_URL}/restaurants/${id}/menus`, payload, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    { onSuccess: () => queryClient.invalidateQueries(['menus', id]) }
  );

  const openNewMenuModal = (navigate) => {
    if (isAuthorized()) {
      setIsNewMenuModalOpen(true);
    } else {
      navigate('/login');
    }
  };

  useEffect(() => {
    if (pushNewMenuStatus === 'success') setIsNewMenuModalOpen(false);
  }, [pushNewMenuStatus]);

  const useMenuElem = (menuId) => {
    const [isMenuUpdateModalOpen, setIsMenuUpdateModalOpen] = useState(false);
    const [isMenuPhotoModalOpen, setIsMenuPhotoModalOpen] = useState(false);
    const [isMenuSaleInfoModalOpen, setIsMenuSaleInfoModalOpen] =
      useState(false);

    const { mutate: updateMenu, status: updateMenuStatus } = useMutation(
      ['updateNewMenu'],
      (payload) =>
        axios.patch(
          `${SERVER_URL}/restaurants/${id}/menus/${menuId}`,
          payload,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        ),
      { onSuccess: () => queryClient.invalidateQueries(['menus', id]) }
    );

    const { mutate: deleteMenu, status: deleteMenuStatus } = useMutation(
      ['deleteMenu'],
      () =>
        axios.delete(`${SERVER_URL}/restaurants/${id}/menus/${menuId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }),
      { onSuccess: () => queryClient.invalidateQueries(['menus', id]) }
    );

    const openMenuUpdateModal = (navigate) => {
      if (isAuthorized()) {
        setIsMenuUpdateModalOpen(true);
      } else {
        navigate('/login');
      }
    };

    useEffect(() => {
      if (updateMenuStatus === 'success' || deleteMenuStatus === 'success')
        setIsMenuUpdateModalOpen(false);
    }, [updateMenuStatus, deleteMenuStatus]);

    return {
      isMenuUpdateModalOpen,
      setIsMenuUpdateModalOpen,
      isMenuPhotoModalOpen,
      setIsMenuPhotoModalOpen,
      isMenuSaleInfoModalOpen,
      setIsMenuSaleInfoModalOpen,
      updateMenu,
      updateMenuStatus,
      deleteMenu,
      deleteMenuStatus,
      openMenuUpdateModal,
    };
  };

  return {
    isNewMenuModalOpen,
    setIsNewMenuModalOpen,
    selectedMenu,
    setSelectedMenu,
    restaurant,
    isRestaurantLoading,
    restaurantError,
    menus,
    isMenusLoading,
    menusError,
    pushNewMenu,
    pushNewMenuStatus,
    openNewMenuModal,
    useMenuElem,
  };
};

export const useFetchMenu = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(null);
  const [salePrice, setSalePrice] = useState(null);
  const [saleComment, setSaleComment] = useState('');
  const [isWarning, setIsWarning] = useState(false);
  const [isMenuDeleteModalOpen, setIsMenuDeleteModalOpen] = useState(false);

  const handleFetchMenu = (fetchMenu) => {
    if (!name || !price) setIsWarning(true);
    else {
      fetchMenu({
        name,
        price,
        salePrice: salePrice || null,
        saleComment: salePrice ? saleComment : '',
      });
    }
  };

  return {
    name,
    setName,
    price,
    setPrice,
    salePrice,
    setSalePrice,
    saleComment,
    setSaleComment,
    isWarning,
    setIsWarning,
    isMenuDeleteModalOpen,
    setIsMenuDeleteModalOpen,
    handleFetchMenu,
  };
};

// 디테일페이지의 각각의 메뉴 사진을 가져오는 custom hook
export const useMenuPhoto = (id) => {
  const url = `${import.meta.env.VITE_SERVER_URL}/menus/${id}/images`;
  const accessToken = useSelector((state) => state.userAuth.accessToken);
  const queryClient = useQueryClient();
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isPhotoDeleteModalOpen, setIsPhotoDeleteModalOpen] = useState(false);

  const { isAuthorized } = useAuth();

  const {
    data: photos,
    isLoading: isPhotosLoading,
    error: photosError,
  } = useQuery(
    ['menuPhotos', id],
    () => axios.get(url).then((res) => res.data),
    {
      refetchOnWindowFocus: false,
    }
  );

  const { mutate: addMenuPhotoRequest, status: addMenuPhotoStatus } =
    useMutation(
      ['addMenuPhoto', id],
      (fd) =>
        axios.post(url, fd, {
          headers: {
            'Content-Type': `multipart/form-data; `,
            Authorization: `Bearer ${accessToken}`,
          },
        }),
      { onSuccess: () => queryClient.invalidateQueries(['menuPhotos', id]) }
    );

  const { mutate: deleteMenuPhotoRequest, status: deleteMenuPhotoStatus } =
    useMutation(
      ['deleteMenuPhoto', id],
      (photoId) =>
        axios.delete(url.concat(`/${photoId}`), {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }),
      { onSuccess: () => queryClient.invalidateQueries(['menuPhotos', id]) }
    );

  const deleteMenuPhoto = (navigate, photoId) => {
    if (isAuthorized()) {
      deleteMenuPhotoRequest(photoId);
    } else {
      navigate('/login');
    }
  };

  const handleAddMenuPhoto = (event) => {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      reader.readAsDataURL(event.target.files[0]);
      reader.onloadend = () => {
        if (reader.result) {
          const fd = new FormData();
          fd.append('menuImage', reader.result.toString());
          addMenuPhotoRequest(fd);
        }
      };
    }
  };

  const openPhotoDeleteModal = (navigate) => {
    if (isAuthorized()) {
      setIsPhotoDeleteModalOpen(true);
    } else {
      navigate('/login');
    }
  };

  useEffect(() => {
    if (deleteMenuPhotoStatus === 'success') {
      setIsPhotoDeleteModalOpen(false);
      setSelectedPhoto(null);
    }
  }, [deleteMenuPhotoStatus]);

  return {
    isAuthorized,
    selectedPhoto,
    setSelectedPhoto,
    isPhotoDeleteModalOpen,
    setIsPhotoDeleteModalOpen,
    photos,
    isPhotosLoading,
    photosError,
    addMenuPhotoStatus,
    deleteMenuPhoto,
    deleteMenuPhotoRequest,
    deleteMenuPhotoStatus,
    handleAddMenuPhoto,
    openPhotoDeleteModal,
  };
};

// 디테일 페이지의 리뷰 REST 요청을 담당하는 custom hook
export const useReview = (id) => {
  const { authInfo, isAuthorized } = useAuth();
  const accessToken = useSelector((state) => state.userAuth.accessToken);
  const url = `${import.meta.env.VITE_SERVER_URL}/restaurants/${id}/reviews`;
  // const likeUrl = `/api/reviews`;
  const [isNewReviewModalOpen, setIsNewReviewModalOpen] = useState(false);

  const {
    data: reviewList,
    isFetching: reviewListIsFetching,
    error: reviewListError,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['reviewList', id],
    queryFn: ({ pageParam = 1 }) =>
      axios.get(url.concat(`?page=${pageParam}`)).then((res) => {
        return {
          data: res.data.data,
          pageNum: pageParam,
          isLast: pageParam === res.data.totalPages,
          totalReviewCount: res.data.totalReviewCount,
        };
      }),
    getNextPageParam: (lastPage) => {
      if (lastPage.isLast) return undefined;
      return lastPage.pageNum + 1;
    },
    refetchOnWindowFocus: false,
  });
  const queryClient = useQueryClient();
  const { mutate: pushNewReview, status: pushNewReviewStatus } = useMutation(
    ['pushNewReview'],
    (data) =>
      axios.post(url, data, {
        headers: {
          'Content-Type': `application/json`,
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(['reviewList', id]),
    }
  );

  const openNewReviewModal = (navigate) => {
    if (isAuthorized()) {
      setIsNewReviewModalOpen(true);
    } else {
      navigate('/login');
    }
  };

  useEffect(() => {
    if (pushNewReviewStatus === 'success') setIsNewReviewModalOpen(false);
  }, [pushNewReviewStatus]);

  const useReviewElem = (review) => {
    const [isUpdateReviewModalOpen, setIsUpdateReviewModalOpen] =
      useState(false);
    const [isDeleteReviewModalOpen, setIsDeleteReviewModalOpen] =
      useState(false);
    const [isLike, setIsLike] = useState(review.liked);

    const { mutate: updateReview, status: updateReviewStatus } = useMutation(
      ['updateReview', id],
      (fd) =>
        axios.patch(url.concat(`/${review.id}`), fd, {
          headers: {
            'Content-Type': `application/json`,
            Authorization: `Bearer ${accessToken}`,
          },
        }),
      {
        onSuccess: () => queryClient.invalidateQueries(['reviewList', id]),
      }
    );

    const { mutate: deleteReview, status: deleteReviewStatus } = useMutation(
      ['deleteReview', id],
      () =>
        axios.delete(url.concat(`/${review.id}`), {
          headers: { Authorization: `Bearer ${accessToken}` },
        }),
      {
        onSuccess: () => queryClient.invalidateQueries(['reviewList', id]),
      }
    );

    const { mutate: pushLikeRequest } = useMutation(
      ['review', 'pushLike'],
      () =>
        axios.post(url.concat(`/${review.id}/like`), null, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
    );

    const pushLike = (navigate) => {
      if (isAuthorized()) {
        pushLikeRequest();
        setIsLike((state) => !state);
      } else {
        navigate('/login');
      }
    };

    const isAuthor = (userId) => {
      if (isAuthorized()) {
        return authInfo.id === userId;
      }
      return false;
    };

    useEffect(() => {
      if (updateReviewStatus === 'success') setIsUpdateReviewModalOpen(false);
      if (deleteReviewStatus === 'success') setIsDeleteReviewModalOpen(false);
    }, [updateReviewStatus, deleteReviewStatus]);

    return {
      isUpdateReviewModalOpen,
      setIsUpdateReviewModalOpen,
      isDeleteReviewModalOpen,
      setIsDeleteReviewModalOpen,
      updateReview,
      updateReviewStatus,
      deleteReview,
      deleteReviewStatus,
      pushLike,
      isAuthor,
      isLike,
    };
  };

  return {
    isNewReviewModalOpen,
    openNewReviewModal,
    setIsNewReviewModalOpen,
    reviewList,
    reviewListIsFetching,
    reviewListError,
    hasNextPage,
    fetchNextPage,
    pushNewReview,
    pushNewReviewStatus,
    useReviewElem,
  };
};

export const useFetchReview = () => {
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(0);
  const [isWarning, setIsWarning] = useState(false);

  const handleFetchReview = (fetchReview) => {
    if (!content || !rating) setIsWarning(true);
    else {
      const fd = new FormData();
      if (rating) fd.append('rating', rating);
      if (content) fd.append('reviewContent', content);
      fetchReview(fd);
    }
  };

  return {
    content,
    setContent,
    rating,
    setRating,
    isWarning,
    setIsWarning,
    handleFetchReview,
  };
};

// 별점을 숫자로 입력받으면 그에 맞게 이미지로 변환시켜준다.
export const rateStarHandler = (rate) => {
  const stars = [];

  for (let i = 0; i < 5; i += 1) {
    if (i < rate) {
      stars.push(
        <img key={i} className="fullStar" src={fullStarIcon} alt="" />
      );
    } else {
      stars.push(
        <img key={i} className="emptyStar" src={emptyStarIcon} alt="" />
      );
    }
  }
  return stars;
};

export const handleLikeNum = (num) => {
  if (num >= 1000) return `${(num / 1000).toFixed(1)}k`;
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}m`;
  return num;
};

export const useDetailNav = () => {
  const [tab, setTab] = useState('main');
  const changeTab = (toChange) => setTab(toChange);
  return { tab, changeTab };
};
