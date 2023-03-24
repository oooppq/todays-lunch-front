/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/react-in-jsx-scope */
import axios from 'axios';
import { useMutation, useQuery } from 'react-query';

export const useWish = () => {
  const url = `/api/restaurants/wish`;
  const getWishList = () =>
    useQuery('wishList', () => axios.get(url).then((res) => res.data));

  const getIsWish = () =>
    useQuery(
      'wishIsLike',
      axios.get(url).then((res) => res.data)
    );

  const pushWish = () => useMutation(() => axios.post(url));

  return { getWishList, getIsWish, pushWish };
};

export const useRoulette = () => {
  const getRouletteList = () => {
    const rouletteList = localStorage.getItem('roulette') || [];
    return JSON.parse(rouletteList);
  };

  const isInRoulette = (restaurant) => {
    const rouletteList = getRouletteList();
    return rouletteList.includes(restaurant);
  };

  const pushRoulette = (restaurant) => {
    const rouletteList = getRouletteList();
    rouletteList.push(restaurant);
    localStorage.setItem('roulette', rouletteList);
  };

  return { getRouletteList, isInRoulette, pushRoulette };
};
