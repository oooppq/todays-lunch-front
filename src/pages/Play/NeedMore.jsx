/* eslint-disable react/prop-types */
import React from 'react';
import rouletteImg from '../../assets/img/roulette.png';

const NeedMore = ({ goToRestaurants }) => {
  return (
    <div className="needMoreRestaurantOuter">
      <img src={rouletteImg} alt="" className="moreRestaurantImg" />
      <div className="moreRestaurantText">
        최소 <span className="">2개</span> 이상의 맛집을 담아야 <br />
        룰렛을 돌릴 수 있어요!
      </div>
      <button
        type="button"
        className="moreRestaurantBtn"
        onClick={goToRestaurants}
      >
        맛집 담으러 가기
      </button>
    </div>
  );
};

export default NeedMore;
