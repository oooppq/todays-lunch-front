/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/react-in-jsx-scope */
import axios from 'axios';
import { useState } from 'react';
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

export const useRoulette = (restaurant) => {
  const rouletteLimit = 6;

  const getRouletteList = () => {
    const rouletteList = JSON.parse(localStorage.getItem('roulette')) || [];
    return rouletteList;
  };

  const isInRoulette = () => {
    const rouletteList = getRouletteList();
    return rouletteList.some((rest) => rest.id === restaurant.id);
  };

  const isRouletteFull = () => {
    const rouletteList = getRouletteList();
    if (rouletteList.length >= rouletteLimit) return true;
    return false;
  };

  const pushRoulette = () => {
    const rouletteList = getRouletteList();
    for (let i = 0; i < rouletteList.length; i += 1) {
      if (rouletteList[i].id === restaurant.id) {
        rouletteList.splice(i, 1);
        localStorage.setItem('roulette', JSON.stringify(rouletteList));
        return;
      }
    }
    rouletteList.push(restaurant);
    localStorage.setItem('roulette', JSON.stringify(rouletteList));
  };
  const clearRoulette = () => {
    localStorage.removeItem('roulette');
  };

  const [isInRouletteFlag, setIsInRouletteFlag] = useState(
    isInRoulette(restaurant)
  );

  const updateRouletteFlag = () => {
    setIsInRouletteFlag(isInRoulette(restaurant));
  };

  return {
    getRouletteList,
    isRouletteFull,
    pushRoulette,
    clearRoulette,
    isInRouletteFlag,
    updateRouletteFlag,
  };
};
