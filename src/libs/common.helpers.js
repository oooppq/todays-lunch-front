/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/react-in-jsx-scope */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useMutation, useQuery } from 'react-query';
import { useAuth } from './userAuth.helpers';

export const useWish = (id) => {
  const url = `/api/restaurants/${id}/mystore`;
  const { authInfo, isAuthorized } = useAuth();

  const { data: isWish } = (id &&
    useQuery(
      ['get', 'wishIsLike', id],
      () =>
        axios
          .get(url, {
            headers: {
              Authorization: `Bearer ${authInfo && authInfo.accessToken}`,
            },
          })
          .then((res) => res.data),
      { refetchOnWindowFocus: false }
    )) || { data: false };

  const { mutate: pushWish } = (id &&
    useMutation(() =>
      axios.post(url, null, {
        headers: {
          Authorization: `Bearer ${authInfo && authInfo.accessToken}`,
        },
      })
    )) || { mutate: () => {} };

  const handlePushWish = (navigate) => {
    if (isAuthorized()) {
      pushWish();
    } else {
      navigate('/login');
    }
  };

  return { isWish, pushWish, handlePushWish };
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

export const useInfiniteScroll = (data, getNextPage) => {
  const [ref, inview] = useInView();
  /* observer div가 inview 상태로 지속될 때, request가 여러 번
  전송되는 것을 막기 위한 flag */
  const [hasRequestedNextPage, setHasRequestedNextPage] = useState(false);

  useEffect(() => {
    if (data && getNextPage && inview && !hasRequestedNextPage) {
      setHasRequestedNextPage(true);

      getNextPage();
    }
  }, [data, getNextPage, hasRequestedNextPage, inview]);

  useEffect(() => {
    if (!inview) {
      setHasRequestedNextPage(false);
    }
  }, [inview]);

  const ObserverDiv = <div ref={ref} className="observer" />;

  return { ObserverDiv };
};
