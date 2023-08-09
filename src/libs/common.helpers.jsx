/* eslint-disable react/react-in-jsx-scope */
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useMutation, useQueryClient } from 'react-query';
import { useAuth } from './userAuth.helpers';
import xIcon from '../assets/img/x-icon.svg';
import shareIcon from '../assets/img/share-icon.svg';
import copyIcon from '../assets/img/copy-icon.svg';

import {
  ShareModalContainer,
  ShareModalBtnContainer,
} from '../pages/common.style';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const useWish = (id, _isWish) => {
  const url = `${SERVER_URL}/restaurants/${id}/mystore`;
  const { authInfo, isAuthorized } = useAuth();
  const queryClient = useQueryClient();
  const [isWish, setIsWish] = useState(_isWish);
  // const { data: isWishRes } = (id &&
  //   useQuery(
  //     ['get', 'wishIsLike', id],
  //     () =>
  //       axios
  //         .get(url, {
  //           headers: {
  //             Authorization: `Bearer ${authInfo && authInfo.accessToken}`,
  //           },
  //         })
  //         .then((res) => res.data),
  //     { refetchOnWindowFocus: false }
  //   )) || { data: false };

  const { mutate: pushWish } = useMutation(
    ['push', 'isLike'],
    () =>
      axios.post(url, null, {
        headers: {
          Authorization: `Bearer ${authInfo && authInfo.accessToken}`,
        },
      }),
    { onSuccess: () => queryClient.invalidateQueries(['wishList']) }
  );

  // const isWish = isAuthorized() && isWishRes;

  const handlePushWish = (navigate) => {
    if (isAuthorized()) {
      pushWish();
      setIsWish((state) => !state);
    } else {
      navigate('/login');
    }
  };

  useEffect(() => {
    setIsWish(_isWish);
  }, [_isWish]);
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

  // const ObserverDiv = () => {
  //   return <div ref={ref} className="observer" />;
  // };

  return { observerRef: ref };
};

export const useShare = (restaurant) => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const url = 'http://localhost:3000';

  const openShareModal = () => {
    setIsShareModalOpen(true);
  };

  const closeShareModal = () => {
    setIsShareModalOpen(false);
    setIsCopied(false);
  };

  const kakaoShare = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      const appKey = '29d882a1b8ccf782c6db4d2eb0eac6b3';
      const templateId = 95761;
      if (!kakao.isInitialized()) {
        kakao.init(appKey);
      }
      kakao.Share.sendCustom({
        templateId,
        templateArgs: {
          imgUrl: restaurant.imageUrl,
          title: restaurant.restaurantName,
          rating: restaurant.rating,
          reviewCount: restaurant.reviewCount,
          tags: `#${restaurant.foodCategory} #${restaurant.locationCategory} #${restaurant.locationTag}`,
          btnTitle: "'점메추'에서 자세히 보기",
          id: restaurant.id,
        },
      });
      // console.log(process);
      // kakao.Share.sendDefault({
      //   objectType: 'feed', // 카카오 링크 공유 여러 type들 중 feed라는 타입 -> 자세한 건 카카오에서 확인
      //   content: {
      //     title: restaurant.restaurantName, // 인자값으로 받은 title
      //     description: `평점: ${restaurant.rating}\n리뷰: ${restaurant.reviewCount}개\n#${restaurant.foodCategory} #${restaurant.locationCategory} #${restaurant.locationTag}`, // 인자값으로 받은 title
      //     // description: `평점: ${restaurant.rating}\n리뷰: ${restaurant.reviewCount}개`, // 인자값으로 받은 title
      //     imageUrl: restaurant.imageUrl,
      //     // imageUrl:
      //     //   'https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png',
      //     // imageWidth: 30,
      //     // imageHeight: 30,

      //     link: {
      //       mobileWebUrl: url, // 인자값으로 받은 route(uri 형태)
      //       webUrl: url,
      //     },
      //   },
      //   buttons: [
      //     {
      //       title: "'점메추'에서 자세히 보기",
      //       link: {
      //         mobileWebUrl: url.concat(`/restaurants/${restaurant.id}`),
      //         webUrl: url.concat(`/restaurants/${restaurant.id}`),
      //       },
      //     },
      //   ],
      // });
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(url.concat(`/restaurants/${restaurant.id}`));
    setIsCopied(true);
  };

  const ShareModalBtn = () => {
    return (
      <ShareModalBtnContainer onClick={openShareModal}>
        <img src={shareIcon} alt="" />
      </ShareModalBtnContainer>
    );
  };

  const ShareModal = () => {
    return (
      <ShareModalContainer>
        <div className="modalInner">
          <div className="title">공유하기</div>
          <button type="button" className="closeBtn" onClick={closeShareModal}>
            <img src={xIcon} alt="" />
          </button>
          <button type="button" className="shareInnerBtn" onClick={kakaoShare}>
            <img
              src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
              alt=""
            />
            <div>카카오톡</div>
          </button>
          <button type="button" className="shareInnerBtn" onClick={copyLink}>
            <img src={copyIcon} alt="" />
            <div>{isCopied ? '복사 완료!' : 'URL 복사'}</div>
          </button>
        </div>
      </ShareModalContainer>
    );
  };
  return {
    isShareModalOpen,
    ShareModalBtn,
    ShareModal,
  };
};
