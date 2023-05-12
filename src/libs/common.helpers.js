/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/react-in-jsx-scope */
import axios from 'axios';
import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useSelector } from 'react-redux';

export const useWish = (id) => {
  const url = `/api/restaurants/${id}/mystore`;
  const userState = useSelector((state) => state.userAuth);

  const { data: isWish } =
    id &&
    useQuery(
      ['get', 'wishIsLike', id],
      () =>
        axios
          .get(url, {
            headers: {
              Authorization: `Bearer ${userState && userState.accessToken}`,
            },
          })
          .then((res) => res.data),
      { refetchOnWindowFocus: false }
    );

  const { mutate: pushWish } =
    id &&
    useMutation(() =>
      axios.post(url, null, {
        headers: {
          Authorization: `Bearer ${userState && userState.accessToken}`,
        },
      })
    );

  return { isWish, pushWish };
};

export const useRoulette = (restaurant) => {
  const rouletteLimit = 6;

  const getRouletteList = () => {
    const rouletteList = JSON.parse(localStorage.getItem('roulette')) || [];
    return rouletteList;
  };

  const isInRoulette = () => {
    if (restaurant) {
      const rouletteList = getRouletteList();
      return rouletteList.some((rest) => rest.id === restaurant.id);
    }
    return false;
  };

  const isRouletteFull = () => {
    const rouletteList = getRouletteList();
    if (rouletteList.length >= rouletteLimit) return true;
    return false;
  };

  const pushRoulette = () => {
    if (restaurant) {
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
    }
  };
  const clearRoulette = () => {
    localStorage.removeItem('roulette');
  };

  const [isInRouletteFlag, setIsInRouletteFlag] = useState(isInRoulette());

  const updateRouletteFlag = () => {
    setIsInRouletteFlag(isInRoulette());
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

export const useCustomNavigate = (navigate) => {
  const goToPrevPage = () => {
    navigate(-1);
  };

  const goToHomePage = () => {
    navigate('/');
  };
  return { goToPrevPage, goToHomePage };
};
