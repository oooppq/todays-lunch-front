/* eslint-disable react/prop-types */
import React from 'react';
import { WishAndRoulette } from './restaurant.style';
import wishIcon from '../../assets/img/restaurant-heart-icon.svg';
import rouletteIcon from '../../assets/img/restaurant-roulette-icon.svg';
import coloredWishIcon from '../../assets/img/restaurant-colored-heart-icon.svg';
import coloredRouletteIcon from '../../assets/img/restaurant-colored-roulette-icon.svg';
import { useRoulette, useWish } from '../../libs/common.helpers';

const ListElemWishAndRoulette = ({ restaurant }) => {
  const { isInRouletteFlag, updateRouletteFlag, pushRoulette } =
    useRoulette(restaurant);
  const { isWish, pushWish } = useWish(restaurant.id);

  return (
    <WishAndRoulette>
      <button
        className={isWish ? 'colored' : null}
        type="button"
        onClick={(event) => {
          pushWish();
          event.stopPropagation();
        }}
      >
        <img src={isWish ? coloredWishIcon : wishIcon} alt="" />
      </button>
      <button
        className={isInRouletteFlag ? 'colored' : null}
        type="button"
        onClick={(event) => {
          pushRoulette();
          updateRouletteFlag();
          event.stopPropagation();
        }}
      >
        <img
          src={isInRouletteFlag ? coloredRouletteIcon : rouletteIcon}
          alt=""
        />
      </button>
    </WishAndRoulette>
  );
};

export default ListElemWishAndRoulette;
