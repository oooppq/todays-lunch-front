/* eslint-disable react/react-in-jsx-scope */
import axios from 'axios';
import { useQueries, useQuery } from 'react-query';

const getRestaurantData = (id) =>
  axios.get(`/api/restaurants/${id}`).then((res) => res.data);

const getMenuData = (id) =>
  axios.get(`/api/restaurants/${id}/menus`).then((res) => res.data);

export const useDetailPageData = (id) =>
  useQueries([
    { queryKey: ['retaurant', id], queryFn: () => getRestaurantData(id) },
    { queryKey: ['menus', id], queryFn: () => getMenuData(id) },
  ]);

const getMenuPhoto = (id) =>
  axios.get(`/api/menus/${id}`).then((res) => res.data);

export const useMenuPhoto = (id) =>
  useQuery(['menuPhotos', id], () => getMenuPhoto(id));

export const handleGoBack = (navigate) => {
  navigate(-1);
};
