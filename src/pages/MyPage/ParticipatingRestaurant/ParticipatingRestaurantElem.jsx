/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRoulette, useWish } from '../../../libs/common.helpers';
import { ParticipatingRestaurantLi } from './participatingRestaurant.style';
import wishIcon from '../../../assets/img/restaurant-heart-icon.svg';
import rouletteIcon from '../../../assets/img/restaurant-roulette-icon.svg';
import coloredWishIcon from '../../../assets/img/restaurant-colored-heart-icon.svg';
import coloredRouletteIcon from '../../../assets/img/restaurant-colored-roulette-icon.svg';

const ParticipatingRestaurantElem = ({ restaurant }) => {
  const { isInRoulette, pushRoulette } = useRoulette(restaurant.id);
  const { isWish, pushWish } = useWish(restaurant.id, restaurant.liked);
  const navigate = useNavigate();

  return (
    <ParticipatingRestaurantLi
      onClick={() => {
        navigate(`/restaurants/${restaurant.id}`);
      }}
    >
      <img src={restaurant.imageUrl} alt="" className="restImg" />
      <div className="restInfo">
        <div className="restTitle">{restaurant.restaurantName}</div>
        <div className="restTags">
          <div className="cat foodCat">#{restaurant.foodCategory}</div>
          <div className="cat locCat">#{restaurant.locationCategory}</div>
        </div>
      </div>
      <div className="wishAndRoulette">
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
          className={isInRoulette ? 'colored' : null}
          type="button"
          onClick={(event) => {
            pushRoulette(restaurant);
            event.stopPropagation();
          }}
        >
          <img src={isInRoulette ? coloredRouletteIcon : rouletteIcon} alt="" />
        </button>
      </div>
    </ParticipatingRestaurantLi>
  );
};

export default ParticipatingRestaurantElem;
