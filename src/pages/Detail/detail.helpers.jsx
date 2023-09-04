/* eslint-disable react/react-in-jsx-scope */
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query';
import fullStarIcon from '../../assets/img/full-star-icon.svg';
import emptyStarIcon from '../../assets/img/empty-star-icon.svg';
import { useAuth } from '../../libs/userAuth.helpers';

const SERVER_URL = import.meta.env.VITE_API_BASE_URL;

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
    axios
      .get(`${SERVER_URL}/restaurants/${id}`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((res) => res.data);

  const getMenuFn = () =>
    axios
      .get(`${SERVER_URL}/restaurants/${id}/menus`)
      .then((res) => res.data.data);

  const {
    data: restaurant,
    status: restaurantStatus,
    isLoading: isRestaurantLoading,
    error: restaurantError,
  } = useQuery(['restaurant', id], () => getRestaurantFn(id), {
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
          Authorization: `${accessToken}`,
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
              Authorization: `${accessToken}`,
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
            Authorization: `${accessToken}`,
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
    restaurantStatus,
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
  const [saleExplain, setSaleExplain] = useState('');
  const [isWarning, setIsWarning] = useState(false);
  const [isMenuDeleteModalOpen, setIsMenuDeleteModalOpen] = useState(false);

  const handleFetchMenu = (fetchMenu) => {
    if (!name || !price) setIsWarning(true);
    else {
      fetchMenu({
        name,
        price,
        salePrice: salePrice || null,
        saleExplain: salePrice ? saleExplain : '',
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
    saleExplain,
    setSaleExplain,
    isWarning,
    setIsWarning,
    isMenuDeleteModalOpen,
    setIsMenuDeleteModalOpen,
    handleFetchMenu,
  };
};

// 디테일페이지의 각각의 메뉴 사진을 가져오는 custom hook
export const useMenuPhoto = (id) => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/menus/${id}/images`;
  const accessToken = useSelector((state) => state.userAuth.accessToken);
  const queryClient = useQueryClient();
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isPhotoDeleteModalOpen, setIsPhotoDeleteModalOpen] = useState(false);

  const { isAuthorized } = useAuth();

  const {
    data: photos,
    isFetching: isPhotosFetching,
    error: photosError,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery(
    ['menuPhotos', id],
    ({ pageParam = 0 }) =>
      axios.get(url.concat(`/?page=${pageParam}`)).then((res) => {
        return {
          data: res.data.data,
          pageNum: pageParam,
          isLast: pageParam >= res.data.totalPages - 1,
        };
      }),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.isLast) return undefined;
        return lastPage.pageNum + 1;
      },
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
            Authorization: `${accessToken}`,
          },
        }),
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['menuPhotos', id]);
          queryClient.invalidateQueries(['menus'], { exact: false });
        },
      }
    );

  const { mutate: deleteMenuPhotoRequest, status: deleteMenuPhotoStatus } =
    useMutation(
      ['deleteMenuPhoto', id],
      (photoId) =>
        axios.delete(url.concat(`/${photoId}`), {
          headers: {
            Authorization: `${accessToken}`,
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
    if (event.target.files && event.target.files.length) {
      const fd = new FormData();
      fd.append('menu-image', event.target.files[0]);
      addMenuPhotoRequest(fd);
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
    isPhotosFetching,
    hasNextPage,
    fetchNextPage,
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
  const { isAuthorized } = useAuth();
  const accessToken = useSelector((state) => state.userAuth.accessToken);
  const url = `${import.meta.env.VITE_API_BASE_URL}/restaurants/${id}/reviews`;
  const queryClient = useQueryClient();
  const [isNewReviewModalOpen, setIsNewReviewModalOpen] = useState(false);
  const [sort, setSort] = useState('likeCount');
  const [order, setOrder] = useState('descending');

  const {
    data: reviewList,
    isFetching: reviewListIsFetching,
    error: reviewListError,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['reviewList', id, sort, order],
    queryFn: async ({ queryKey, pageParam = 0 }) => {
      const res = await axios.get(
        url.concat(
          `?page=${pageParam}&sort=${queryKey[2]}&order=${queryKey[3]}`
        ),
        {
          headers: {
            Authorization: accessToken,
          },
        }
      );
      return {
        data: res.data.data,
        pageNum: pageParam,
        isLast: pageParam >= res.data.totalPages - 1,
        totalReviewCount: res.data.totalReviewCount,
      };
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.isLast) return undefined;
      return lastPage.pageNum + 1;
    },
    refetchOnWindowFocus: false,
  });

  const { mutate: pushNewReview, status: pushNewReviewStatus } = useMutation(
    ['pushNewReview'],
    (data) =>
      axios.post(url, data, {
        headers: {
          'Content-Type': `application/json`,
          Authorization: `${accessToken}`,
        },
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['reviewList', id]);
        queryClient.invalidateQueries(['restaurant', id]);
      },
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

  return {
    isNewReviewModalOpen,
    openNewReviewModal,
    setIsNewReviewModalOpen,
    sort,
    setSort,
    order,
    setOrder,
    reviewList,
    reviewListIsFetching,
    reviewListError,
    hasNextPage,
    fetchNextPage,
    pushNewReview,
    pushNewReviewStatus,
  };
};

export const useReviewElem = (restId, review) => {
  const { authInfo, isAuthorized } = useAuth();
  const accessToken = useSelector((state) => state.userAuth.accessToken);
  const url = `${
    import.meta.env.VITE_API_BASE_URL
  }/restaurants/${restId}/reviews`;
  const queryClient = useQueryClient();

  const [isUpdateReviewModalOpen, setIsUpdateReviewModalOpen] = useState(false);
  const [isDeleteReviewModalOpen, setIsDeleteReviewModalOpen] = useState(false);
  const [isLike, setIsLike] = useState(review.liked === 'true');
  const [likeCount, setLikeCount] = useState(review.likeCount);

  const { mutate: updateReview, status: updateReviewStatus } = useMutation(
    ['updateReview', restId],
    (fd) =>
      axios.patch(url.concat(`/${review.id}`), fd, {
        headers: {
          'Content-Type': `application/json`,
          Authorization: `${accessToken}`,
        },
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['restaurant', restId], { exact: false });
        queryClient.invalidateQueries(['reviewList', restId], { exact: false });
        queryClient.invalidateQueries(['myReview', 'list'], { exact: false });
      },
    }
  );

  const { mutate: deleteReview, status: deleteReviewStatus } = useMutation(
    ['deleteReview', restId],
    () =>
      axios.delete(url.concat(`/${review.id}`), {
        headers: { Authorization: `${accessToken}` },
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['restaurant', restId], { exact: false });
        queryClient.invalidateQueries(['reviewList', restId], { exact: false });
        queryClient.invalidateQueries(['myReview', 'list'], { exact: false });
      },
    }
  );

  const { mutate: pushLikeRequest } = useMutation(['review', 'pushLike'], () =>
    axios.post(url.concat(`/${review.id}/like`), null, {
      headers: {
        Authorization: `${accessToken}`,
      },
    })
  );

  const pushLike = (navigate) => {
    if (isAuthorized()) {
      pushLikeRequest();
      setIsLike((state) => !state);
      setLikeCount((state) => {
        if (isLike) return state - 1;
        return state + 1;
      });
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
    likeCount,
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

export const handleLongReview = (review) => {
  // if (review.length > 20) {
  //   return review.slice(0, 20).concat('...');
  // }
  return review;
};

export const useDetailNav = () => {
  const [tab, setTab] = useState('main');
  const changeTab = (toChange) => setTab(toChange);
  return { tab, changeTab };
};

export const useChnageThumbImage = (id) => {
  const accessToken = useSelector((state) => state.userAuth.accessToken);
  const navigate = useNavigate();
  const [isChangeModalOpen, setIsChangeModalOpen] = useState(false);
  const { mutate: changeThumbRequest, status } = useMutation(
    ['change-thumb'],
    () =>
      axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/menus/best?image-id=${id}`,
        null,
        {
          headers: {
            Authorization: accessToken,
          },
        }
      )
  );
  const handleClickChangeThumbBtn = () => {
    if (accessToken) {
      setIsChangeModalOpen(true);
    } else {
      navigate('/login');
    }
  };
  useEffect(() => {
    if (status === 'success') {
      setIsChangeModalOpen(false);
    }
  }, [status]);

  return {
    isChangeModalOpen,
    setIsChangeModalOpen,
    changeThumbRequest,
    handleClickChangeThumbBtn,
  };
};
