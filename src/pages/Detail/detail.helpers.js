/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/react-in-jsx-scope */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import fullStarIcon from '../../assets/img/full-star-icon.svg';
import emptyStarIcon from '../../assets/img/empty-star-icon.svg';

export const handleGoBack = (navigate) => {
  navigate(-1);
};

// 디테일 메인 페이지에서 필요한 custom hook
// 디테일 페이지에서는 레스토랑 정보와 메뉴정보가 항상 같이 필요하므로
// 하나의 custom hook으로 구성함
export const useDetail = (id) => {
  const [isMenuPhotoModalOpen, setIsMenuPhotoModalOpen] = useState(false);
  const [isMenuUpdateModalOpen, setIsMenuUpdateModalOpen] = useState(false);
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

  // useEffect(() => {
  //   if (addMenuPhotoStatus === 'success') setI(false);
  // }, [addMenuPhotoStatus]);

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
  const url = `/api/restaurants/${id}/reviews`;
  const getReviewList = () =>
    useQuery([id, 'reviews'], () => axios.get(url).then((res) => res.data));

  const { mutate: pushNewReview } = useMutation((data) =>
    axios.post(url, data, {
      headers: {
        'Content-Type': `application/json`,
      },
    })
  );

  const updateReview = (reviewId, data) =>
    useMutation(() =>
      axios.patch(url.concat(`/${reviewId}`), data, {
        headers: {
          'Content-Type': `application/json`,
        },
      })
    );

  const deleteReview = (reviewId) =>
    useMutation(() => axios.delete(url.concat(`/${reviewId}`)));

  const getIsLike = (reviewId) =>
    useQuery(['review', 'isLiked', reviewId], () =>
      axios.get(url).then((res) => res.data)
    );

  const pushLike = (reviewId) =>
    useMutation(() => axios.post(url.concat(`/${reviewId}`)));

  return {
    getReviewList,
    pushNewReview,
    updateReview,
    deleteReview,
    getIsLike,
    pushLike,
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

export const useDetailNav = () => {
  const [tab, setTab] = useState('main');
  const changeTab = (toChange) => setTab(toChange);
  return { tab, changeTab };
};

export const useNewReviewModal = () => {
  const [isNewReview, setIsNewReview] = useState(false);

  const openNewReviewModal = () => {
    setIsNewReview(true);
  };
  const closeNewReviewModal = () => {
    setIsNewReview(false);
  };
  return { isNewReview, openNewReviewModal, closeNewReviewModal };
};

export const useReviewContentHandler = () => {
  const [content, setContent] = useState(null);

  const changeContent = (newContent) => {
    setContent(newContent);
  };

  return { content, changeContent };
};

export const useReviewRatingHandler = () => {
  const [rating, setRating] = useState(0);

  const changeRating = (num) => {
    setRating(num);
  };

  return { rating, changeRating };
};

export const useWarningHandler = () => {
  const [isWarning, setIsWarning] = useState(false);
  const showWarningMessage = () => {
    setIsWarning(true);
  };

  return { isWarning, showWarningMessage };
};
