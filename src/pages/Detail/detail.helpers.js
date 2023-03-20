/* eslint-disable react/react-in-jsx-scope */
import axios from 'axios';
import { useQueries, useQuery } from 'react-query';
import fullStarIcon from '../../assets/img/full-star-icon.svg';
import emptyStarIcon from '../../assets/img/empty-star-icon.svg';

export const handleGoBack = (navigate) => {
  navigate(-1);
};

// 디테일 메인 페이지에서 필요한 것들
const getRestaurantData = (id) =>
  axios.get(`/api/restaurants/${id}`).then((res) => res.data);

const getMenuData = (id) =>
  axios.get(`/api/restaurants/${id}/menus`).then((res) => res.data);

export const useDetailPageData = (id) =>
  useQueries([
    { queryKey: ['retaurant', id], queryFn: () => getRestaurantData(id) },
    { queryKey: ['menus', id], queryFn: () => getMenuData(id) },
  ]);

// 디테일페이지의 각각의 메뉴 사진을 가져오는 것들
const getMenuPhoto = (id) =>
  axios.get(`/api/menus/${id}`).then((res) => res.data);

export const useMenuPhoto = (id) =>
  useQuery(['menuPhotos', id], () => getMenuPhoto(id));

// 디테일 페이지의 리뷰 정보를 가져오는 것들
const getReviewData = (id) =>
  axios.get(`/api/restaurants/${id}/reviews`).then((res) => res.data);

export const useReview = (id) =>
  useQuery(['reviews', id], () => getReviewData(id));

export const useRateHanlder = (rate) => {
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
