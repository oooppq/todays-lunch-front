/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  RecommendationInfoUp,
  RecommendationInfoDown,
  RecommendationElemContainer,
} from './homePage.style';
import defaultImage from '../../assets/img/default-image.png';
import wishIcon from '../../assets/img/restaurant-heart-icon.svg';
import rouletteIcon from '../../assets/img/restaurant-roulette-icon.svg';
import coloredWishIcon from '../../assets/img/restaurant-colored-heart-icon.svg';
import coloredRouletteIcon from '../../assets/img/restaurant-colored-roulette-icon.svg';
import { gotoDetailOnClick, convertNum } from '../../libs/utils';
import { useRoulette, useWish } from '../../libs/common.helpers';
import CroppedImage from '../../components/CroppedImage';

const RecommendationElem = ({ restaurant }) => {
  const navigate = useNavigate();
  const { isInRoulette, pushRoulette } = useRoulette(restaurant.id);
  const { isWish, handlePushWish } = useWish(restaurant.id, restaurant.liked);

  return (
    <RecommendationElemContainer
      id={restaurant.id}
      onClick={() => gotoDetailOnClick(restaurant.id, navigate)}
    >
      <RecommendationInfoUp>
        <CroppedImage
          style={{
            width: '100%',
            height: '266px',
          }}
          src={restaurant.imageUrl || defaultImage}
        />

        <div className="infoUpInner">
          {restaurant.lowestPrice && (
            <div className="lowestPrice">
              {convertNum(restaurant.lowestPrice)}원 ~
            </div>
          )}
        </div>
      </RecommendationInfoUp>
      <RecommendationInfoDown>
        <div className="left">
          <div className="titleOuter">
            <span>[{restaurant.locationCategory}</span>
            <span> {restaurant.locationTag}] </span>
            <span className="title">{restaurant.restaurantName}</span>
          </div>
          {restaurant.bestReview && (
            <div className="comment">"{restaurant.bestReview}"</div>
          )}
          <div className="reviewRate">
            <span className="reviewNum">
              리뷰 {convertNum(restaurant.reviewCount)}개
            </span>
            {' | '}
            <span className="rating">
              별점 {Number(restaurant.rating).toFixed(1)}
            </span>
          </div>
        </div>
        <div className="right">
          <button
            type="button"
            className={`btn wishBtn ${isWish ? 'colored' : null}`}
            onClick={(event) => {
              handlePushWish(navigate);
              event.stopPropagation();
            }}
          >
            <img
              className="icon"
              src={isWish ? coloredWishIcon : wishIcon}
              alt=""
            />
          </button>
          <button
            type="button"
            className={`btn rouletteBtn ${isInRoulette ? 'colored' : null}`}
            onClick={(event) => {
              pushRoulette(restaurant);
              event.stopPropagation();
            }}
          >
            <img
              className="icon"
              src={isInRoulette ? coloredRouletteIcon : rouletteIcon}
              alt=""
            />
          </button>
        </div>
      </RecommendationInfoDown>
    </RecommendationElemContainer>
  );
};

export default RecommendationElem;
