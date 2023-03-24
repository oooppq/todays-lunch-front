/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/react-in-jsx-scope */
import axios from 'axios';
import { useMutation, useQueries, useQuery } from 'react-query';
import fullStarIcon from '../../assets/img/full-star-icon.svg';
import emptyStarIcon from '../../assets/img/empty-star-icon.svg';

export const handleGoBack = (navigate) => {
  navigate(-1);
};

// 디테일 메인 페이지에서 필요한 것들
const getRestaurantFn = (id) =>
  axios.get(`/api/restaurants/${id}`).then((res) => res.data);

const getMenuFn = (id) =>
  axios.get(`/api/restaurants/${id}/menus`).then((res) => res.data);

export const useDetailPageData = (id) =>
  useQueries([
    { queryKey: ['retaurant', id], queryFn: () => getRestaurantFn(id) },
    { queryKey: ['menus', id], queryFn: () => getMenuFn(id) },
  ]);

// 디테일페이지의 각각의 메뉴 사진을 가져오는 것들
const getMenuPhotoFn = (id) =>
  axios.get(`/api/menus/${id}`).then((res) => res.data);

export const useMenuPhoto = (id) =>
  useQuery(['menuPhotos', id], () => getMenuPhotoFn(id));

// 디테일 페이지의 리뷰 정보를 가져오는 것들
const getReviewFn = (id) =>
  axios.get(`/api/restaurants/${id}/reviews`).then((res) => res.data);

export const useReview = (id) =>
  useQuery(['reviews', id], () => getReviewFn(id));

export const useReviewRest = (id) => {
  const url = `/api/restaurants/${id}/reviews`;
  const get = () =>
    useQuery(['reviews', id], () => axios.get(url).then((res) => res.data));

  const post = (data) =>
    useMutation(() =>
      axios.post(url, data, {
        headers: {
          'Content-Type': `application/json`,
        },
      })
    );

  const patch = (reviewId, data) =>
    useMutation(() =>
      axios.patch(url.concat(`/${reviewId}`), data, {
        headers: {
          'Content-Type': `application/json`,
        },
      })
    );

  const del = (reviewId) =>
    useMutation(() => axios.delete(url.concat(`/${reviewId}`)));
  return { get, post, patch, del };
};
const postReviewFn = (id, data) =>
  axios.post(`/api/restaurants/${id}/reviews`, data, {
    headers: {
      'Content-Type': `application/json`,
    },
  });

export const useNewReview = (id, data) =>
  useMutation(() => postReviewFn(id, data));

export const useRateStarHanlder = (rate) => {
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
