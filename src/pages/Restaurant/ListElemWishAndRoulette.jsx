/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { WishAndRoulette } from './restaurant.style';
import wishIcon from '../../assets/img/restaurant-heart-icon.svg';
import rouletteIcon from '../../assets/img/restaurant-roulette-icon.svg';
import coloredWishIcon from '../../assets/img/restaurant-colored-heart-icon.svg';
import coloredRouletteIcon from '../../assets/img/restaurant-colored-roulette-icon.svg';
import { useRoulette, useWish } from '../../libs/common.helpers';

const ListElemWishAndRoulette = ({ restaurant }) => {
  const { isInRoulette, pushRoulette } = useRoulette(restaurant.id);
  const { isWish, handlePushWish } = useWish(restaurant.id, restaurant.isLike);
  const navigate = useNavigate();

  return (
    <WishAndRoulette>
      <button
        className={isWish ? 'colored' : null}
        type="button"
        onClick={(event) => {
          handlePushWish(navigate);
          event.stopPropagation();
        }}
      >
        <img src={isWish ? coloredWishIcon : wishIcon} alt="" />
      </button>
      <button
        className={isInRoulette ? 'colored' : null}
        type="button"
        onClick={(event) => {
          pushRoulette(restaurant);
          event.stopPropagation();
        }}
      >
        <img src={isInRoulette ? coloredRouletteIcon : rouletteIcon} alt="" />
      </button>
    </WishAndRoulette>
  );
};

export default ListElemWishAndRoulette;
