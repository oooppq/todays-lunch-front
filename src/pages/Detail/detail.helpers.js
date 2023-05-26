/* eslint-disable react/react-in-jsx-scope */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useInfiniteQuery, useMutation, useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import fullStarIcon from '../../assets/img/full-star-icon.svg';
import emptyStarIcon from '../../assets/img/empty-star-icon.svg';

export const handleGoBack = (navigate) => {
  navigate(-1);
};

export const useDetail = (id) => {
  const [isMenuPhotoModalOpen, setIsMenuPhotoModalOpen] = useState(false);
  const [isMenuUpdateModalOpen, setIsMenuUpdateModalOpen] = useState(false);
  const [isMenuSaleInfoModalOpen, setIsMenuSaleInfoModalOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const getRestaurantFn = () =>
    axios.get(`/api/restaurants/${id}`).then((res) => res.data);

  const getMenuFn = () =>
    axios.get(`/api/restaurants/${id}/menus`).then((res) => res.data);

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

  return {
    isMenuPhotoModalOpen,
    setIsMenuPhotoModalOpen,
    isMenuUpdateModalOpen,
    setIsMenuUpdateModalOpen,
    isMenuSaleInfoModalOpen,
    setIsMenuSaleInfoModalOpen,
    selectedMenu,
    setSelectedMenu,
    restaurant,
    isRestaurantLoading,
    restaurantError,
    menus,
    isMenusLoading,
    menusError,
  };
};

export const useMenu = () => {};
// 디테일페이지의 각각의 메뉴 사진을 가져오는 custom hook
export const useMenuPhoto = (id) => {
  const url = `/api/menus/${id}/images`;

  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isPhotoDeleteModalOpen, setIsPhotoDeleteModalOpen] = useState(false);

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

  const { mutate: addMenuPhoto, status: addMenuPhotoStatus } = useMutation(
    ['addMenuPhoto', id],
    (fd) =>
      axios.post(url, fd, {
        headers: {
          'Content-Type': `multipart/form-data; `,
        },
      })
  );

  const { mutate: deleteMenuPhoto, status: deleteMenuPhotoStatus } =
    useMutation(['deleteMenuPhoto', id], (photoId) =>
      axios.delete(url.concat(`/${photoId}`))
    );

  const handleAddMenuPhoto = (event) => {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      reader.readAsDataURL(event.target.files[0]);
      reader.onloadend = () => {
        if (reader.result) {
          const fd = new FormData();
          fd.append('menuImage', reader.result.toString());
          addMenuPhoto(fd);
        }
      };
    }
  };

  useEffect(() => {
    if (deleteMenuPhotoStatus === 'success') {
      setIsPhotoDeleteModalOpen(false);
      setSelectedPhoto(null);
    }
  }, [deleteMenuPhotoStatus]);

  return {
    selectedPhoto,
    setSelectedPhoto,
    isPhotoDeleteModalOpen,
    setIsPhotoDeleteModalOpen,
    photos,
    isPhotosLoading,
    photosError,
    addMenuPhoto,
    addMenuPhotoStatus,
    deleteMenuPhoto,
    deleteMenuPhotoStatus,
    handleAddMenuPhoto,
  };
};

// 디테일 페이지의 리뷰 REST 요처을 담당하는 custom hook
export const useReview = (id) => {
  const userState = useSelector((state) => state.userAuth);
  const url = `/api/restaurants/${id}/reviews`;
  // const likeUrl = `/api/reviews`;
  const [isNewReviewModalOpen, setIsNewReviewModalOpen] = useState(false);

  const {
    data: reviewList,
    isFetching: reviewListIsFetching,
    error: reviewListError,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['wishList', id],
    queryFn: ({ pageParam = 1 }) =>
      axios
        .get(url.concat(`?page=${pageParam}`), {
          headers: {
            Authorization: `Bearer ${userState && userState.accessToken}`,
          },
        })
        .then((res) => {
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

  const { mutate: pushNewReview, status: pushNewReviewStatus } = useMutation(
    ['pushNewReview'],
    (data) =>
      axios.post(url, data, {
        headers: {
          'Content-Type': `application/json`,
        },
      })
  );

  const useReviewElem = (reviewId) => {
    const [isUpdateReviewModalOpen, setIsUpdateReviewModalOpen] =
      useState(false);
    const [isDeleteReviewModalOpen, setIsDeleteReviewModalOpen] =
      useState(false);

    const { mutate: updateReview, status: updateReviewStatus } = useMutation(
      ['updateReview', id],
      (fd) =>
        axios.patch(url.concat(`/${reviewId}`), fd, {
          headers: {
            'Content-Type': `application/json`,
          },
        })
    );

    const { mutate: deleteReview, status: deleteReviewStatus } = useMutation(
      ['deleteReview', id],
      () => axios.delete(url.concat(`/${reviewId}`))
    );

    const { data: isLiked } = useQuery(
      ['review', 'isLiked', reviewId],
      () => axios.get(url.concat(`/${reviewId}/like`)).then((res) => res.data),
      {
        refetchOnWindowFocus: false,
      }
    );

    const { mutate: pushLike } = useMutation(['review', 'pushLike'], () =>
      axios.post(url.concat(`/${reviewId}/like`))
    );
    return {
      isUpdateReviewModalOpen,
      setIsUpdateReviewModalOpen,
      isDeleteReviewModalOpen,
      setIsDeleteReviewModalOpen,
      updateReview,
      updateReviewStatus,
      deleteReview,
      deleteReviewStatus,
      isLiked,
      pushLike,
    };
  };

  return {
    isNewReviewModalOpen,
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

export const useNewReview = () => {
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(0);
  const [isWarning, setIsWarning] = useState(false);

  const handleFetchReview = (fetchReview, closeModal) => {
    if (!content || !rating) setIsWarning(true);
    else {
      const fd = new FormData();
      if (rating) fd.append('rating', rating);
      if (content) fd.append('reviewContent', content);
      fetchReview(fd);
      closeModal();
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
