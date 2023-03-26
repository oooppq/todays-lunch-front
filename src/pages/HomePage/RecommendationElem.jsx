/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  RecommendationInfoUp,
  RecommendationInfoDown,
  RecommendationElemContainer,
} from './homePage.style';
import defaultImage from '../../assets/img/가츠벤또.png';
import wishIcon from '../../assets/img/add-wish-icon.svg';
import rouletteIcon from '../../assets/img/add-roulette-icon.svg';
import { gotoDetailOnClick, convertNum } from '../../libs/utils';
import { useRoulette, useWish } from '../../libs/common.helpers';

const RecommendationElem = ({ restaurant }) => {
  const navigate = useNavigate();
  const { isInRouletteFlag, updateRouletteFlag, pushRoulette } =
    useRoulette(restaurant);
  const { isWish, pushWish } = useWish(restaurant.id);

  return (
    <RecommendationElemContainer
      id={restaurant.id}
      onClick={() => gotoDetailOnClick(restaurant.id, navigate)}
    >
      <RecommendationInfoUp>
        <img className="restaurantImage" src={defaultImage} alt="" />
        <div className="infoUpInner">
          <button
            type="button"
            className={`btn wishBtn ${isWish ? 'colored' : null}`}
            onClick={(event) => {
              pushWish();
              event.stopPropagation();
            }}
          >
            <img className="icon" src={wishIcon} alt="" />
          </button>
          <button
            type="button"
            className={`btn rouletteBtn ${isInRouletteFlag ? 'colored' : null}`}
            onClick={(event) => {
              pushRoulette();
              updateRouletteFlag();
              event.stopPropagation();
            }}
          >
            <img className="icon" src={rouletteIcon} alt="" />
          </button>
          <div className="lowestPrice">
            {convertNum(restaurant.lowest_price)}원 ~
          </div>
        </div>
      </RecommendationInfoUp>
      <RecommendationInfoDown>
        <div className="title">
          <span>[{restaurant.location_category}</span>
          <span> {restaurant.location_tag}] </span>
          <span>{restaurant.name}</span>
        </div>
        <div className="comment">"{restaurant.comment}"</div>
        <div className="reviewRate">
          <span className="reviewNum">리뷰 {restaurant.rating}개</span>
          {' | '}
          <span className="rating">별점 {restaurant.rating}</span>
        </div>
      </RecommendationInfoDown>
    </RecommendationElemContainer>
  );
};

export default RecommendationElem;
