/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { useRoulette, useWish } from '../../../libs/common.helpers';
import { ParticipatingRestaurantLi } from './participatingRestaurant.style';
import reviewIcon from '../../../assets/img/mypage-review-icon.svg';
import defaultImage from '../../../assets/img/default-image.png';
import { convertNum } from '../../../libs/utils';
import CroppedImage from '../../../components/CroppedImage';
// import rouletteIcon from '../../../assets/img/restaurant-roulette-icon.svg';
// import coloredWishIcon from '../../../assets/img/restaurant-colored-heart-icon.svg';
// import coloredRouletteIcon from '../../../assets/img/restaurant-colored-roulette-icon.svg';

const ParticipatingRestaurantElem = ({ restaurant }) => {
  const navigate = useNavigate();

  return (
    <ParticipatingRestaurantLi
      onClick={() => {
        navigate(`/restaurants/${restaurant.id}`);
      }}
    >
      <CroppedImage
        src={restaurant.imageUrl || defaultImage}
        style={{
          width: '50px',
          height: '50px',
          marginRight: '10px',
        }}
      />

      <div className="restInfo">
        <div className="restTitle">{restaurant.restaurantName}</div>
        <div className="restTags">
          <div className="cat foodCat">#{restaurant.foodCategory}</div>
          <div className="cat locCat">#{restaurant.locationCategory}</div>
        </div>
      </div>
      <div className="rating">{restaurant.rating.toFixed(1)}</div>
      {restaurant.reviewCount && (
        <div className="review">
          <img src={reviewIcon} alt="" className="reviewIcon" />
          <div className="reviewNum">{convertNum(restaurant.reviewCount)}</div>
        </div>
      )}
    </ParticipatingRestaurantLi>
  );
};

export default ParticipatingRestaurantElem;
