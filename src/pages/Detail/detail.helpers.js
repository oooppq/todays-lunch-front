/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/react-in-jsx-scope */
import axios from 'axios';
import { useMutation, useQueries, useQuery } from 'react-query';
import fullStarIcon from '../../assets/img/full-star-icon.svg';
import emptyStarIcon from '../../assets/img/empty-star-icon.svg';

export const handleGoBack = (navigate) => {
  navigate(-1);
};

// 디테일 메인 페이지에서 필요한 custom hook
// 디테일 페이지에서는 레스토랑 정보와 메뉴정보가 항상 같이 필요하므로
// 하나의 custom hook으로 구성함
export const useDetailPageData = (id) => {
  const getRestaurantFn = () =>
    axios.get(`/api/restaurants/${id}`).then((res) => res.data);

  const getMenuFn = () =>
    axios.get(`/api/restaurants/${id}/menus`).then((res) => res.data);

  return useQueries([
    { queryKey: ['retaurant', id], queryFn: () => getRestaurantFn(id) },
    { queryKey: ['menus', id], queryFn: () => getMenuFn(id) },
  ]);
};

// 디테일페이지의 각각의 메뉴 사진을 가져오는 custom hook
export const useMenuPhoto = (id) =>
  useQuery(['menuPhotos', id], () =>
    axios.get(`/api/menus/${id}`).then((res) => res.data)
  );

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
export const rateStarHanlder = (rate) => {
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
