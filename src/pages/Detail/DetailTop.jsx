/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DetailTopContainer } from './detail.style';
import backIcon from '../../assets/img/detail-back-icon.svg';
import smallPencilIcon from '../../assets/img/detail-small-pencil-icon.svg';
import defaultImage from '../../assets/img/default-image.png';
import smallHeartIcon from '../../assets/img/detail-small-heart-icon.svg';
import dishIcon from '../../assets/img/detail-dish-icon.svg';
import pencilIcon from '../../assets/img/detail-review-icon.svg';
import heartIcon from '../../assets/img/detail-heart-icon.svg';
import coloredHeartIcon from '../../assets/img/colored-heart-icon.svg';
import rouletteIcon from '../../assets/img/detail-roulette-icon.svg';
import coloredRouletteIcon from '../../assets/img/colored-roulette-icon.svg';
import { handleGoBack } from './detail.helpers';
import { useRoulette, useWish } from '../../libs/common.helpers';

const DetailTop = ({ restaurant, tab, changeTab }) => {
  const navigate = useNavigate();
  const { isInRouletteFlag, updateRouletteFlag, pushRoulette } =
    useRoulette(restaurant);
  const { isWish, pushWish } = useWish(restaurant && restaurant.id);

  return (
    <DetailTopContainer>
      <button
        type="button"
        className="backBtn"
        onClick={() => {
          handleGoBack(navigate);
        }}
      >
        <img src={backIcon} alt="" />
      </button>

      <div className="restInfo">
        <img
          className="restImg"
          src={restaurant.imageUrl || defaultImage}
          alt=""
        />
        <div className="title">{restaurant.restaurantName}</div>
        <div className="reviewWish">
          <div className="reviewDiv">
            <img src={smallPencilIcon} alt="" />
            <span>{restaurant.reviewCount}</span>
          </div>
          <div className="wishDiv">
            <img src={smallHeartIcon} alt="" />
            <span>{restaurant.wishCount}</span>
          </div>
        </div>
        <div className="rate">{restaurant.rating}</div>
      </div>

      <ul className="navUl">
        <li
          className={`navLi main ${tab === 'main' ? 'active' : null}`}
          onClick={() => {
            changeTab('main');
          }}
          aria-hidden="true"
        >
          <img className="dish" src={dishIcon} alt="" />
        </li>
        <li
          className={`navLi review ${tab === 'review' ? 'active' : null}`}
          onClick={() => {
            changeTab('review');
          }}
          aria-hidden="true"
        >
          <img src={pencilIcon} alt="" />
        </li>
        <li
          className="navLi"
          onClick={() => {
            pushWish();
          }}
          aria-hidden="true"
        >
          <img src={isWish ? coloredHeartIcon : heartIcon} alt="" />
        </li>
        <li className="navLi">
          <img
            src={isInRouletteFlag ? coloredRouletteIcon : rouletteIcon}
            alt=""
            onClick={() => {
              pushRoulette();
              updateRouletteFlag();
            }}
            aria-hidden="true"
          />
        </li>
      </ul>
    </DetailTopContainer>
  );
};

export default DetailTop;
