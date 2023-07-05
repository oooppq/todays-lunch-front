/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/react-in-jsx-scope */
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useMutation, useQuery } from 'react-query';
import { useAuth } from './userAuth.helpers';

export const useWish = (id) => {
  const url = `/api/restaurants/${id}/mystore`;
  const { authInfo, isAuthorized } = useAuth();

  const { data: isWishRes } = (id &&
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

  const isWish = isAuthorized() && isWishRes;

  const handlePushWish = (navigate) => {
    if (isAuthorized()) {
      pushWish();
    } else {
      navigate('/login');
    }
  };

  return { isWish, pushWish, handlePushWish };
};

export const useRoulette = (id) => {
  const navigate = useNavigate();
  const rouletteLimit = 6;
  const [isInRoulette, setIsInRoulette] = useState(false);

  const getRouletteList = () => {
    const rouletteList = JSON.parse(localStorage.getItem('roulette')) || [];
    return rouletteList;
  };
  const [rouletteList, setRouletteList] = useState(getRouletteList());

  const isRouletteFull = () => {
    if (rouletteList.length >= rouletteLimit) return true;
    return false;
  };

  const pushRoulette = (restaurant) => {
    const tempRouletteList = getRouletteList();
    if (restaurant) {
      for (let i = 0; i < tempRouletteList.length; i += 1) {
        if (tempRouletteList[i].id === restaurant.id) {
          const newRouletteList = [...tempRouletteList];
          newRouletteList.splice(i, 1);
          localStorage.setItem('roulette', JSON.stringify(newRouletteList));
          setRouletteList(newRouletteList);
          if (id !== null) setIsInRoulette(false);
          return;
        }
      }
      if (tempRouletteList.length >= 6) {
        navigate('/play', { state: { fullFlag: true, toAdd: restaurant } });
      } else {
        localStorage.setItem(
          'roulette',
          JSON.stringify([...tempRouletteList, restaurant])
        );
        setRouletteList([...tempRouletteList, restaurant]);
        if (id !== null) setIsInRoulette(true);
      }
    }
  };

  const clearRoulette = () => {
    localStorage.removeItem('roulette');
    setRouletteList([]);
  };

  useEffect(() => {
    if (id !== null) {
      setIsInRoulette(rouletteList.some((rest) => rest.id === id));
    }
  }, [id, rouletteList]);

  return {
    rouletteList,

    isRouletteFull,
    pushRoulette,
    clearRoulette,
    isInRoulette,
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
